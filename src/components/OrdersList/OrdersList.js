import classNames from 'classnames/bind';
import styles from './OrdersList.module.scss';
import '../../assets/styles/globalClass.scss';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter } from '@mui/material';
import formatPrice from '../../utils/formarPrice';
import { Pagination } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const cx = classNames.bind(styles);
const OrdersList = ({ orderData }) => {
    return (
        <>
            <TableContainer
                sx={{
                    borderRadius: '4px',
                    border: '1px solid #e5e5e5',
                    marginTop: '20px',
                }}
            >
                <Table>
                    <TableHead
                        sx={{
                            backgroundColor: '#F6F6F6',
                        }}
                    >
                        <TableRow>
                            <TableCell className={cx('orders_list_header')} style={{ width: '45%' }}>
                                Sản phẩm
                            </TableCell>
                            <TableCell className={cx('orders_list_header')} style={{ width: '18%' }}>
                                Tổng đơn hàng
                            </TableCell>
                            <TableCell className={cx('orders_list_header')} style={{ width: '19%' }}>
                                Trạng thái
                            </TableCell>
                            <TableCell className={cx('orders_list_header')} style={{ width: '18%' }}>
                                Thao tác
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    {/* <TableBody>
                        {products.map((product, index) => (
                            <TableRow key={index}>
                              
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
                    </TableBody> */}
                </Table>
                {/* <Pagination
                    count={Math.ceil(totalProducts / limit)}
                    page={currentPage}
                    className={cx('product_list_pagination')}
                    size="large"
                    shape="rounded"
                    onChange={handlePageChange}
                /> */}
            </TableContainer>
            {orderData.map((order, index) => (
                <TableContainer
                    sx={{
                        borderRadius: '4px',
                        border: '1px solid #f9f9f9',
                        marginTop: '30px',
                    }}
                    index={index}
                >
                    <Table>
                        <TableHead
                            sx={{
                                backgroundColor: '#F6F6F6',
                            }}
                        >
                            <TableRow>
                                <TableCell className={cx('orders_list_header')} style={{ width: '45%' }}>
                                    <div>
                                        <img
                                            alt="product"
                                            src="/images/DefaultUser.jpg"
                                            className={cx('orders_list_body_user_avt')}
                                        />
                                        <span className={cx('orders_list_body_user_name')}>{order.customer}</span>
                                    </div>
                                </TableCell>
                                <TableCell className={cx('orders_list_header')} style={{ width: '18%' }}></TableCell>
                                <TableCell className={cx('orders_list_header')} style={{ width: '19%' }}></TableCell>
                                <TableCell className={cx('orders_list_header')} style={{ width: '18%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <div className={cx('orders_list_body_product_wrapper')}>
                                        <div className={cx('orders_list_body_product')}>
                                            <img
                                                src={`${process.env.REACT_APP_SHOPEE_BASE_URL}/uploads/images/productBackGroundImage/${order.BackGround}`}
                                                className={cx('orders_list_body_product_img')}
                                                alt="product"
                                            />
                                            <div className={cx('orders_list_body_product_name')}>
                                                {order.ProductName}
                                            </div>
                                        </div>
                                        <div className={cx('orders_list_body_product_quantity')}>x{order.quantity}</div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={cx('orders_list_body_total_price')}>
                                        ₫{formatPrice(order.price)}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={cx('orders_list_body_product_status')}>Chờ xác nhận</div>
                                </TableCell>
                                <TableCell>
                                    <div className={cx('orders_list_body_product_action')}>
                                        <Button primary small className={cx('orders_list_body_product_action_btn')}>
                                            Xác nhận
                                        </Button>
                                        <Button text small>
                                            Hủy
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter>
                            <TableCell>
                                <div>
                                    <div className={cx('orders_list_footer_product_shipping_info')}>
                                        Thông tin giao hàng
                                    </div>
                                    <div className={cx('orders_list_footer_product_shipping_info_detail')}>
                                        Họ & Tên: {order.name}
                                    </div>
                                    <div className={cx('orders_list_footer_product_shipping_info_detail')}>
                                        Số điện thoại: {order.phone}
                                    </div>
                                    <div className={cx('orders_list_footer_product_shipping_info_detail')}>
                                        Địa chỉ: {order.address}
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableFooter>
                    </Table>
                </TableContainer>
            ))}
        </>
    );
};

export default OrdersList;
