import axios from 'axios';
import { getToken } from './tokenService';

export const getSellerInfo = async () => {
    const response = await axios.get('http://localhost:5000/seller/information', {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return response.data;
};

export const updateSellerInfo = async (formData) => {
    try {
        const response = await axios.put('http://localhost:5000/seller/updateInformation', formData, {
            headers: {
                Authorization: `Bearer ${getToken()}`, // Thêm token vào header để xác thực
                'Content-Type': 'multipart/form-data', // Để Axios tự động xác định content-type
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating seller information:', error);
        throw error;
    }
};

export const createDiscount = async (discountData) => {
    try {
        const response = await axios.post('http://localhost:5000/seller/createDiscount', discountData, {
            headers: {
                Authorization: `Bearer ${getToken()}`, // Thêm token vào header để xác thực
                'Content-Type': 'application/json', // Đặt content-type là application/json
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating discount:', error);
        throw error;
    }
};

export const getSellerPendingOrders = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/seller/pending_orders`, {
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
