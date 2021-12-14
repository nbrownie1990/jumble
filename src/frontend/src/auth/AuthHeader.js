import axios from "axios";

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        console.log(user.token);
        return {
            'Authorization': 'Bearer ' + user.token.toString()
        };
    } else {
        return {};
    }
}