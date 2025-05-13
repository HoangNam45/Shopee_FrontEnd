import { getToken } from './tokenService';
import axios from 'axios';

export const addProductToCard = async (productData) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_SHOPEE_BASE_URL}/user/add_product_to_cart`,
            productData,
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                    'Content-Type': 'application/json',
                },
            },
        );
        return response.data;
    } catch (error) {
        console.error('Error adding product to cart:', error);
        throw error;
    }
};

export const getUserCartItems = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/user/get_cart_items`, {
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
        const response = await axios.put(
            `${process.env.REACT_APP_SHOPEE_BASE_URL}/user/update_cart_item_quantity`,
            productData,
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                    'Content-Type': 'application/json',
                },
            },
        );
        return response.data;
    } catch (error) {
        console.error('Error updating cart item quantity:', error);
        throw error;
    }
};

export const deleteCartItem = async (productId) => {
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_SHOPEE_BASE_URL}/user/delete_cart_item/${productId}`,
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            },
        );
        return response.data;
    } catch (error) {
        console.error('Error deleting cart item:', error);
        throw error;
    }
};

export const createOrder = async (orderData) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SHOPEE_BASE_URL}/user/create_order`, orderData, {
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

export const getUserPendingPurchases = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/user/pending_purchases`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting user pending purchases:', error);
        throw error;
    }
};

export const getUserShippingPurchases = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/user/shipping_purchases`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting user pending purchases:', error);
        throw error;
    }
};

export const getUserCompletedPurchases = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/user/completed_purchases`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting user pending purchases:', error);
        throw error;
    }
};

export const getUserCanceledPurchases = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/user/canceled_purchases`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting user pending purchases:', error);
        throw error;
    }
};

export const getUserFailDeliveryPurchases = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/user/fail_delivery_purchases`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting user pending purchases:', error);
        throw error;
    }
};

export const getUserAllPurchases = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/user/all_purchases`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting user pending purchases:', error);
        throw error;
    }
};

export const getUserInfo = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/user/get_user_info`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting user name:', error);
        throw error;
    }
};

export const updateUserInfo = async (userData) => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_SHOPEE_BASE_URL}/user/update_user_info`, userData, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating user info:', error);
        throw error;
    }
};
