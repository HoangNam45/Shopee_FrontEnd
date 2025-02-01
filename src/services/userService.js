import { getToken } from './tokenService';
import axios from 'axios';

export const addProductToCard = async (productData) => {
    try {
        const response = await axios.post('http://localhost:5000/user/add_product_to_cart', productData, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding product to cart:', error);
        throw error;
    }
};

export const getUserCartItems = async () => {
    try {
        const response = await axios.get('http://localhost:5000/user/get_cart_items', {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting user cart items:', error);
        throw error;
    }
};
