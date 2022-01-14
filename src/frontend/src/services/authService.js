import axios from "axios";
//const baseUrlLocal = `http://localhost:8080/api`
const baseUrl = `https://jumbles.herokuapp.com/api`


export default function setHeaders() {
    axios.defaults.headers.common['Authorization'] = '';
    delete axios.defaults.headers.common['Authorization'];
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        return axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;
    }
}
setHeaders();

////////////////////
///////Auth////////
///////////////////
export const signup = (username, email, password) => {
    return axios
        .post(`${baseUrl}/auth/signup` , {
                username,
                email,
                password
            }
        )
};

export const login = async (username, password) => {
    return await axios
        .post(`${baseUrl}/auth/signin`, {
            username,
            password
        }, {
            headers:{
                'Access-Control-Allow-Origin': '*',
            },
            withCredentials:true,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data;
        });
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};
