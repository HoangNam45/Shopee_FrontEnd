import axios from 'axios';
import { getToken } from './tokenService';

export const createDiscount = async (discountData) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_SHOPEE_BASE_URL}/discount/createDiscount`,
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

export const getDiscountsByProductId = async (productId) => {
    const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/discount/getDiscounts/${productId}`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return response.data;
};

export const getSellerDiscountedProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/discount/getSellerDiscountedProducts`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return response.data;
};

export const deleteDiscount = async (discountId) => {
    const response = await axios.delete(
        `${process.env.REACT_APP_SHOPEE_BASE_URL}/discount/deleteDiscount/${discountId}`,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        },
    );
    return response.data;
};
