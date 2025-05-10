import axios from 'axios';
import { getToken } from './tokenService';

export const addProduct = async (productData) => {
    const response = await axios.post(`${process.env.REACT_APP_SHOPEE_BASE_URL}/products/add_product`, productData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return response;
};

export const updateProduct = async (productId, productData) => {
    const response = await axios.put(
        `${process.env.REACT_APP_SHOPEE_BASE_URL}/products/update_product/${productId}`,
        productData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${getToken()}`,
            },
        },
    );
    return response;
};

export const updateProductStatus = async (productId, productStatus) => {
    const response = await axios.put(
        `${process.env.REACT_APP_SHOPEE_BASE_URL}/products/update_product_status/${productId}`,
        { productStatus },
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        },
    );
    return response;
};

export const getProduct = async (page, limit) => {
    const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/products/`, {
        params: {
            page,
            limit,
        },
    });
    return response.data;
};

export const getTotalProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/products/total`);
    return response.data;
};

export const getProductDetail = async (slug) => {
    const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/products/detail/${slug}`);
    return response.data;
};

export const getSellerLatestProducts = async (page, limit) => {
    const response = await axios.get(
        `${process.env.REACT_APP_SHOPEE_BASE_URL}/products/seller/latest_products?page=${page}&limit=${limit}`,
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
        `${process.env.REACT_APP_SHOPEE_BASE_URL}/products/seller/active_products?page=${page}&limit=${limit}`,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        },
    );
    return response.data;
};

export const deleteProduct = async (productId) => {
    const response = await axios.delete(
        `${process.env.REACT_APP_SHOPEE_BASE_URL}/products/delete_product/${productId}`,
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
        `${process.env.REACT_APP_SHOPEE_BASE_URL}/products/seller/hidden_products?page=${page}&limit=${limit}`,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        },
    );
    return response.data;
};

export const getSellerTotalProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/products/seller/total_products`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return response.data;
};

export const getSellerTotalActiveProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/products/seller/total_active_products`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return response.data;
};

export const getSellerTotalHiddenProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/products/seller/total_hidden_products`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return response.data;
};

export const getSellerDetailProduct = async (productId) => {
    const response = await axios.get(
        `${process.env.REACT_APP_SHOPEE_BASE_URL}/products/seller/detail_product/${productId}`,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        },
    );
    return response.data;
};

export const getProductsBySearch = async (query, page = 1, limit = 30, sortBy = 'latest') => {
    const response = await axios.get(`${process.env.REACT_APP_SHOPEE_BASE_URL}/products/search/`, {
        params: { query, page, limit, sortBy },
    });
    return response.data;
};

export const updateProductSold = async (productId, quantity) => {
    console.log(productId);
    console.log(quantity);
    const response = await axios.put(
        `${process.env.REACT_APP_SHOPEE_BASE_URL}/products/update_product_sold/${productId}`,
        { quantity },
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        },
    );
    return response.data;
};

export const updateProductStock = async (productId, quantity) => {
    const response = await axios.put(
        `${process.env.REACT_APP_SHOPEE_BASE_URL}/products/update_product_stock/${productId}`,
        { quantity },
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        },
    );
    return response.data;
};
