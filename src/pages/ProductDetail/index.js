import { Container } from 'react-bootstrap';
import classNames from 'classnames/bind';
import '../../assets/styles/globalClass.scss';
import styles from './ProductDetail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faArrowRight,
    faStar,
    faCartShopping,
    faMessage,
    faStore,
    faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../components/Button';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../services/productService';
import QuantityButton from '../../components/QuantityButton/QuantityButton';

import formatPrice from '../../utils/formarPrice';
const cx = classNames.bind(styles);
function ProductDetail() {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [startIndex, setStartIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [quantity, setQuantity] = useState(1);

    console.log(quantity);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getProductDetail(slug);
            console.log(response);
            setProduct(response);

            if (response?.Images?.length > 0) {
                setCurrentImage(response.Images[0]);
            }
        };
        fetchData();
    }, [slug]);

    const imagesPerPage = 5;

    const previewImage = product?.Images?.slice(startIndex, startIndex + imagesPerPage) || [];

    const handleNext = () => {
        if (startIndex + imagesPerPage < product.Images.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    // Xử lý sự kiện onMouseEnter để thay đổi hình ảnh preview
    const handleMouseEnter = (imageUrl) => {
        setCurrentImage(imageUrl);
    };

    const handleAddToCart = () => {
        setShowSuccessMessage(true);

        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <Container className={cx('custom_container_products')}>
            <div className={cx('board', 'product')}>
                <div className={cx('product_img')}>
                    <div className={cx('product_img_current_wrap')}>
                        <img
                            alt="..."
                            className={cx('product_img_current')}
                            src={`http://localhost:5000/uploads/images/productImages/${currentImage}`}
                        />
                    </div>
                    <div className={cx('product_img_preview_wrap')}>
                        {product.Images.length > 5 && (
                            <>
                                <button onClick={handlePrev} className={cx('product_img_preview_move_left')}>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </button>
                                <button onClick={handleNext} className={cx('product_img_preview_move_right')}>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </>
                        )}
                        {previewImage.map((imageUrl, index) => (
                            <div key={index} className={cx('product_img_preview')}>
                                <img
                                    className={cx('product_img_preview_', {
                                        active: imageUrl === currentImage,
                                    })}
                                    src={`http://localhost:5000/uploads/images/productImages/${imageUrl}`}
                                    alt="product_img_preview_"
                                    onMouseEnter={() => handleMouseEnter(imageUrl)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={cx('product_info')}>
                    <div className={cx('product_info_name')}>{product.Name}</div>
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
                        {product.Discount !== 0 && (
                            <span className={cx('product_info_original_price')}>₫{formatPrice(product.Price)}</span>
                        )}
                        <span className={cx('product_info_final_price')}>₫{formatPrice(product.Final_price)}</span>
                        {product.Discount !== 0 && (
                            <div className={cx('product_info_price_discount_wrap')}>
                                <span className={cx('product_info_price_discount')}>{product.Discount}% GIẢM</span>
                            </div>
                        )}
                    </div>
                    <div className={cx('product_info_choices')}>
                        {/* <div className={cx('product_info_choices_field')}>
                            <div className={cx('product_info_choices_field_')}>Mã Giảm Giá Của Shop</div>
                            <div className={cx('product_info_choices_vouchers_')}>
                                <div className={cx('product_info_choices_vouchers_value')}>Giảm ₫20k</div>
                                <div className={cx('product_info_choices_vouchers_value')}>Giảm ₫20k</div>
                                <div className={cx('product_info_choices_vouchers_value')}>Giảm ₫20k</div>
                            </div>
                        </div> */}
                        <div className={cx('product_info_choices_field')}>
                            <div className={cx('product_info_choices_field_')}>Vận Chuyển</div>
                        </div>
                        <div className={cx('product_info_choices_field', 'count_field')}>
                            <div className={cx('product_info_choices_field_')}>Số lượng</div>
                            <div className={cx('product_info_choices_field_amout')}>
                                <QuantityButton stock={product.Stock} onQuantityChange={setQuantity} />
                                <div className={cx('product_info_choices_field_amout_remain')}>
                                    {product.Stock} sản phẩm có sẵn
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('product_info_actions')}>
                        <Button onClick={handleAddToCart} large sub_primary className={cx('product_info_actions_btn')}>
                            <FontAwesomeIcon icon={faCartShopping} className={cx('product_info_actions_icon')} />
                            Thêm Vào Giỏ Hàng
                        </Button>
                        <Button large primary className={cx('product_info_actions_btn')}>
                            Mua Ngay
                        </Button>
                    </div>
                </div>
            </div>

            {showSuccessMessage && (
                <div className={cx('success_message')}>
                    <FontAwesomeIcon className={cx('success_icon')} icon={faCircleCheck} />
                    <span>Thêm vào giỏ hàng thành công</span>
                </div>
            )}

            <div className={cx('board', 'shop')}>
                <div className={cx('shop_info')}>
                    <div className={cx('shop_info_interact')}>
                        <div className={cx('shop_info_interact_avt_wrap')}>
                            <img
                                alt="?"
                                className={cx('shop_info_interact_avt')}
                                src={`http://localhost:5000/uploads/images/sellerAvatar/${product.SellerAvatar}`}
                            />
                        </div>
                        <div className={cx('shop_info_interact_')}>
                            <div className={cx('shop_info_interact_name')}>{product.SellerName}</div>
                            <div className={cx('shop_info_interact_last_onl')}>Online 52 Phút Trước</div>
                            <div className={cx('shop_info_interact_actions')}>
                                <Button small sub_primary className={cx('shop_info_interact_actions_btn')}>
                                    <FontAwesomeIcon
                                        className={cx('shop_info_interact_actions_icon')}
                                        icon={faMessage}
                                    />
                                    Chat Ngay
                                </Button>
                                <Button small text>
                                    <FontAwesomeIcon className={cx('shop_info_interact_actions_icon')} icon={faStore} />
                                    Xem Shop
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('shop_info_more')}>
                        <div className={cx('shop_info_more_satistics')}>
                            <span>Đánh Giá</span>
                            <span className={cx('shop_info_more_satistics_')}>0</span>
                        </div>
                        <div className={cx('shop_info_more_satistics')}>
                            <span>Tỉ Lệ Phản Hồi</span>
                            <span className={cx('shop_info_more_satistics_')}>0%</span>
                        </div>
                        <div className={cx('shop_info_more_satistics')}>
                            <span>Tham Gia</span>
                            <span className={cx('shop_info_more_satistics_')}>0 năm trước</span>
                        </div>
                        <div className={cx('shop_info_more_satistics')}>
                            <span>Sản Phẩm</span>
                            <span className={cx('shop_info_more_satistics_')}>0</span>
                        </div>
                        <div className={cx('shop_info_more_satistics')}>
                            <span>Thời Gian Phản Hồi</span>
                            <span className={cx('shop_info_more_satistics_')}>trong vài giờ</span>
                        </div>
                        <div className={cx('shop_info_more_satistics')}>
                            <span>Người Theo Dõi</span>
                            <span className={cx('shop_info_more_satistics_')}>0</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('board', 'product_description')}>
                <div className={cx('product_description_')}>
                    <div className={cx('product_description_header')}>MÔ TẢ SẢN PHẨM</div>
                    <div className={cx('product_description_about')}>{product.Description}</div>
                </div>
            </div>
        </Container>
    );
}

export default ProductDetail;
