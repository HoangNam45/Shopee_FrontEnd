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

export const updateCartItemQuantity = async (productData) => {
    try {
        const response = await axios.put('http://localhost:5000/user/update_cart_item_quantity', productData, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating cart item quantity:', error);
        throw error;
    }
};

export const deleteCartItem = async (productId) => {
    try {
        const response = await axios.delete(`http://localhost:5000/user/delete_cart_item/${productId}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting cart item:', error);
        throw error;
    }
};

export const createOrder = async (orderData) => {
    try {
        const response = await axios.post('http://localhost:5000/user/create_order', orderData, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};
