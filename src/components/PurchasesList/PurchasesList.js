import classNames from 'classnames/bind';
import styles from './PurchasesList.module.scss';
import '../../assets/styles/globalClass.scss';
import formatPrice from '../../utils/formarPrice';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const cx = classNames.bind(styles);
const PurchasesList = ({ products }) => {
    console.log(products);
    const groupedProducts = products.reduce((acc, product) => {
        const key = `${product.order_id}-${product.sellerName}`;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(product);
        return acc;
    }, {});
    console.log(groupedProducts);
    return (
        <>
            {/* <div>
                {products.map((product) => (
                    <div key={product.order_item_id} className={cx('board', 'purchases-list')}>
                        <div className={cx('purchases-list_info_wrapper')}>
                            <div className={cx('purchases-list_info_header')}>
                                <div>
                                    <span className={cx('purchases-list_info_header_seller')}>Người bán</span>
                                    <img
                                        className={cx('purchases-list_info_header_seller_avatar')}
                                        src={`${process.env.REACT_APP_SHOPEE_BASE_URL}/uploads/images/sellerAvatar/${product.Avatar}`}
                                        alt="avt"
                                    />
                                    <span className={cx('purchases-list_info_header_seller_name')}>
                                        {product.sellerName}
                                    </span>
                                </div>
                                <span className={cx('purchases-list_info_header_status')}>
                                    {' '}
                                    {product.status === 'Pending' ? 'Chờ xác nhận' : product.status}
                                </span>
                            </div>

                            <div className={cx('purchases-list_info_body')}>
                                <img
                                    className={cx('purchases-list_info_body_img')}
                                    src={`${process.env.REACT_APP_SHOPEE_BASE_URL}/uploads/images/productBackGroundImage/${product.BackGround}`}
                                    alt="avt"
                                />
                                <div className={cx('purchases-list_info_body_product')}>
                                    <span className={cx('purchases-list_info_body_product_name')}>{product.Name}</span>
                                    <span className={cx('purchases-list_info_body_product_quantity')}>
                                        x{product.quantity}
                                    </span>
                                </div>
                                <div className={cx('body-space')}></div>
                                <div className={cx('purchases-list_info_body_price')}>
                                    <div className={cx('purchases-list_info_body_original_price')}>
                                        ₫{formatPrice(product.price)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
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
                            backgroundColor: '#FFF',
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
            {Object.keys(groupedProducts).map((key) => {
                const group = groupedProducts[key];
                const { order_id, sellerName, Avatar } = group[0];
                return (
                    <TableContainer
                        key={order_id}
                        sx={{
                            borderRadius: '4px',
                            border: '1px solid #e5e5e5',
                            backgroundColor: '#FFF',
                            marginTop: '30px',
                        }}
                    >
                        <Table>
                            <TableHead
                                sx={{
                                    backgroundColor: '#FFF',
                                    borderBottom: '1px solid #e5e5e5',
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
                                            <span className={cx('orders_list_body_user_name')}>{sellerName}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className={cx('orders_list_header')}
                                        style={{ width: '18%' }}
                                    ></TableCell>
                                    <TableCell
                                        className={cx('orders_list_header')}
                                        style={{ width: '19%' }}
                                    ></TableCell>
                                    <TableCell
                                        className={cx('orders_list_header')}
                                        style={{ width: '18%' }}
                                    ></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {group.map((product) => (
                                    <TableRow key={product.order_item_id}>
                                        <TableCell>
                                            <div className={cx('orders_list_body_product_wrapper')}>
                                                <div className={cx('orders_list_body_product')}>
                                                    <img
                                                        src={`${process.env.REACT_APP_SHOPEE_BASE_URL}/uploads/images/productBackGroundImage`}
                                                        className={cx('orders_list_body_product_img')}
                                                        alt="product"
                                                    />
                                                    <div className={cx('orders_list_body_product_name')}>Name</div>
                                                </div>
                                                <div className={cx('orders_list_body_product_quantity')}>x1</div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className={cx('orders_list_body_total_price')}>
                                                <span>₫{formatPrice(10000)}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            {products.status === 'Pending' && (
                                                <div className={cx('orders_list_body_product_status_confirm')}>
                                                    Chờ xác nhận
                                                </div>
                                            )}

                                            {products.status === 'Shipping' && (
                                                <div className={cx('orders_list_body_product_status_ship')}>
                                                    Đang giao hàng
                                                </div>
                                            )}

                                            {products.status === 'Completed' && (
                                                <div className={cx('orders_list_body_product_status_complete')}>
                                                    Thành công
                                                </div>
                                            )}

                                            {products.status === 'Failed Delivery' && (
                                                <div className={cx('orders_list_body_product_status_failed_delivery')}>
                                                    Giao hàng không thành công
                                                </div>
                                            )}

                                            {products.status === 'Canceled' && (
                                                <div className={cx('orders_list_body_product_status_cancel')}>
                                                    Đã hủy
                                                </div>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                );
            })}
        </>
    );
};

export default PurchasesList;
