import classNames from 'classnames/bind';
import styles from './UserProfile.module.scss';
import '../../assets/styles/globalClass.scss';
import { Container } from 'react-bootstrap';
import Button from '../../components/Button/Button';
const cx = classNames.bind(styles);
function UserProfile() {
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
                                        className={cx('user_profile_account_info_input')}
                                    />
                                </div>
                            </div>

                            <div className={cx('user_profile_account_info')}>
                                <div className={cx('user_profile_account_info_field')}></div>

                                <Button primary small className={cx('user_profile_account_info_button')}>
                                    Lưu
                                </Button>
                            </div>
                        </div>

                        <div className={cx('user_profile_avatar_wrapper')}>
                            <img alt="user_avt" src="/images/DefaultUser.jpg" className={cx('user_profile_avatar')} />
                            <Button text small>
                                Chọn ảnh
                            </Button>

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
