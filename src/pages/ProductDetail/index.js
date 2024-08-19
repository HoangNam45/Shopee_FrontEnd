import { Container } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faStar, faPlus, faMinus, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../components/Button';
import { useState } from 'react';
const cx = classNames.bind(styles);
function ProductDetail() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            // Chỉ cho phép nhập số dương
            setQuantity(Number(value) > 0 ? Number(value) : 1);
        }
    };
    return (
        <Container className={cx('custom_container_products')}>
            <div className={cx('card', 'product')}>
                <div className={cx('product_img')}>
                    <div className={cx('product_img_current_wrap')}>
                        <img
                            alt="..."
                            className={cx('product_img_current')}
                            src="/images/7fe2f43c07284c892375dbb80d0ca93d.jpg"
                        />
                    </div>
                    <div className={cx('product_img_preview_wrap')}>
                        <button className={cx('product_img_preview_move_left')}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button className={cx('product_img_preview_move_right')}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                        <div className={cx('product_img_preview')}>
                            <img
                                className={cx('product_img_preview_')}
                                src="/images/7fe2f43c07284c892375dbb80d0ca93d.jpg"
                                alt="product_img_preview_"
                            />
                        </div>
                        <div className={cx('product_img_preview')}>
                            <img
                                className={cx('product_img_preview_')}
                                src="/images/7fe2f43c07284c892375dbb80d0ca93d.jpg"
                                alt="product_img_preview_"
                            />
                        </div>
                        <div className={cx('product_img_preview')}>
                            <img
                                className={cx('product_img_preview_')}
                                src="/images/7fe2f43c07284c892375dbb80d0ca93d.jpg"
                                alt="product_img_preview_"
                            />
                        </div>
                        <div className={cx('product_img_preview')}>
                            <img
                                className={cx('product_img_preview_')}
                                src="/images/7fe2f43c07284c892375dbb80d0ca93d.jpg"
                                alt="product_img_preview_"
                            />
                        </div>
                        <div className={cx('product_img_preview')}>
                            <img
                                className={cx('product_img_preview_')}
                                src="/images/7fe2f43c07284c892375dbb80d0ca93d.jpg"
                                alt="product_img_preview_"
                            />
                        </div>
                    </div>
                </div>

                <div className={cx('product_info')}>
                    <div className={cx('product_info_name')}>
                        Bộ viên uống theo liệu trình Decumar - 3 hộp VCM01 DVCM3 alo
                    </div>
                    <div className={cx('product_info_status')}>
                        <div className={cx('product_info_stars', 'line')}>
                            <div className={cx('product_info_stars_number')}>5.0</div>
                            <div className={cx('product_info_stars_display')}>
                                <div className={cx('product_info_stars_display_')}>
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className={cx('product_info_stars_display_')}>
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className={cx('product_info_stars_display_')}>
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className={cx('product_info_stars_display_')}>
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className={cx('product_info_stars_display_')}>
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                        <div className={cx('product_info_status_')}>
                            <div className={cx('product_info_status_count', 'line')}>0</div>
                            <span>Đánh Giá</span>
                        </div>
                        <div className={cx('product_info_status_')}>
                            <div className={cx('product_info_status_count')}>0</div>
                            <span>Đã Bán</span>
                        </div>
                    </div>
                    <div className={cx('product_info_price')}>
                        <span>₫138.000</span>
                    </div>
                    <div className={cx('product_info_choices')}>
                        <div className={cx('product_info_choices_field')}>
                            <div className={cx('product_info_choices_field_')}>Mã Giảm Giá Của Shop</div>
                            <div className={cx('product_info_choices_vouchers_')}>
                                <div className={cx('product_info_choices_vouchers_value')}>Giảm ₫20k</div>
                                <div className={cx('product_info_choices_vouchers_value')}>Giảm ₫20k</div>
                                <div className={cx('product_info_choices_vouchers_value')}>Giảm ₫20k</div>
                            </div>
                        </div>
                        <div className={cx('product_info_choices_field')}>
                            <div className={cx('product_info_choices_field_')}>Vận Chuyển</div>
                        </div>
                        <div className={cx('product_info_choices_field', 'count_field')}>
                            <div className={cx('product_info_choices_field_')}>Số lượng</div>
                            <div className={cx('product_info_choices_field_amout')}>
                                <div className={cx('product_info_choices_field_amout_adjust')}>
                                    <button
                                        className={cx('product_info_choices_field_amout_adjust_btn')}
                                        onClick={handleDecrease}
                                    >
                                        <FontAwesomeIcon
                                            className={cx('product_info_choices_field_amout_adjust_btn_icon')}
                                            icon={faMinus}
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        className={cx('product_info_choices_field_amout_adjust_input')}
                                        value={quantity}
                                        onChange={handleChange}
                                    ></input>
                                    <button
                                        className={cx('product_info_choices_field_amout_adjust_btn')}
                                        onClick={handleIncrease}
                                    >
                                        <FontAwesomeIcon
                                            className={cx('product_info_choices_field_amout_adjust_btn_icon')}
                                            icon={faPlus}
                                        />
                                    </button>
                                </div>
                                <div className={cx('product_info_choices_field_amout_remain')}>6 sản phẩm có sẵn</div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('product_info_actions')}>
                        <Button large sub_primary className={cx('product_info_actions_btn')}>
                            <FontAwesomeIcon icon={faCartShopping} className={cx('product_info_actions_icon')} />
                            Thêm Vào Giỏ Hàng
                        </Button>
                        <Button large primary className={cx('product_info_actions_btn')}>
                            Mua Ngay
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ProductDetail;
