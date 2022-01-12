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
        .post(`/auth/signup` , {  //${baseUrl}?
                username,
                email,
                password
            },
            //{ headers: {
            //  'Content-Type': 'application/json',
            // }}
        )
};

export const login = async (username, password) => {
    return await axios
        .post(`/auth/signin`, { //${baseUrl}?
            username,
            password
        }, {
            headers:{
                'Access-Control-Allow-Origin': '*',
                // 'Content-Type': 'application/json',
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




// const user = JSON.parse(localStorage.getItem('user'));
// axios.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem(user.token);

// export const getToken = credentials =>
//   axios
//     .post(`${baseUrl}/auth/access_token`, credentials)
//     .then(response => response.data)
//     .then(dto => dto.token)
//
// const headers = token => ({
//   headers: {
//     Authorization: `Bearer ${user.token}`,
//   },
// })