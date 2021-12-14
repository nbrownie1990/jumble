import axios from "axios";
import authHeader from "../auth/AuthHeader";

const baseUrl = `http://localhost:8080/api/test`

export const getPublicContent = () => {
    return axios.get(`${baseUrl}/all`);
};

export const getUserBoard = () => {
    return axios.get(`${baseUrl}/user`, { headers:authHeader() });
};

export const getModeratorBoard = () => {
    return axios.get(`${baseUrl}/mod`, { headers:authHeader() });
};

export const getAdminBoard = () => {
    return axios.get(`${baseUrl}/admin`, { headers: authHeader() });
};
