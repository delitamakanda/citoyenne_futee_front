import { axiosInstance } from "@/api/axiosConfig.ts";

export const login = async (email: string, password: string) => {
    try {
        const response = await axiosInstance.post('/api/accounts/token', { email, password });
        return response.data;
    } catch (error) {
        throw new Error('Invalid credentials or account not found. Please try again.');
    }
}

export const register = async (name: string, email: string, password: string) => {
    try {
        const response = await axiosInstance.post('/api/accounts/register', { name, email, password });
        return response.data;
    } catch (error) {
        throw new Error('Invalid credentials or account already exists. Please try again.');
    }
}

export const forgotPassword = async (email: string) => {
    try {
        const response = await axiosInstance.post('/api/accounts/forgot-password', { email });
        return response.data;
    } catch (error) {
        throw new Error('Invalid email address. Please try again.');
    }
}