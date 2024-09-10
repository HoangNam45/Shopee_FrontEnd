import classNames from 'classnames/bind';
import styles from './AllProduct.module.scss';
import { ProductManagementLayout } from '../../../components/Layouts';
import ProductList from '../../../components/ProductList/ProductList';
import { useEffect, useState } from 'react';
import { getSellerLatestProducts } from '../../../services/productService';
const cx = classNames.bind(styles);

const AllProduct = () => {
    useEffect(() => {
        const fetchData = async () => {
            const response = await getSellerLatestProducts();
            console.log(response);
        };
        fetchData();
    }, []);
    return (
        <>
            <ProductManagementLayout></ProductManagementLayout>
            <ProductList />
        </>
    );
};

export default AllProduct;
