import classNames from 'classnames/bind';
import '../../assets/styles/globalClass.scss';
import styles from './Checkout.module.scss';
import { Container, TextField, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';
import { useLocation } from 'react-router-dom';
import formatPrice from '../../utils/formarPrice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createOrder } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function Checkout() {
    const navigate = useNavigate();
    const location = useLocation();
    const { checkedProducts } = location.state || { checkedProducts: [] };
    console.log(checkedProducts);

    const totalPrice = checkedProducts.reduce((total, item) => total + item.Final_price * item.quantity, 0);

    const formik = useFormik({
        initialValues: {
            name: '',
            phoneNumber: '',
            address: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Họ và tên là bắt buộc'),
            phoneNumber: Yup.string()
                .matches(/^[0-9]+$/, 'Số điện thoại không hợp lệ')
                .required('Số điện thoại là bắt buộc'),
            address: Yup.string().required('Địa chỉ là bắt buộc'),
        }),
        onSubmit: async (values) => {
            const orderData = {
                ...values,
                checkedProducts,
                totalPrice,
            };
            console.log('Order Data:', orderData);
            await createOrder(orderData);
            navigate('/user/all_purchases');
        },
    });

    return (
        <Container className={cx('custom_container_checkout')}>
            <div className={cx('user_info_wrapper', 'board')}>
                <div className={cx('head_deco')}></div>
                <div className={cx('user_info')}>
                    <div className={cx('user_info_head')}>
                        <FontAwesomeIcon icon={faLocationDot} className={cx('location_icon')} />
                        <span className={cx('recive_address_head')}>Địa Chỉ Nhận Hàng</span>
                    </div>
                    <form className={cx('address_form')} onSubmit={formik.handleSubmit}>
                        <TextField
                            InputLabelProps={{
                                style: { fontSize: '1.2rem' },
                            }}
                            InputProps={{
                                style: { fontSize: '1.25rem' },
                            }}
                            label="Họ Và Tên"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            id="name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <TextField
                            InputLabelProps={{
                                style: { fontSize: '1.2rem' },
                            }}
                            InputProps={{
                                style: { fontSize: '1.25rem' },
                            }}
                            label="Số Điện Thoại"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                        />
                        <TextField
                            InputLabelProps={{
                                style: { fontSize: '1.2rem' },
                            }}
                            InputProps={{
                                style: { fontSize: '1.25rem' },
                            }}
                            label="Địa Chỉ"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            id="address"
                            name="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                        />
                    </form>
                </div>
            </div>

            <TableContainer className={cx('board')}>
                <Table>
                    <TableHead
                        sx={{
                            backgroundColor: '#fff',
                        }}
                    >
                        <TableRow>
                            <TableCell className={cx('checkout_item_header_')} style={{ width: '55%' }}>
                                Sản Phẩm
                            </TableCell>
                            <TableCell className={cx('checkout_item_header')} align="right" style={{ width: '15%' }}>
                                Đơn Giá
                            </TableCell>
                            <TableCell className={cx('checkout_item_header')} align="right" style={{ width: '15%' }}>
                                Số Lượng
                            </TableCell>
                            <TableCell className={cx('checkout_item_header')} align="right" style={{ width: '15%' }}>
                                Thành tiền
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {checkedProducts.map((item) => (
                            <TableRow key={item.Id}>
                                <TableCell>
                                    <div className={cx('order_item_info')}>
                                        <img
                                            className={cx('order_item_img')}
                                            src={`${process.env.REACT_APP_SHOPEE_BASE_URL}/uploads/images/productBackGroundImage/${item.BackGround}`}
                                            alt="product"
                                        />
                                        <div className={cx('order_item_name')}>{item.Name}</div>
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={cx('price_wrapper')}>
                                        {item.Discount_percentage > 0 && (
                                            <div className={cx('order_item_sub_info', 'original_price')}>
                                                ₫{formatPrice(item.Original_price)}
                                            </div>
                                        )}

                                        <div className={cx('order_item_sub_info')}>
                                            ₫{formatPrice(item.Final_price)}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={cx('order_item_sub_info')}>{item.quantity}</div>
                                </TableCell>
                                <TableCell align="right">
                                    <div className={cx('order_item_sub_info')}>
                                        ₫{formatPrice(item.Final_price * item.quantity)}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div className={cx('board', 'order_items_wrapper')}>
                <div className={cx('payment_method_wrapper')}>
                    <span className={cx('payment_method_head')}>Phương thức thanh toán</span>
                    <span className={cx('payment_method')}>Thanh toán khi nhận hàng</span>
                </div>

                <div className={cx('order_items_total_price_wrapper')}>
                    <span className={cx('order_items_total_price_head')}>Tổng thanh toán</span>
                    <span className={cx('order_items_total_price')}>₫{formatPrice(totalPrice)}</span>
                </div>

                <div className={cx('order_items_confirm_wrapper')}>
                    <span className={cx('order_items_confirm_head')}>
                        Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo Điều khoản Shopee
                    </span>
                    <Button type="submit" primary large onClick={formik.handleSubmit}>
                        Đặt hàng
                    </Button>
                </div>
            </div>
        </Container>
    );
}

export default Checkout;
