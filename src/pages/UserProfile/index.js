import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './UserProfile.module.scss';
import '../../assets/styles/globalClass.scss';
import { Container } from 'react-bootstrap';
import Button from '../../components/Button/Button';
import { getUserInfo, updateUserInfo } from '../../services/userService';
const cx = classNames.bind(styles);
function UserProfile() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [userName, setUserName] = useState('');
    const [originalUserName, setOriginalUserName] = useState('');
    const [originalUserAvt, setOriginalUserAvt] = useState(null);
    const [userAvtPreview, setUserAvtPreview] = useState('/images/DefaultUser.jpg');

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await getUserInfo();
                console.log(response.Avatar);
                const avatar = `http://localhost:5000/uploads/images/userAvatar/${response.Avatar}`;
                setOriginalUserName(response.Name);
                setUserAvtPreview(avatar);
                setUserName(response.Name);
                setOriginalUserAvt(response.Avatar);
            } catch (error) {
                console.error('Error fetching user', error);
            }
        };

        fetchUserInfo();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUserAvtPreview(URL.createObjectURL(file));
            setSelectedImage(file);
        }
    };
    const handleNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('Name', userName);
        if (selectedImage) {
            formData.append('Avatar', selectedImage);
        } else {
            formData.append('Avatar', originalUserAvt);
        }

        const formDataObject = Object.fromEntries(formData.entries());
        console.log(formDataObject);

        try {
            const response = await updateUserInfo(formData);
            setOriginalUserName(userName);
            setOriginalUserAvt(response.Avatar);
            setSelectedImage(null);
        } catch (error) {
            console.error('Error updating user', error);
        }
    };

    const isSaveDisabled = () => {
        return userName === originalUserName && selectedImage === null;
    };
    return (
        <>
            <Container className={cx('custom_container_profile')}>
                <div className={cx('board', 'user_profile_wrapper')}>
                    <div className={cx('user_profile_header')}>Hồ sơ của tôi</div>

                    <div className={cx('user_profile_body_wrapper')}>
                        <div>
                            <div className={cx('user_profile_account_info')}>
                                <div className={cx('user_profile_account_info_field')}>
                                    <span>Tên đăng nhập</span>
                                </div>
                                <div className={cx('user_profile_account_info_value')}>lahao357</div>
                            </div>

                            <div className={cx('user_profile_account_info')}>
                                <div className={cx('user_profile_account_info_field')}>
                                    <span>Tên</span>
                                </div>
                                <div className={cx('user_profile_account_info_input_wrapper')}>
                                    <input
                                        name="productPrice"
                                        type="text"
                                        placeholder=""
                                        value={userName}
                                        onChange={handleNameChange}
                                        className={cx('user_profile_account_info_input')}
                                    />
                                </div>
                            </div>

                            <div className={cx('user_profile_account_info')}>
                                <div className={cx('user_profile_account_info_field')}></div>

                                <Button
                                    disabled={isSaveDisabled()}
                                    primary
                                    small
                                    className={cx('user_profile_account_info_button')}
                                    onClick={isSaveDisabled() ? null : handleSubmit}
                                >
                                    Lưu
                                </Button>
                            </div>
                        </div>

                        <div className={cx('user_profile_avatar_wrapper')}>
                            <img alt="user_avt" src={userAvtPreview} className={cx('user_profile_avatar')} />
                            <label className={cx('user_profile_avatar_upload')}>
                                Chọn ảnh
                                <input
                                    onChange={handleImageChange}
                                    type="file"
                                    style={{ display: 'none' }}
                                    accept="image/*"
                                />
                            </label>

                            <ul className={cx('user_profile_avatar_descr')}>
                                <li>Ảnh sẽ được hiển thị làm ảnh đại diện</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
export default UserProfile;
