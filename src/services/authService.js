import axios from 'axios';

export const register = async (userData) => {
    const response = await axios.post(`http://localhost:5000/register`, userData);
    return response.data;
};

export const login = async (credentials) => {
    const response = await axios.post(`http://localhost:5000/login`, credentials);
    return response.data;
};