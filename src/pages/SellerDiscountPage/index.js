import styles from './SellerDiscountPage.module.scss';
import classNames from 'classnames/bind';
import '../../assets/styles/globalClass.scss';
import Button from '../../components/Button/Button';
import { useEffect, useState } from 'react';
import { getSellerDiscountedProducts, deleteDiscount } from '../../services/discountService';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import formatPrice from '../../utils/formarPrice';
import dayjs from 'dayjs';
const cx = classNames.bind(styles);

function SellerDiscountPage() {
    const [sellerDiscounts, setSellerDiscounts] = useState([]);
    useEffect(() => {
        const fetchSellerDiscountsData = async () => {
            try {
                const response = await getSellerDiscountedProducts();
                setSellerDiscounts(response);
            } catch (error) {
                console.error('Error getting seller discounts:', error);
            }
        };
        fetchSellerDiscountsData();
    }, []);

    const handleDeleteDiscount = async (discountId) => {
        try {
            await deleteDiscount(discountId);
            const updatedDiscounts = sellerDiscounts.filter((discount) => discount.Discount_id !== discountId);
            setSellerDiscounts(updatedDiscounts);
        } catch (error) {
            console.error('Error deleting discount:', error);
        }
    };
    const getStatus = (startDate, endDate) => {
        const now = dayjs();
        if (now.isBefore(startDate)) {
            return 'Sắp diễn ra';
        } else if (now.isAfter(endDate)) {
            return 'Đã kết thúc';
        } else {
            return 'Đang diễn ra';
        }
    };
    return (
        <>
            <div className={cx('board', 'create_discount_wrap')}>
                <h2 className={cx('create_discount_header')}>Tạo Khuyến Mãi</h2>
                <h3 className={cx('create_discount_sub_header')}>
                    Thiết lập các chương trình khuyến mãi riêng của Shop để tăng Doanh số và cải thiện tỉ lệ chuyển đổi
                </h3>
                <div className={cx('create_shop_discount_box_wrap')}>
                    <div className={cx('create_shop_discount_box')}>
                        <div className={cx('create_shop_discount_box_header')}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16">
                                <path fill="#fff" d="M0 0h16v16H0z"></path>
                                <path
                                    className={cx('discount_icon')}
                                    d="M10.186.84l2 3.03a.62.62 0 01.08.503L9.393 15.078a1.246 1.246 0 01-1.526.88l-5.643-1.51a1.244 1.244 0 01-.881-1.524L4.216 2.22a.622.622 0 01.323-.396L7.787.199a1.871 1.871 0 012.4.642zm2.909 4.404l1.515 7.781a1.244 1.244 0 01-.985 1.458l-3.175.616 2.645-9.855zm-4.873 1.17h-.48l-2.565 4.698h.49l2.555-4.697zm.022 2.321c-.325 0-.602.114-.832.343-.23.228-.345.505-.345.832 0 .324.115.6.345.83.23.23.507.344.832.344.325 0 .602-.115.832-.344.23-.23.344-.506.344-.83 0-.325-.115-.601-.344-.83a1.134 1.134 0 00-.832-.345zm0 .673c.14 0 .258.049.356.147a.483.483 0 01.148.355.484.484 0 01-.148.355.485.485 0 01-.355.147.485.485 0 01-.356-.147.484.484 0 01-.147-.355c0-.14.049-.258.147-.355a.485.485 0 01.356-.147zM5.17 6.437c-.325 0-.602.115-.832.344a1.13 1.13 0 00-.344.83c0 .325.115.601.344.83.23.23.507.345.832.345.327 0 .605-.115.833-.344.23-.23.344-.506.344-.83 0-.325-.115-.601-.345-.83a1.134 1.134 0 00-.832-.345zm0 .672c.138 0 .257.05.355.147a.483.483 0 01.147.355.483.483 0 01-.147.356.485.485 0 01-.356.146.485.485 0 01-.356-.146.483.483 0 01-.147-.356c0-.139.05-.257.147-.355a.485.485 0 01.356-.147zM7.232 2.2a1.246 1.246 0 002.407.644A1.246 1.246 0 007.233 2.2z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                            <span className={cx('create_shop_discount_box_header_text')}>Chương Trình Của Shop</span>
                        </div>
                        <div className={cx('create_shop_discount_box_subheader')}>
                            Tạo Chương trình của Shop để thiết lập các chương trình giảm giá sản phẩm
                        </div>
                        <div className={cx('create_discount_button_wrap')}>
                            <Button to="/seller/discount/create" primary small className={cx('create_discount_button')}>
                                Tạo
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('board', 'discount_program_list_wrap')}>
                <h2 className={cx('discount_program_list_header')}>Sản phẩm khuyến mãi</h2>
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
                                <TableCell
                                    className={cx('discount_program_list_tabel_header')}
                                    style={{ width: '20%' }}
                                >
                                    Tên sản phẩm
                                </TableCell>
                                <TableCell
                                    className={cx('discount_program_list_tabel_header')}
                                    style={{ width: '13.3333%' }}
                                >
                                    Giá gốc
                                </TableCell>
                                <TableCell
                                    className={cx('discount_program_list_tabel_header')}
                                    style={{ width: '13.3333%' }}
                                >
                                    Giá sau giảm
                                </TableCell>
                                <TableCell
                                    className={cx('discount_program_list_tabel_header')}
                                    style={{ width: '13.3333%' }}
                                >
                                    Giảm giá
                                </TableCell>
                                {/* <TableCell
                                    className={cx('discount_program_list_tabel_header')}
                                    style={{ width: '13.3333%' }}
                                >
                                    Số lượng sản phẩm khuyến mãi
                                </TableCell> */}
                                <TableCell
                                    className={cx('discount_program_list_tabel_header')}
                                    style={{ width: '13.3333%' }}
                                >
                                    Thời gian
                                </TableCell>
                                <TableCell
                                    className={cx('discount_program_list_tabel_header')}
                                    style={{ width: '13.3333%' }}
                                >
                                    Trạng thái
                                </TableCell>
                                <TableCell
                                    className={cx('discount_program_list_tabel_header')}
                                    style={{ width: '10%' }}
                                >
                                    Thao tác
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {sellerDiscounts.map((discount, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <div className={cx('tabel_body_product_name_wrap')}>
                                            <div className={cx('tabel_body_product_name_img')}>
                                                <img
                                                    className={cx('product_list_body_name_img_')}
                                                    src={`${process.env.REACT_APP_SHOPEE_BASE_URL}/uploads/images/productBackGroundImage/${discount.BackGround}`}
                                                    alt="img"
                                                />
                                            </div>
                                            <div className={cx('tabel_body_product_name')}>{discount.Name}</div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className={cx('tabel_body_product_info')}>
                                            ₫{formatPrice(discount.Price)}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className={cx('tabel_body_product_info')}>
                                            ₫
                                            {formatPrice(
                                                (
                                                    discount.Price -
                                                    (discount.Price * discount.Discount_percentage) / 100
                                                ).toFixed(2),
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className={cx('tabel_body_product_info')}>
                                            {discount.Discount_percentage}%
                                        </div>
                                    </TableCell>
                                    {/* <TableCell>
                                        <div className={cx('tabel_body_product_info')}>Không giới hạn</div>
                                    </TableCell> */}
                                    <TableCell>
                                        <div className={cx('tabel_body_product_info', 'date_time')}>
                                            <span>{dayjs(discount.Start_date).format('DD-MM-YYYY HH:mm')}</span>
                                            <span>-</span>
                                            <span>{dayjs(discount.End_date).format('DD-MM-YYYY HH:mm')}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className={cx('tabel_body_product_info')}>
                                            {getStatus(dayjs(discount.Start_date), dayjs(discount.End_date))}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div
                                            onClick={() => handleDeleteDiscount(discount.Discount_id)}
                                            className={cx('tabel_body_product_info', 'delete_action')}
                                        >
                                            Xóa
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}

export default SellerDiscountPage;
