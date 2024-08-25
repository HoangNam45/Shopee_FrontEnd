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
