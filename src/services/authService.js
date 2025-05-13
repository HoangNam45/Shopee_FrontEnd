import axios from 'axios';

export const register = async (userData) => {
    const response = await axios.post(`${process.env.REACT_APP_SHOPEE_BASE_URL}/auth/register`, userData);
    return response.data;
};

export const login = async (credentials) => {
    const response = await axios.post(`${process.env.REACT_APP_SHOPEE_BASE_URL}/auth/login`, credentials);
    return response.data;
};
