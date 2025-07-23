import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000,
    withCredentials: true, // Enable cookies for cross-domain requests
})