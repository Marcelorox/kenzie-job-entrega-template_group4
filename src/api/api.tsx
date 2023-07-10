import axios from "axios";

export const api = axios.create({
    baseURL: "https://kenzie-job-api.onrender.com/",
    timeout: 8000,
})