import axios from 'axios';
import { getToken } from './tokenService';

export const getSellerInfo = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/seller/information`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return response.data;
};

export const updateSellerInfo = async (formData) => {
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_SHOPEE_BASE_URL}/seller/updateInformation`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`, // Thêm token vào header để xác thực
                    'Content-Type': 'multipart/form-data', // Để Axios tự động xác định content-type
                },
            },
        );
        return response.data;
    } catch (error) {
        console.error('Error updating seller information:', error);
        throw error;
    }
};

export const createDiscount = async (discountData) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_SHOPEE_BASE_URL}/seller/createDiscount`,
            discountData,
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`, // Thêm token vào header để xác thực
                    'Content-Type': 'application/json', // Đặt content-type là application/json
                },
            },
        );
        return response.data;
    } catch (error) {
        console.error('Error creating discount:', error);
        throw error;
    }
};

export const getSellerPendingOrders = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/seller/pending_orders`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting seller pending orders:', error);
        throw error;
    }
};

export const getSellerAllOrders = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/seller/all_orders`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting seller pending orders:', error);
        throw error;
    }
};

export const getSellerShippingOrders = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/seller/shipping_orders`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting seller shipping orders:', error);
        throw error;
    }
};

export const getSellerCanceledOrders = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/seller/canceled_orders`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting seller canceled orders:', error);
        throw error;
    }
};

export const getSellerFailedDeliveryOrders = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/seller/failed_delivery_orders`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting seller failed delivery orders:', error);
        throw error;
    }
};

export const getSellerCompletedOrders = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/seller/completed_orders`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error getting seller completed orders:', error);
        throw error;
    }
};

export const updateOrderStatus = async (orderId, status) => {
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_SHOPEE_BASE_URL}/seller/update_order_status/${orderId}`,
            { status },
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                    'Content-Type': 'application/json',
                },
            },
        );
        return response.data;
    } catch (error) {
        console.error('Error updating order status:', error);
        throw error;
    }
};
