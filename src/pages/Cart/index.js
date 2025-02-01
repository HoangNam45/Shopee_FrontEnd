import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import '../../assets/styles/globalClass.scss';
import QuantityButton from '../../components/QuantityButton/QuantityButton';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Container } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';
import { getUserCartItems } from '../../services/userService';
const cx = classNames.bind(styles);

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getUserCartItems();
            setCartItems(response);
        };
        fetchData();
    }, []);

    const handleQuantityChange = useCallback((id, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => (item.Id === id ? { ...item, quantity: newQuantity } : item)),
        );
    }, []);
    console.log(cartItems);
    return (
        <Container className={cx('custom_container_cart')}>
            <TableContainer className={cx('board')}>
                <Table>
                    <TableHead
                        sx={{
                            backgroundColor: '#fff',
                        }}
                    >
                        <TableRow>
                            <TableCell className={cx('cart_mng_header')} style={{ width: '5%' }}>
                                <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
                            </TableCell>
                            <TableCell className={cx('cart_mng_header')} style={{ width: '45%' }}>
                                Sản Phẩm
                            </TableCell>
                            <TableCell
                                className={cx('cart_mng_header', 'cart_info_header')}
                                align="center"
                                style={{ width: '15%' }}
                            >
                                Đơn Giá
                            </TableCell>
                            <TableCell
                                className={cx('cart_mng_header', 'cart_info_header')}
                                align="center"
                                style={{ width: '15%' }}
                            >
                                Số Lượng
                            </TableCell>
                            <TableCell
                                className={cx('cart_mng_header', 'cart_info_header')}
                                align="center"
                                style={{ width: '10%' }}
                            >
                                Số Tiền
                            </TableCell>
                            <TableCell
                                className={cx('cart_mng_header', 'cart_info_header')}
                                align="center"
                                style={{ width: '10%' }}
                            >
                                Thao Tác
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {cartItems.map((item) => (
                            <TableRow>
                                <TableCell>
                                    <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
                                </TableCell>
                                <TableCell>
                                    <div className={cx('cart_product_info')}>
                                        <img
                                            className={cx('cart_product_img')}
                                            src="/images/authBackground.png"
                                            alt="product"
                                        />
                                        <div className={cx('cart_product_name')}>{item.Name}</div>
                                    </div>
                                </TableCell>
                                <TableCell align="center">
                                    <div className={cx('cart_product_sub_info')}>₫50.000</div>
                                </TableCell>
                                <TableCell>
                                    <QuantityButton
                                        stock={item.Stock}
                                        onQuantityChange={(newQuantity) => handleQuantityChange(item.Id, newQuantity)}
                                        initialQuantity={item.Quantity}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <div className={cx('cart_product_sub_info', 'total_price')}>₫50.000</div>
                                </TableCell>
                                <TableCell align="center">
                                    <div className={cx('cart_product_sub_info', 'delete_action')}>Xóa</div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default Cart;
