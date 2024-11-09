import classNames from 'classnames/bind';
import styles from './ProductList.module.scss';
import '../../assets/styles/globalClass.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import Button from '../Button/Button';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import formatPrice from '../../utils/formarPrice';
import { Pagination } from '@mui/material';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const ProductList = ({ products, totalProducts, limit, handleDataFromPagination, currentPage }) => {
    const handlePageChange = (event, value) => {
        handleDataFromPagination(value);
    };

    return (
        <div className={cx('board', 'product_list_container')}>
            {/* <div className={cx('product_list_search')}>
                <div className={cx('product_list_search_')}>
                    <FontAwesomeIcon className={cx('search_icon')} icon={faMagnifyingGlass} />
                    <input
                        className={cx('product_list_search_input')}
                        type="text"
                        placeholder="Tìm Tên sản phẩm, SKU sản phẩm, SKU phân loại, Mã sản phẩm"
                    />
                </div>
                <Button className={cx('product_list_search_button')} quite_small primary_text>
                    Áp dụng
                </Button>
                <Button className={cx('product_list_search_button')} quite_small text>
                    Nhập lại
                </Button>
            </div> */}

            <div className={cx('product_list_amout')}>{totalProducts} Sản Phẩm</div>

            <TableContainer
                sx={{
                    borderRadius: '4px',
                    border: '1px solid #e5e5e5',
                }}
            >
                <Table>
                    <TableHead
                        sx={{
                            backgroundColor: '#F6F6F6',
                        }}
                    >
                        <TableRow>
                            {/* <TableCell className={cx('product_list_header')} style={{ width: '2%' }}>
                                <Checkbox />
                            </TableCell> */}
                            <TableCell className={cx('product_list_header')} style={{ width: '38%' }}>
                                Tên sản phẩm
                            </TableCell>
                            <TableCell className={cx('product_list_header')} style={{ width: '16.5%' }}>
                                Doanh số
                            </TableCell>
                            <TableCell className={cx('product_list_header')} style={{ width: '16.5%' }}>
                                Giá
                            </TableCell>
                            <TableCell className={cx('product_list_header')} style={{ width: '16.5%' }}>
                                Kho hàng
                            </TableCell>
                            <TableCell className={cx('product_list_header')} style={{ width: '10.5%' }}>
                                Thao tác
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product, index) => (
                            <TableRow key={index}>
                                {/* <TableCell>
                                    <Checkbox />
                                </TableCell> */}
                                <TableCell>
                                    <div className={cx('product_list_body_name')}>
                                        <div className={cx('product_list_body_name_img')}>
                                            <img
                                                className={cx('product_list_body_name_img_')}
                                                src={`http://localhost:5000/uploads/images/productBackGroundImage/${product.BackGround}`}
                                                alt="img"
                                            />
                                        </div>
                                        <div className={cx('product_list_body_name_info')}>
                                            {product.Status === 'hidden' && (
                                                <span className={cx('product_list_body_name_info_hidden')}>Đã ẩn</span>
                                            )}

                                            <div className={cx('product_list_body_name_info_name')}>{product.Name}</div>
                                            <div className={cx('product_list_body_name_info_SKU')}>
                                                SKU sản phẩm: - {product.SKU}
                                            </div>
                                            {/* <div className={cx('product_list_body_name_info_ID')}>
                                            ID Sản phẩm: 255123128379
                                        </div> */}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className={cx('product_list_body_satistic')}>0</TableCell>
                                <TableCell className={cx('product_list_body_satistic')}>
                                    ₫{formatPrice(product.Price)}
                                </TableCell>
                                <TableCell className={cx('product_list_body_satistic')}>{product.Stock}</TableCell>
                                <TableCell>
                                    <Link
                                        to={`http://localhost:3000/seller/portal_product/${product.Id}`}
                                        className={cx('product_list_body_operation')}
                                    >
                                        Cập nhật
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Pagination
                    count={Math.ceil(totalProducts / limit)}
                    page={currentPage}
                    className={cx('product_list_pagination')}
                    size="large"
                    shape="rounded"
                    onChange={handlePageChange}
                />
            </TableContainer>
        </div>
    );
};

export default ProductList;
