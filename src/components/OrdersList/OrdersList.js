import classNames from 'classnames/bind';
import styles from './OrdersList.module.scss';
import '../../assets/styles/globalClass.scss';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter } from '@mui/material';
import formatPrice from '../../utils/formarPrice';
import Button from '../Button/Button';
import { updateOrderStatus } from '../../services/sellerService';
const cx = classNames.bind(styles);
const OrdersList = ({ orderData, setOrderData }) => {
    const handleUpdateStatus = async (orderId, orderStatus) => {
        await updateOrderStatus(orderId, orderStatus);
        const newOrderData = orderData.filter((order) => order.order_id !== orderId);
        setOrderData(newOrderData);
    };
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
                </Table>
            </TableContainer>
            {orderData.map((order, index) => (
                <TableContainer
                    sx={{
                        borderRadius: '4px',
                        border: '1px solid #f9f9f9',
                        marginTop: '30px',
                    }}
                    key={index}
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
                                    {order.order_items.map((item, index) => (
                                        <div key={index} className={cx('orders_list_body_product_wrapper')}>
                                            <div className={cx('orders_list_body_product')}>
                                                <img
                                                    src={`${process.env.REACT_APP_SHOPEE_BASE_URL}/uploads/images/productBackGroundImage/${item.BackGround}`}
                                                    className={cx('orders_list_body_product_img')}
                                                    alt="product"
                                                />
                                                <div className={cx('orders_list_body_product_name')}>
                                                    {item.ProductName}
                                                </div>
                                            </div>
                                            <div className={cx('orders_list_body_product_quantity')}>
                                                x{item.quantity}
                                            </div>
                                        </div>
                                    ))}
                                </TableCell>
                                <TableCell>
                                    {order.order_items.map((item, index) => (
                                        <div key={index} className={cx('orders_list_body_total_price')}>
                                            <span>₫{formatPrice(item.price)}</span>
                                        </div>
                                    ))}
                                </TableCell>
                                <TableCell>
                                    {order.status === 'Pending' && (
                                        <div className={cx('orders_list_body_product_status_confirm')}>
                                            Chờ xác nhận
                                        </div>
                                    )}

                                    {order.status === 'Shipping' && (
                                        <div className={cx('orders_list_body_product_status_ship')}>Đang giao hàng</div>
                                    )}

                                    {order.status === 'Completed' && (
                                        <div className={cx('orders_list_body_product_status_complete')}>Thành công</div>
                                    )}

                                    {order.status === 'Failed Delivery' && (
                                        <div className={cx('orders_list_body_product_status_failed_delivery')}>
                                            Giao hàng không thành công
                                        </div>
                                    )}

                                    {order.status === 'Canceled' && (
                                        <div className={cx('orders_list_body_product_status_cancel')}>Đã hủy</div>
                                    )}
                                </TableCell>
                                <TableCell>
                                    {order.status === 'Pending' && (
                                        <div className={cx('orders_list_body_product_action')}>
                                            <Button
                                                onClick={() => handleUpdateStatus(order.order_id, 'Shipping')}
                                                primary
                                                small
                                                className={cx('orders_list_body_product_action_btn')}
                                            >
                                                Xác nhận
                                            </Button>
                                            <Button
                                                onClick={() => handleUpdateStatus(order.order_id, 'Canceled')}
                                                text
                                                small
                                            >
                                                Hủy
                                            </Button>
                                        </div>
                                    )}

                                    {order.status === 'Shipping' && (
                                        <div className={cx('orders_list_body_product_action')}>
                                            <Button
                                                onClick={() => handleUpdateStatus(order.order_id, 'Completed')}
                                                primary
                                                small
                                                className={cx('orders_list_body_product_action_btn')}
                                            >
                                                Đã giao
                                            </Button>
                                            <Button
                                                text
                                                small
                                                onClick={() => handleUpdateStatus(order.order_id, 'Failed Delivery')}
                                            >
                                                Giao hàng không thành công
                                            </Button>
                                        </div>
                                    )}
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
                                        Họ & Tên: {order.order_name}
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
                            <TableCell>
                                <div className={cx('orders_list_footer_product_shipping_total_price')}>
                                    Thành tiền:{' '}
                                    <span className={cx('orders_list_footer_product_shipping_total_price_')}>
                                        ₫{formatPrice(order.total_price)}
                                    </span>
                                </div>
                            </TableCell>
                        </TableFooter>
                    </Table>
                </TableContainer>
            ))}
        </>
    );
};

export default OrdersList;
