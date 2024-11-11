import styles from './CreateDiscountPage.module.scss';
import classNames from 'classnames/bind';
import '../../assets/styles/globalClass.scss';
import Button from '../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Pagination } from '@mui/material';
import { getSellerActiveProducts, getSellerTotalActiveProducts } from '../../services/productService';
const cx = classNames.bind(styles);
function CreateDiscountPage() {
    const [showProductList, setShowProductList] = useState(false);
    const [productsData, setProductsData] = useState([]);
    const [totalProducts, setTotalProducts] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const limit = 8;
    useEffect(() => {
        const fetchData = async () => {
            const response = await getSellerActiveProducts(currentPage, limit);
            setProductsData(response);
        };
        fetchData();
    }, [currentPage]);

    useEffect(() => {
        const fetchTotalProducts = async () => {
            try {
                const response = await getSellerTotalActiveProducts();
                setTotalProducts(response.totalActiveProducts);
            } catch (error) {
                console.error('Errors fetching total products:', error);
            }
        };
        fetchTotalProducts();
    }, []);

    const toggleProductList = () => {
        setShowProductList(!showProductList);
    };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };
    const handleCheckboxChange = (product) => {
        setSelectedProduct(selectedProduct?.Id === product.Id ? null : product);
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
                                    {productsData.map((product, index) => (
                                        <TableRow key={product.Id}>
                                            <TableCell>
                                                <Checkbox
                                                    onChange={() => handleCheckboxChange(product)}
                                                    checked={selectedProduct?.Id === product.Id}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <div className={cx('tabel_body_product_name_wrap')}>
                                                    <div className={cx('tabel_body_product_name_img')}>
                                                        <img
                                                            className={cx('product_list_body_name_img_')}
                                                            src={`http://localhost:5000/uploads/images/productBackGroundImage/${product.BackGround}`}
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className={cx('tabel_body_product_name')}>{product.Name}</div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className={cx('tabel_body_product_info')}>0</div>
                                            </TableCell>
                                            <TableCell>
                                                <div className={cx('tabel_body_product_info')}>{product.Price}</div>
                                            </TableCell>
                                            <TableCell>
                                                <div className={cx('tabel_body_product_info')}>{product.Stock}</div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <Pagination
                                count={Math.ceil(totalProducts / limit)}
                                page={currentPage}
                                className={cx('product_list_pagination')}
                                size="large"
                                shape="rounded"
                                onChange={handlePageChange}
                            />
                        </TableContainer>
                    </div>
                </>
            )}
        </>
    );
}

export default CreateDiscountPage;
