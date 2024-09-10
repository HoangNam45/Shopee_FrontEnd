import classNames from 'classnames/bind';
import styles from './ProductList.module.scss';
import '../../assets/styles/globalClass.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox } from '@mui/material';

const cx = classNames.bind(styles);
const ProductList = () => {
    return (
        <div className={cx('board', 'product_list_container')}>
            <div className={cx('product_list_search')}>
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
            </div>

            <div className={cx('product_list_amout')}>1 Sản Phẩm</div>

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
                            <TableCell className={cx('test')} style={{ width: '2%' }}>
                                <Checkbox />
                            </TableCell>
                            <TableCell className={cx('test')} style={{ width: '38%' }}>
                                Tên sản phẩm
                            </TableCell>
                            <TableCell className={cx('test')} style={{ width: '16.5%' }}>
                                Doanh số
                            </TableCell>
                            <TableCell className={cx('test')} style={{ width: '16.5%' }}>
                                Giá
                            </TableCell>
                            <TableCell className={cx('test')} style={{ width: '16.5%' }}>
                                Kho hàng
                            </TableCell>
                            <TableCell className={cx('test')} style={{ width: '10.5%' }}>
                                Thao tác
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Checkbox />
                            </TableCell>
                            <TableCell>
                                <div className={cx('product_list_body_name')}>
                                    <div className={cx('product_list_body_name_img')}>
                                        <img
                                            className={cx('product_list_body_name_img_')}
                                            src="/images/7fe2f43c07284c892375dbb80d0ca93d.jpg"
                                            alt="img"
                                        />
                                    </div>
                                    <div className={cx('product_list_body_name_info')}>
                                        <span className={cx('product_list_body_name_info_hidden')}>Đã ẩn</span>
                                        <div className={cx('product_list_body_name_info_name')}>
                                            Truyện - Arya Bàn Bên Thỉnh Thoảng Lại Trêu Ghẹo Tôi Bằng Tiếng Nga – Tập
                                            4.5 1 2 3 4 bản box và bản phổ thông alo alo alo alo alo alo alo alo alo alo
                                            alo alo
                                        </div>
                                        <div className={cx('product_list_body_name_info_SKU')}>SKU sản phẩm: -</div>
                                        {/* <div className={cx('product_list_body_name_info_ID')}>
                                            ID Sản phẩm: 255123128379
                                        </div> */}
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className={cx('product_list_body_satistic')}>0</TableCell>
                            <TableCell className={cx('product_list_body_satistic')}>₫123.123</TableCell>
                            <TableCell className={cx('product_list_body_satistic')}>123</TableCell>
                            <TableCell>
                                <span className={cx('product_list_body_operation')}>Cập nhật</span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div className={cx('product_list_pagination')}>
                    <FontAwesomeIcon className={cx('pagination_icon')} icon={faArrowLeft} />
                    <span className={cx('pagination_index')}>1</span>
                    <FontAwesomeIcon className={cx('pagination_icon')} icon={faArrowRight} />
                </div>
            </TableContainer>
        </div>
    );
};

export default ProductList;
