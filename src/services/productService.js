import axios from 'axios';
import { getToken } from './tokenService';

export const addProduct = async (productData) => {
    const response = await axios.post('http://localhost:5000/products/add_product', productData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return response;
};

export const updateProduct = async (productId, productData) => {
    const response = await axios.put(`http://localhost:5000/products/update_product/${productId}`, productData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return response;
};

export const getProduct = async () => {
    const response = await axios.get('http://localhost:5000/products');
    return response.data;
};

export const getProductDetail = async (slug) => {
    const response = await axios.get(`http://localhost:5000/products/detail/${slug}`);
    return response.data;
};

export const getSellerLatestProducts = async (page, limit) => {
    const response = await axios.get(
        `http://localhost:5000/products/seller/latest_products?page=${page}&limit=${limit}`,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        },
    );
    return response.data;
};

export const getSellerActiveProducts = async (page, limit) => {
    const response = await axios.get(
        `http://localhost:5000/products/seller/active_products?page=${page}&limit=${limit}`,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        },
    );
    return response.data;
};

export const getSellerHiddenProducts = async (page, limit) => {
    const response = await axios.get(
        `http://localhost:5000/products/seller/hidden_products?page=${page}&limit=${limit}`,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        },
    );
    return response.data;
};

export const getSellerTotalProducts = async () => {
    const response = await axios.get('http://localhost:5000/products/seller/total_products', {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return response.data;
};

export const getSellerTotalActiveProducts = async () => {
    const response = await axios.get('http://localhost:5000/products/seller/total_active_products', {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return response.data;
};

export const getSellerTotalHiddenProducts = async () => {
    const response = await axios.get('http://localhost:5000/products/seller/total_hidden_products', {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return response.data;
};

export const getSellerDetailProduct = async (productId) => {
    const response = await axios.get(`http://localhost:5000/products/seller/detail_product/${productId}`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return response.data;
};
