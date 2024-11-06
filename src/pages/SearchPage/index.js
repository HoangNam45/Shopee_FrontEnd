import classNames from 'classnames/bind';
import styles from './SearchPage.module.scss';
import { Container, Col, Row } from 'react-bootstrap';
import Product from '../../components/Product/Product';
import { useEffect, useState } from 'react';
import { getProductsBySearch } from '../../services/productService';
import { useLocation } from 'react-router-dom';
const cx = classNames.bind(styles);

function SearchPage() {
    const [products, setProducts] = useState([]);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const keyword = queryParams.get('keyword');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProductsBySearch(keyword);
                setProducts(response);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };

        fetchProducts();
    }, [keyword]);
    return (
        <Container className={cx('custom_container_search')}>
            {/* <Row>
                <Col>
                    <div className={cx('today_suggest')}>GỢI Ý HÔM NAY</div>
                </Col>
            </Row> */}
            <Row xl={6} className={cx('custom_row_search')}>
                {products.map((product) => (
                    <Col key={product.Id} className={cx('custom_col_search')}>
                        <Product
                            img={`http://localhost:5000/uploads/images/productBackGroundImage/${product.BackGround}`}
                            name={product.Name}
                            price={product.Price}
                            id={product.Id}
                            slug={product.Slug}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default SearchPage;
