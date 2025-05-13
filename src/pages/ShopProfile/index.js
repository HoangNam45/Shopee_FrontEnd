import classNames from 'classnames/bind';
import styles from './ShopProfile.module.scss';
import '../../assets/styles/globalClass.scss';
import { Button } from '../../components/Button';
import { useState, useEffect } from 'react';
import { getSellerInfo, updateSellerInfo } from '../../services/sellerService';
const cx = classNames.bind(styles);

function ShopProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [shopName, setShopName] = useState('');
    const [shopAvtPreview, setShopAvtPreview] = useState('/images/DefaultUser.jpg');
    const [shopAvt, setShopAvt] = useState();
    const [initialShopName, setInitialShopName] = useState('');
    const [initialShopAvt, setInitialShopAvt] = useState('');

    useEffect(() => {
        const fetchSellerInfo = async () => {
            try {
                const response = await getSellerInfo();
                setInitialShopName(response.name);
                setInitialShopAvt(response.avatar);
                const avatarPreview = `${process.env.REACT_APP_SHOPEE_BASE_URL}/uploads/images/sellerAvatar/${response.avatar}`;
                setShopName(response.name);
                setShopAvtPreview(avatarPreview);
                setShopAvt(response.avatar);
            } catch (error) {
                console.error('Error fetching seller', error);
            }
        };

        fetchSellerInfo();
    }, []);

    const handleAvatarUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newImagePreview = URL.createObjectURL(file);
            setShopAvtPreview(newImagePreview);
            setShopAvt(file);
        }

        event.target.value = null;
    };

    const handleEditing = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setShopName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('shopName', shopName);
        formData.append('shopAvt', shopAvt);
        try {
            const response = await updateSellerInfo(formData);
            setInitialShopName(response.Name);
            setInitialShopAvt(response.Avatar);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating seller', error);
        }
    };
    const handleCancel = () => {
        setShopName(initialShopName);
        setShopAvtPreview(`${process.env.REACT_APP_SHOPEE_BASE_URL}/uploads/images/sellerAvatar/${initialShopAvt}`);
        setShopAvt(initialShopAvt);
        setIsEditing(false);
    };

    return (
        <form onSubmit={handleSubmit} className={cx('board', 'shop_profile_wrap')}>
            <div className={cx('shop_profile_header')}>
                <div className={cx('shop_profile_header_info')}>Thông tin cơ bản</div>
                {!isEditing && (
                    <div className={cx('shop_profile_header_info_btn')}>
                        <Button className={cx('shop_profile_header_info_btn_')} text small>
                            Xem Shop của tôi
                        </Button>
                        <Button onClick={handleEditing} className={cx('shop_profile_header_info_btn_')} text small>
                            Chỉnh Sửa
                        </Button>
                    </div>
                )}
            </div>
            <div className={cx('shop_profile_body')}>
                <div className={cx('shop_profile_body_shop')}>
                    <div className={cx('shop_profile_body_shop_field')}>Tên Shop</div>
                    {isEditing ? (
                        <div className={cx('shop_profile_body_shop_input')}>
                            <input
                                className={cx('shop_profile_body_shop_input_')}
                                onChange={handleChange}
                                type="text"
                                value={shopName}
                            />
                        </div>
                    ) : (
                        <div className={cx('shop_profile_body_shop_input')}>{shopName}</div>
                    )}
                </div>
                <div className={cx('shop_profile_body_shop')}>
                    <div className={cx('shop_profile_body_shop_field')}>Logo của Shop</div>
                    <div className={cx('shop_profile_body_shop_input')}>
                        <div className={cx('shop_profile_body_shop_input_img')}>
                            <div className={cx('shop_profile_body_shop_input_img_upload')}>
                                <img
                                    className={cx('shop_profile_body_shop_input_img_upload_')}
                                    src={shopAvtPreview}
                                    alt="shop logo"
                                />
                                {isEditing && (
                                    <label className={cx('shop_profile_body_shop_input_img_upload_label')}>
                                        Sửa
                                        <input type="file" style={{ display: 'none' }} onChange={handleAvatarUpload} />
                                    </label>
                                )}
                            </div>
                            <ul className={cx('shop_profile_body_shop_input_img_descript')}>
                                <li>Kích thước hình ảnh tiêu chuẩn: Chiều rộng 300px, Chiều cao 300px</li>
                                <li>Dung lượng file tối đa: 2.0MB</li>
                                <li>Định dạng file được hỗ trợ: JPG,JPEG,PNG</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {isEditing && (
                    <div className={cx('shop_profile_button')}>
                        <Button type="submit" primary small className={cx('shop_profile_button_')}>
                            Lưu
                        </Button>
                        <Button onClick={handleCancel} small className={cx('shop_profile_button_')} text>
                            Hủy
                        </Button>
                    </div>
                )}
            </div>
        </form>
    );
}

export default ShopProfile;
