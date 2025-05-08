import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Container, Col, Row } from 'react-bootstrap';
import Product from '../../components/Product/Product';
import { useEffect, useState } from 'react';
import { getProduct } from '../../services/productService';
import Pagination from '@mui/material/Pagination';

const cx = classNames.bind(styles);

function Home() {
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0); // Total number of products
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const productsPerPage = 42; // Limit to 42 products per page
    console.log(products);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProduct(currentPage, productsPerPage);
                setProducts(response.products); // Assuming the API returns { products, total }
                setTotalProducts(response.total); // Total number of products
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };

        fetchProducts();
    }, [currentPage]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <Container className={cx('custom_container_home')}>
            <Row>
                <Col>
                    <div className={cx('today_suggest')}>GỢI Ý HÔM NAY</div>
                </Col>
            </Row>
            <Row xl={6} className={cx('custom_row_home')}>
                {products.map((product) => (
                    <Col key={product.ProductID} className={cx('custom_col_home')}>
                        <Product
                            img={`http://localhost:5000/uploads/images/productBackGroundImage/${product.BackGround}`}
                            name={product.Name}
                            price={product.Original_price}
                            id={product.ProductID}
                            slug={product.Slug}
                            discount={product.Discount_percentage}
                        />
                    </Col>
                ))}
            </Row>
            <Row>
                <Col className={cx('pagination_wrapper')}>
                    <Pagination
                        count={Math.ceil(totalProducts / productsPerPage)} // Total pages
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                        size="large"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
