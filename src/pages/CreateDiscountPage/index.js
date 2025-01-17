import styles from './CreateDiscountPage.module.scss';
import classNames from 'classnames/bind';
import '../../assets/styles/globalClass.scss';
import Button from '../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Pagination } from '@mui/material';
import { getSellerActiveProducts, getSellerTotalActiveProducts } from '../../services/productService';
import { createDiscount } from '../../services/sellerService';
import dayjs from 'dayjs';

const cx = classNames.bind(styles);
function CreateDiscountPage() {
    const [showProductList, setShowProductList] = useState(false);
    const [productsData, setProductsData] = useState([]);
    const [totalProducts, setTotalProducts] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [discountValue, setDiscountValue] = useState('0');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const limit = 8;
    const navigate = useNavigate();
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

    const closeProductList = () => {
        setShowProductList(!showProductList);
        setSelectedProduct(null);
    };

    const openProductList = () => {
        setShowProductList(!showProductList);
        setSelectedProduct(currentProduct);
    };

    const handleConfirm = () => {
        if (selectedProduct) {
            setShowProductList(!showProductList);
            setCurrentProduct(selectedProduct);
        }
    };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };
    const handleCheckboxChange = (product) => {
        setSelectedProduct(selectedProduct?.Id === product.Id ? null : product);
    };

    const handleDiscountValueChange = (e) => {
        const inputValue = e.target.value;

        // Kiểm tra nếu giá trị là số nguyên không âm và <= 100
        if (/^\d+$/.test(inputValue) && Number(inputValue) <= 100) {
            setDiscountValue(inputValue);
        } else if (inputValue === '') {
            setDiscountValue('');
        }
    };

    const handleCreateDiscount = async () => {
        if (!selectedProduct || !startDate || !endDate || !discountValue || discountValue === '0') {
            alert('Hãy nhập đầy đủ thông tin');
            return;
        }

        if (dayjs(endDate).isBefore(dayjs(startDate))) {
            alert('Ngày kết thúc phải muộn hơn ngày bắt đầu');
            return;
        }

        const formattedStartDate = dayjs(startDate).format('YYYY-MM-DDTHH:mm:ss');
        const formattedEndDate = dayjs(endDate).format('YYYY-MM-DDTHH:mm:ss');

        // Fetch existing discounts for the selected product
        const existingDiscounts = await getDiscountsByProductId(selectedProduct.Id);

        // Check for overlapping discount periods
        const isOverlapping = existingDiscounts.some((discount) => {
            const existingStartDate = dayjs(discount.startDate);
            const existingEndDate = dayjs(discount.endDate);
            return (
                dayjs(startDate).isBetween(existingStartDate, existingEndDate, null, '[]') ||
                dayjs(endDate).isBetween(existingStartDate, existingEndDate, null, '[]') ||
                existingStartDate.isBetween(dayjs(startDate), dayjs(endDate), null, '[]') ||
                existingEndDate.isBetween(dayjs(startDate), dayjs(endDate), null, '[]')
            );
        });

        if (isOverlapping) {
            alert('Thời gian khuyến mãi trùng với chương trình khuyến mãi trước đó');
            return;
        }

        const discountData = {
            productId: selectedProduct.Id,
            startDate: formattedStartDate,
            endDate: formattedEndDate,
            discountPercentage: parseFloat(discountValue),
        };

        try {
            await createDiscount(discountData);
            alert('Discount created successfully');
            navigate('/seller/discount');
        } catch (error) {
            console.error('Error creating discount:', error);
        }
    };

    return (
        <>
            <div className={cx('board', 'create_discount_info_wrap')}>
                <h2 className={cx('board_header')}>Thông tin cơ bản</h2>
                <div className={cx('create_discount_info_time_wrap')}>
                    <div className={cx('create_discount_info_time')}>Thời gian khuyến mãi</div>
                    <div className={cx('create_discount_info_time_picker')}>
                        <DateTimePicker disablePast small label="Bắt đầu" value={startDate} onChange={setStartDate} />
                        <FontAwesomeIcon className={cx('dashed_icon')} icon={faMinus} />
                        <DateTimePicker disablePast small label="Kết thúc" value={endDate} onChange={setEndDate} />
                    </div>
                </div>
            </div>

            <div className={cx('board', 'add_product_info_wrap')}>
                <div className={cx('board_header_wrapper')}>
                    <div>
                        <h2 className={cx('board_header')}>Thông tin cơ bản</h2>
                        <h3 className={cx('board_sub_header')}>
                            Thêm sản phẩm vào chương trình khuyến mãi và thiết lập giá khuyến mãi.
                        </h3>
                    </div>
                    {currentProduct && (
                        <Button onClick={openProductList} className={cx('add_product_info_button')} primary_text medium>
                            <FontAwesomeIcon className={cx('add_product_info_icon')} icon={faPlus} />
                            <span>Sản phẩm khác</span>
                        </Button>
                    )}
                </div>

                {currentProduct ? (
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
                                    {/* <TableCell style={{ width: '5%' }}></TableCell> */}
                                    <TableCell style={{ width: '35%' }} className={cx('product_list_table_header')}>
                                        Tên sản phẩm
                                    </TableCell>
                                    <TableCell style={{ width: '13%' }} className={cx('product_list_table_header')}>
                                        Giá gốc
                                    </TableCell>
                                    <TableCell style={{ width: '13%' }} className={cx('product_list_table_header')}>
                                        Giá sau giảm
                                    </TableCell>
                                    <TableCell style={{ width: '16%' }} className={cx('product_list_table_header')}>
                                        Giảm giá
                                    </TableCell>
                                    <TableCell style={{ width: '13%' }} className={cx('product_list_table_header')}>
                                        Kho hàng
                                    </TableCell>
                                    {/* <TableCell style={{ width: '16%' }} className={cx('product_list_table_header')}>
                                        Số lượng sản phẩm khuyến mãi
                                    </TableCell> */}
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <div className={cx('tabel_body_product_name_wrap')}>
                                            <div className={cx('tabel_body_product_name_img')}>
                                                <img
                                                    className={cx('product_list_body_name_img_')}
                                                    src={`http://localhost:5000/uploads/images/productBackGroundImage/${currentProduct.BackGround}`}
                                                    alt="img"
                                                />
                                            </div>
                                            <div className={cx('tabel_body_product_name')}>{currentProduct.Name}</div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className={cx('tabel_body_product_info')}>{currentProduct.Price}</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className={cx('tabel_body_product_info')}>
                                            {(
                                                currentProduct.Price -
                                                (currentProduct.Price * discountValue) / 100
                                            ).toFixed(2)}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className={cx('tabel_body_product_info')}>
                                            <div className={cx('input_wrap')}>
                                                <input
                                                    onChange={handleDiscountValueChange}
                                                    value={discountValue}
                                                    className={cx('input')}
                                                    type="text"
                                                />
                                                <div className={cx('input_discount_percent')}>
                                                    <span>%GIẢM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className={cx('tabel_body_product_info')}>{currentProduct.Stock}</div>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    <Button onClick={openProductList} className={cx('add_product_info_button')} primary_text medium>
                        <FontAwesomeIcon className={cx('add_product_info_icon')} icon={faPlus} />
                        <span>Thêm sản phẩm</span>
                    </Button>
                )}
            </div>

            <div className={cx('action_button')}>
                <Button onClick={handleCreateDiscount} className={cx('action_button_item')} primary small>
                    Xác nhận
                </Button>
                <Button to="/seller/discount" text small>
                    Hủy
                </Button>
            </div>

            {showProductList && (
                <>
                    <div className={cx('overlay')}></div>
                    <div className={cx('board', 'product_list_wrap')}>
                        <div className={cx('product_list_header_wrap')}>
                            <h2 className={cx('product_list_header')}>Chọn sản phẩm</h2>
                            <FontAwesomeIcon className={cx('cancel_icon')} onClick={closeProductList} icon={faXmark} />
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

                        <div className={cx('product_list_action_button')}>
                            <Button
                                className={cx('product_list_action_button_confirm')}
                                small
                                disabled={!selectedProduct}
                                primary={selectedProduct}
                                onClick={handleConfirm}
                            >
                                Xác nhận
                            </Button>
                            <Button onClick={closeProductList} small text>
                                Hủy
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default CreateDiscountPage;
