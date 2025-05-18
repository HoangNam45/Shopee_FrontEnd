import { getCookie, setCookie, deleteCookie } from '../services/cookieService';
import { jwtDecode } from 'jwt-decode';
// Now, export your functions
export const getToken = () => {
    return getCookie('token');
};

export const setToken = (token) => {
    // Set token cookie with 2 days expiration to match your JWT
    setCookie('token', token, 3);
};

export const removeToken = () => {
    deleteCookie('token');
};

export const isAuthenticated = () => {
    return !!getToken();
};

export const getUserIdFromToken = () => {
    const token = getToken();
    if (!token) return null;
    try {
        const decoded = jwtDecode(token);

        // Adjust this if your payload uses a different key
        return decoded.id || null;
    } catch {
        return null;
    }
};
