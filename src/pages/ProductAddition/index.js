import classNames from 'classnames/bind';
import styles from './ProductAddition.module.scss';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
// import PriceRange from '../../components/PriceRange/PriceRange';
import { useState, useEffect } from 'react';
import { addProduct, updateProduct, updateProductStatus, deleteProduct } from '../../services/productService';
import { useParams } from 'react-router-dom';
import { getSellerDetailProduct } from '../../services/productService';

const cx = classNames.bind(styles);

const ProductAddition = () => {
    const navigate = useNavigate();

    const { productId } = useParams();
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        productImages: [],
        productBackGroundImage: [],
        productName: '',
        productDescription: '',
        productPrice: '',
        productStock: '',
        productPriceRange: [],
        productSKU: '',
        productExistingImages: [],
        productExistingBackGroundImage: '',
        productStatus: '',
    });

    useEffect(() => {
        if (productId) {
            const fetchData = async () => {
                try {
                    const response = await getSellerDetailProduct(productId);

                    setFormData({
                        productExistingImages: response.ImageUrl || [],
                        productExistingBackGroundImage: response.BackGround || '',
                        productName: response.Name || '',
                        productDescription: response.Description || '',
                        productPrice: response.Price || '',
                        productStock: response.Stock || '',
                        productPriceRange: response.PriceRange || [],
                        productSKU: response.SKU || '',
                        productStatus: response.Status || '',
                    });
                    setLoading(false);
                } catch (error) {
                    console.log('Error fetching product details:', error);
                }
            };
            fetchData();
        }
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleImageChange = (image, name) => {
        setFormData({
            ...formData,
            [name]: image,
        });
    };
    const handlePriceRangeChange = (priceRanges) => {
        setFormData({
            ...formData,
            productPriceRange: priceRanges,
        });
    };

    const handleSubmit = async (e, productStatus) => {
        e.preventDefault();
        const newFormData = new FormData();
        if (formData.productImages) {
            formData.productImages.forEach((image) => {
                newFormData.append('productImages', image);
            });
        }
        if (formData.productBackGroundImage) {
            newFormData.append('productBackGroundImage', formData.productBackGroundImage[0]); // Chỉ có 1 hình nền
        }

        if (formData.productExistingImages && formData.productExistingImages.length > 0) {
            formData.productExistingImages.forEach((existingImage) => {
                newFormData.append('productExistingImages', existingImage);
            });
        }

        newFormData.append('productExistingBackGroundImage', formData.productExistingBackGroundImage);
        newFormData.append('productName', formData.productName);
        newFormData.append('productDescription', formData.productDescription);
        newFormData.append('productPrice', formData.productPrice);
        newFormData.append('productStock', formData.productStock);
        newFormData.append('productPriceRange', JSON.stringify(formData.productPriceRange));
        newFormData.append('productSKU', formData.productSKU);
        newFormData.append('productStatus', productStatus);

        try {
            if (productId) {
                await updateProduct(productId, newFormData);
            } else {
                await addProduct(newFormData);
            }
            navigate('/seller/all_products');
        } catch (error) {
            console.log(error);
        }
    };

    const handleCancel = (e) => {
        e.preventDefault();
        navigate('/seller/all_products');
    };

    const handleUpdateStatus = (e, status) => {
        e.preventDefault();
        try {
            updateProductStatus(productId, status);
            navigate('/seller/all_products');
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = (e) => {
        e.preventDefault();
        try {
            deleteProduct(productId);
            navigate('/seller/all_products');
        } catch (error) {
            console.log(error);
        }
    };

    console.log('formData', formData);
    if (loading && productId) return <div>Loading...</div>;
    return (
        <form onSubmit={handleSubmit} className={cx('product_add_wrap')}>
            <div className={cx('product_add_nav')}>
                <div className={cx('product_add_nav_')}>Thông tin cơ bản</div>
                <div className={cx('product_add_nav_')}>Thông tin bán hàng</div>
                <div className={cx('product_add_nav_')}>Thông tin khác</div>
            </div>
            <div className={cx('product_add_info')}>
                <div className={cx('product_add_info_header')}>Thông tin cơ bản</div>
                <div className={cx('product_add_info_')}>
                    <div className={cx('product_add_info_field')}>
                        <span>* </span>
                        <span>Hình ảnh sản phẩm</span>
                    </div>
                    <div className={cx('product_add_info_field_input')}>
                        <div className={cx('product_add_info_field_input_size')}>
                            <span>Hình ảnh tỷ lệ 1:1</span>
                        </div>
                        <ImageUploader
                            inputName="productImages"
                            onImageChange={handleImageChange}
                            quantity={9}
                            text="Thêm hình ảnh"
                            flex
                            productExistingImages={formData.productExistingImages}
                        />
                    </div>
                </div>
                <div className={cx('product_add_info_')}>
                    <div className={cx('product_add_info_field')}>
                        <span>* </span>
                        <span>Ảnh bìa</span>
                    </div>
                    <div className={cx('product_add_info_field_input_back_img')}>
                        <ImageUploader
                            inputName="productBackGroundImage"
                            onImageChange={handleImageChange}
                            quantity={1}
                            productExistingBackGroundImage={formData.productExistingBackGroundImage}
                        />

                        <ul className={cx('product_add_info_field_input_back_img_descript')}>
                            <li>Tải lên hình ảnh 1:1.</li>
                            <li>
                                Ảnh bìa sẽ được hiển thị tại các trang Kết quả tìm kiếm, Gợi ý hôm nay,... Việc sử dụng
                                ảnh bìa đẹp sẽ thu hút thêm lượt truy cập vào sản phẩm của bạn
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('product_add_info_')}>
                    <div className={cx('product_add_info_field')}>
                        <span>* </span>
                        <span>Tên sản phẩm</span>
                    </div>
                    <div className={cx('product_add_info_field_input_name_product_wrap')}>
                        <input
                            name="productName"
                            onChange={handleChange}
                            type="text"
                            placeholder="Tên sản phẩm + Thương hiệu + Model + Thông số kỹ thuật"
                            className={cx('product_add_info_field_input_name_product')}
                            value={formData?.productName || ''}
                        />
                    </div>
                </div>
                <div className={cx('product_add_info_')}>
                    <div className={cx('product_add_info_field')}>
                        <span>* </span>
                        <span>Mô tả sản phẩm</span>
                    </div>
                    <div className={cx('product_add_info_field_input_describe_product_wrap')}>
                        <textarea
                            name="productDescription"
                            onChange={handleChange}
                            type="text"
                            className={cx('product_add_info_field_input_describe_product')}
                            value={formData?.productDescription || ''}
                        />
                    </div>
                </div>
            </div>

            <div className={cx('product_add_info')}>
                <div className={cx('product_add_info_header')}>Thông tin bán hàng</div>
                {/* <div className={cx('product_add_info_')}>
                    <div className={cx('product_add_info_field')}>
                        <span>* </span>
                        <span>Phân loại hàng</span>
                    </div>
                    <div>
                        <Button size_auto dashed_border>
                            <FontAwesomeIcon icon={faPlus} className={cx('plus_icon')} />
                            Thêm nhóm phân loại
                        </Button>
                    </div>
                </div> */}

                <div className={cx('product_add_info_')}>
                    <div className={cx('product_add_info_field')}>
                        <span>* </span>
                        <span>Giá</span>
                    </div>
                    <div className={cx('product_add_info_field_input_price_wrap')}>
                        <span>₫</span>
                        <input
                            name="productPrice"
                            onChange={handleChange}
                            type="text"
                            placeholder="Giá sản phẩm"
                            className={cx('product_add_info_field_input_price')}
                            value={formData?.productPrice || ''}
                        />
                    </div>
                </div>

                <div className={cx('product_add_info_')}>
                    <div className={cx('product_add_info_field')}>
                        <span>* </span>
                        <span>Kho hàng</span>
                    </div>
                    <div className={cx('product_add_info_field_input_price_wrap')}>
                        <input
                            name="productStock"
                            onChange={handleChange}
                            type="text"
                            className={cx('product_add_info_field_input_price')}
                            value={formData?.productStock || ''}
                        />
                    </div>
                </div>

                {/* <div className={cx('product_add_info_')}>
                    <div className={cx('product_add_info_field')}>
                        <span>* </span>
                        <span>Khoảng giá</span>
                    </div>

                    <div className={cx('price_range_wrap')}>
                        <PriceRange onPriceRangeChange={handlePriceRangeChange} />
                    </div>
                </div> */}
            </div>

            {/* <div className={cx('product_add_info')}>
                <div className={cx('product_add_info_header')}>Thông tin khác</div>

                <div className={cx('product_add_info_')}>
                    <div className={cx('product_add_info_field')}>
                        <span>* </span>
                        <span>SKU sản phẩm</span>
                    </div>
                    <div className={cx('product_add_info_field_input_price_wrap')}>
                        <input
                            name="productSKU"
                            onChange={handleChange}
                            type="text"
                            placeholder=""
                            className={cx('product_add_info_field_input_price')}
                            value={formData?.productSKU || ''}
                        />
                    </div>
                </div>
            </div> */}

            <div className={cx('product_add_save')}>
                <Button onClick={handleCancel} text quite_small className={cx('product_add_save_btn')}>
                    Hủy
                </Button>
                {productId ? (
                    <>
                        <Button
                            onClick={(e) => handleDelete(e)}
                            text
                            quite_small
                            className={cx('product_add_save_btn')}
                        >
                            Xóa
                        </Button>
                        {formData.productStatus === 'active' ? (
                            <Button
                                onClick={(e) => handleUpdateStatus(e, 'hidden')}
                                text
                                quite_small
                                className={cx('product_add_save_btn')}
                            >
                                Ẩn
                            </Button>
                        ) : formData.productStatus === 'hidden' ? (
                            <Button
                                onClick={(e) => handleUpdateStatus(e, 'active')}
                                primary
                                quite_small
                                className={cx('product_add_save_btn')}
                            >
                                Hiển thị
                            </Button>
                        ) : null}
                        <Button
                            onClick={(e) => handleSubmit(e, 'active')}
                            primary
                            quite_small
                            className={cx('product_add_save_btn')}
                        >
                            Cập nhật
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            onClick={(e) => handleSubmit(e, 'hidden')}
                            text
                            quite_small
                            className={cx('product_add_save_btn')}
                        >
                            Lưu & Ẩn
                        </Button>
                        <Button
                            onClick={(e) => handleSubmit(e, 'active')}
                            primary
                            quite_small
                            className={cx('product_add_save_btn')}
                        >
                            Lưu & Hiển thị
                        </Button>
                    </>
                )}
            </div>
        </form>
    );
};

export default ProductAddition;
