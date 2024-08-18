import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Container, Col, Row } from 'react-bootstrap';
import Product from '../../components/Product/Product';
import { useEffect, useState } from 'react';
import { getProduct } from '../../services/productService';
const cx = classNames.bind(styles);

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProduct();
                setProducts(response);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };

        fetchProducts();
    }, []);
    return (
        <Container className={cx('custom_container_home')}>
            <Row>
                <Col>
                    <div className={cx('today_suggest')}>GỢI Ý HÔM NAY</div>
                </Col>
            </Row>
            <Row xl={6} className={cx('custom_row_home')}>
                {products.map((product) => (
                    <Col key={product.Id} className={cx('custom_col_home')}>
                        <Product
                            img={`http://localhost:5000/uploads/images/productBackGroundImage/${product.BackGround}`}
                            name={product.Name}
                            price={product.Price}
                            id={product.Id}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Home;
