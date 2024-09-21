// import classNames from 'classnames/bind';
// import styles from './AllProduct.module.scss';
import { ProductManagementLayout } from '../../../components/Layouts';
import ProductList from '../../../components/ProductList/ProductList';
import { useEffect, useState } from 'react';
import { getSellerHiddenProducts, getSellerTotalHiddenProducts } from '../../../services/productService';
// const cx = classNames.bind(styles);

const HiddenProduct = () => {
    const [productsData, setProductsData] = useState([]);
    const [totalProducts, setTotalProducts] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const limit = 8;

    useEffect(() => {
        const fetchData = async () => {
            const response = await getSellerHiddenProducts(currentPage, limit);
            console.log(response);
            setProductsData(response);
        };
        fetchData();
    }, [currentPage]);

    const handleDataFromPagination = (value) => {
        setCurrentPage(value);
    };

    useEffect(() => {
        const fetchTotalProducts = async () => {
            try {
                const response = await getSellerTotalHiddenProducts();
                console.log(response);
                setTotalProducts(response.totalHiddenProducts);
            } catch (error) {
                console.error('Errors fetching total products:', error);
            }
        };
        fetchTotalProducts();
    }, []);

    return (
        <>
            <ProductManagementLayout>
                <ProductList
                    products={productsData}
                    totalProducts={totalProducts}
                    limit={limit}
                    handleDataFromPagination={handleDataFromPagination}
                    currentPage={currentPage}
                />
            </ProductManagementLayout>
        </>
    );
};

export default HiddenProduct;
