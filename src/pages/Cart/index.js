import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import '../../assets/styles/globalClass.scss';
import QuantityButton from '../../components/QuantityButton/QuantityButton';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableFooter,
    TableRow,
    Checkbox,
    Container,
} from '@mui/material';
import { useEffect, useState, useCallback } from 'react';
import { getUserCartItems, updateCartItemQuantity, deleteCartItem } from '../../services/userService';
import formatPrice from '../../utils/formarPrice';
import Button from '../../components/Button/Button';
import useQuantityChange from '../../hooks/useQuantityChange';

const cx = classNames.bind(styles);

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [checkedItems, setCheckedItems] = useState({});
    console.log(cartItems);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getUserCartItems();
            setCartItems(response);

            const initialCheckedItems = response.reduce((acc, item) => {
                acc[item.Id] = false;
                return acc;
            }, {});
            setCheckedItems(initialCheckedItems);
        };
        fetchData();
    }, []);

    const debouncedUpdateQuantity = useQuantityChange(async (id, newQuantity) => {
        try {
            const productData = {
                product_id: id,
                quantity: newQuantity,
            };
            await updateCartItemQuantity(productData);
        } catch (error) {
            console.error('Failed to update quantity:', error);
        }
    }, 400);

    const handleQuantityChange = useCallback(
        (id, newQuantity) => {
            setCartItems((prevItems) =>
                prevItems.map((item) => (item.Id === id ? { ...item, quantity: newQuantity } : item)),
            );
            debouncedUpdateQuantity(id, newQuantity);
        },
        [debouncedUpdateQuantity],
    );

    const handleCheckChange = (id) => {
        setCheckedItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [id]: !prevCheckedItems[id],
        }));
    };

    const handleCheckAllChange = () => {
        const allChecked = Object.values(checkedItems).every((isChecked) => isChecked);
        const newCheckedItems = Object.keys(checkedItems).reduce((acc, id) => {
            acc[id] = !allChecked;
            return acc;
        }, {});
        setCheckedItems(newCheckedItems);
    };

    const handDelteCartItem = async (id) => {
        const response = await deleteCartItem(id);
        if (response) {
            setCartItems((prevItems) => prevItems.filter((item) => item.Id !== id));
        }
    };

    const checkedProductCount = Object.values(checkedItems).filter((isChecked) => isChecked).length;

    const totalPrice = cartItems.reduce((total, item) => {
        if (checkedItems[item.Id]) {
            return total + item.Final_price * item.quantity;
        }
        return total;
    }, 0);

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
                                <Checkbox
                                    checked={Object.values(checkedItems).every((isChecked) => isChecked)}
                                    onChange={handleCheckAllChange}
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                                />
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
                            <TableRow key={item.Id}>
                                <TableCell>
                                    <Checkbox
                                        checked={checkedItems[item.Id] || false}
                                        onChange={() => handleCheckChange(item.Id)}
                                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <div className={cx('cart_product_info')}>
                                        <img
                                            className={cx('cart_product_img')}
                                            src={`${process.env.REACT_APP_SHOPEE_BASE_URL}/uploads/images/productBackGroundImage/${item.BackGround}`}
                                            alt="product"
                                        />
                                        <div className={cx('cart_product_name')}>{item.Name}</div>
                                    </div>
                                </TableCell>
                                <TableCell align="center">
                                    <div className={cx('price_wrapper')}>
                                        {item.Discount_percentage > 0 && (
                                            <div className={cx('cart_product_sub_info', 'original_price')}>
                                                {' '}
                                                ₫{formatPrice(item.Original_price)}
                                            </div>
                                        )}

                                        <div className={cx('cart_product_sub_info')}>
                                            ₫{formatPrice(item.Final_price)}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className={cx('quantity_wrapper')}>
                                        <QuantityButton
                                            stock={item.Stock}
                                            onQuantityChange={(newQuantity) =>
                                                handleQuantityChange(item.Id, newQuantity)
                                            }
                                            initialQuantity={item.quantity}
                                        />
                                        <div className={cx('quantity_remain')}>Còn {item.Stock} sản phẩm</div>
                                    </div>
                                </TableCell>
                                <TableCell align="center">
                                    <div className={cx('cart_product_sub_info', 'total_price')}>
                                        ₫{formatPrice(item.Final_price * item.quantity)}
                                    </div>
                                </TableCell>
                                <TableCell align="center">
                                    <div
                                        onClick={() => handDelteCartItem(item.Id)}
                                        className={cx('cart_product_sub_info', 'delete_action')}
                                    >
                                        Xóa
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={5} align="right">
                                <div>
                                    <span className={cx('total_products')}>
                                        Tổng thanh toán({checkedProductCount} sản phẩm):
                                    </span>
                                    <span className={cx('total_selected_products_price')}>
                                        ₫{formatPrice(totalPrice)}
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell colSpan={1} align="right">
                                <Button medium primary>
                                    Thanh Toán
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default Cart;
