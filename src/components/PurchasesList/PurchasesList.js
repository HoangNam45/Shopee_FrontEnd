import classNames from 'classnames/bind';
import styles from './PurchasesList.module.scss';
import '../../assets/styles/globalClass.scss';
import formatPrice from '../../utils/formarPrice';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter } from '@mui/material';

const cx = classNames.bind(styles);
const PurchasesList = ({ products }) => {
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
        </>
    );
};

export default PurchasesList;
