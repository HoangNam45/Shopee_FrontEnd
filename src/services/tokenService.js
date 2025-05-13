import { getCookie, setCookie, deleteCookie } from '../services/cookieService';

// Now, export your functions
export const getToken = () => {
    return getCookie('token');
};

export const setToken = (token) => {
    // Set token cookie with 2 days expiration to match your JWT
    setCookie('token', token, 2);
};

export const removeToken = () => {
    deleteCookie('token');
};

export const isAuthenticated = () => {
    return !!getToken();
};
