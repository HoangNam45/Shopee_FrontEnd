import styles from './CreateDiscountPage.module.scss';
import classNames from 'classnames/bind';
import '../../assets/styles/globalClass.scss';
import Button from '../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox } from '@mui/material';
const cx = classNames.bind(styles);
function CreateDiscountPage() {
    const [showProductList, setShowProductList] = useState(false);
    const toggleProductList = () => {
        setShowProductList(!showProductList);
    };
    return (
        <>
            <div className={cx('board', 'create_discount_info_wrap')}>
                <h2 className={cx('board_header')}>Thông tin cơ bản</h2>
                <div className={cx('create_discount_info_time_wrap')}>
                    <div className={cx('create_discount_info_time')}>Thời gian khuyến mãi</div>
                    <div className={cx('create_discount_info_time_picker')}>
                        <DateTimePicker disablePast small label="Bắt đầu" />
                        <FontAwesomeIcon className={cx('dashed_icon')} icon={faMinus} />
                        <DateTimePicker disablePast small label="Kết thúc" />
                    </div>
                </div>
            </div>

            <div className={cx('board', 'add_product_info_wrap')}>
                <h2 className={cx('board_header')}>Thông tin cơ bản</h2>
                <h3 className={cx('board_sub_header')}>
                    Thêm sản phẩm vào chương trình khuyến mãi và thiết lập giá khuyến mãi.
                </h3>
                <Button onClick={toggleProductList} className={cx('add_product_info_button')} primary_text medium>
                    <FontAwesomeIcon className={cx('add_product_info_icon')} icon={faPlus} />
                    <span>Thêm sản phẩm</span>
                </Button>
            </div>

            <div className={cx('action_button')}>
                <Button className={cx('action_button_item')} primary small>
                    Xác nhận
                </Button>
                <Button text small>
                    Hủy
                </Button>
            </div>

            {showProductList && (
                <>
                    <div className={cx('overlay')}></div>
                    <div className={cx('board', 'product_list_wrap')}>
                        <div className={cx('product_list_header_wrap')}>
                            <h2 className={cx('product_list_header')}>Chọn sản phẩm</h2>
                            <FontAwesomeIcon className={cx('cancel_icon')} onClick={toggleProductList} icon={faXmark} />
                        </div>

                        <div className={cx('active_product')}>Sản phẩm đang hoạt động</div>

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
                                        <TableCell style={{ width: '5%' }}></TableCell>
                                        <TableCell style={{ width: '35%' }} className={cx('product_list_table_header')}>
                                            Sản phẩm
                                        </TableCell>
                                        <TableCell style={{ width: '20%' }} className={cx('product_list_table_header')}>
                                            Doanh số
                                        </TableCell>
                                        <TableCell style={{ width: '20%' }} className={cx('product_list_table_header')}>
                                            Giá
                                        </TableCell>
                                        <TableCell style={{ width: '20%' }} className={cx('product_list_table_header')}>
                                            Kho hàng
                                        </TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <Checkbox />
                                        </TableCell>
                                        <TableCell>
                                            <div className={cx('tabel_body_product_name_wrap')}>
                                                <div className={cx('tabel_body_product_name_img')}>
                                                    <img
                                                        className={cx('product_list_body_name_img_')}
                                                        src={`/images/authBackground.png`}
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className={cx('tabel_body_product_name')}>
                                                    Truyện - Arya Bàn Bên Thỉnh Thoảng Lại Trêu Ghẹo Tôi Bằng Tiếng Nga
                                                    Tập ABCDXYZ
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className={cx('tabel_body_product_info')}>0</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className={cx('tabel_body_product_info')}>123123</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className={cx('tabel_body_product_info')}>11</div>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </>
            )}
        </>
    );
}

export default CreateDiscountPage;
