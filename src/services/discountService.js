import axios from 'axios';
import { getToken } from './tokenService';

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

export const getDiscountsByProductId = async (productId) => {
    const response = await axios.get(`http://localhost:5000/discount/product/${productId}`);
    return response.data;
};
