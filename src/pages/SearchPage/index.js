import classNames from 'classnames/bind';
import styles from './SearchPage.module.scss';
import { Container, Col, Row } from 'react-bootstrap';
import Button from '../../components/Button/Button';
import Product from '../../components/Product/Product';
import { useEffect, useState } from 'react';
import { getProductsBySearch } from '../../services/productService';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Pagination from '@mui/material/Pagination';
import NoResults from '../../components/NoResults/NoResults';

const cx = classNames.bind(styles);

function SearchPage() {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 30;
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const keyword = queryParams.get('keyword');
    const [sortBy, setSortBy] = useState('latest');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProductsBySearch(keyword, currentPage, productsPerPage, sortBy);
                console.log(response);
                setProducts(response.products);
                setTotal(response.total);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };

        fetchProducts();
    }, [keyword, currentPage, sortBy]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleSort = (type) => {
        setSortBy(type);
        setCurrentPage(1); // Reset to first page on sort change
    };

    return (
        <Container className={cx('custom_container_search')}>
            <Row>
                <Col>
                    <div className={cx('search_result_header_wrap')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon_search')} />
                        <div className={cx('search_result_header')}>
                            Kết quả tìm kiếm cho từ khóa
                            <span className={cx('keyword')}> "{keyword}"</span>
                        </div>
                    </div>
                </Col>
            </Row>
            {products.length === 0 ? (
                <NoResults message="Không tìm thấy kết quả nào :'(" />
            ) : (
                <>
                    <Row>
                        <Col>
                            <div className={cx('result_sort_wrapper')}>
                                <div className={cx('result_sort_text')}>Sắp xếp theo</div>
                                <Button
                                    primary={sortBy === 'latest'}
                                    text={sortBy !== 'latest'}
                                    small
                                    className={cx('btn_sort')}
                                    onClick={() => handleSort('latest')}
                                >
                                    Mới nhất
                                </Button>
                                <Button
                                    primary={sortBy === 'sold'}
                                    text={sortBy !== 'sold'}
                                    small
                                    className={cx('btn_sort')}
                                    onClick={() => handleSort('sold')}
                                >
                                    Bán chạy
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row xl={6} className={cx('custom_row_search')}>
                        {products.map((product) => (
                            <Col key={product.Id} className={cx('custom_col_search')}>
                                <Product
                                    img={`${process.env.REACT_APP_SHOPEE_BASE_URL}/uploads/images/productBackGroundImage/${product.BackGround}`}
                                    name={product.Name}
                                    price={product.Final_price}
                                    id={product.ProductID}
                                    slug={product.Slug}
                                    discount={product.Discount_percentage}
                                    sold={product.Sold}
                                />
                            </Col>
                        ))}
                    </Row>

                    <Row>
                        <Pagination
                            count={Math.ceil(total / productsPerPage)}
                            page={currentPage}
                            onChange={handlePageChange}
                            size="large"
                            shape="rounded"
                            className={cx('product_list_pagination')}
                        />
                    </Row>
                </>
            )}
        </Container>
    );
}

export default SearchPage;
