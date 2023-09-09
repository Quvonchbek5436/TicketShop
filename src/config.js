import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_GLOBAL,
    // headers: { Authorization: "Bearer " + store.getState()?.user.insta.user }
});