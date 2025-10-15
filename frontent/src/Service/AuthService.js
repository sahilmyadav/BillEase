import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1.0';

export const login = async (data) => {
    return await axios.post(`${API_BASE_URL}/login`, data);
}
