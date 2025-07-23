import { axiosInstance } from './axiosConfig'

export const getCategories = async () => {
    try {
        const response = await axiosInstance.get('/api/lessons/categories')
        return response.data
    } catch (error) {
        throw new Error('Failed to fetch categories.')
    }
}
