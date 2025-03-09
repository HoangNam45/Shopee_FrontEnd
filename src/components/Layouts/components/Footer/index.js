import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiVisa, SiMastercard, SiShopee, SiJcb } from 'react-icons/si';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);

export default function Footer() {
    return (
        <footer className={cx('footer')}>
            <Container className={cx('container')}>
                <div className={cx('footer-section')}>
                    <h5>CHĂM SÓC KHÁCH HÀNG</h5>
                    <ul className={cx('footer-section-text')}>
                        <li>Trung Tâm Trợ Giúp</li>
                        <li>Shopee Blog</li>
                        <li>Shopee Mall</li>
                        <li>Hướng Dẫn Mua Hàng</li>
                    </ul>
                </div>
                <div className={cx('footer-section')}>
                    <h5>VỀ SHOPEE</h5>
                    <ul className={cx('footer-section-text')}>
                        <li>Giới Thiệu Về Shopee</li>
                        <li>Tuyển Dụng</li>
                        <li>Điều Khoản Shopee</li>
                        <li>Chính Sách Bảo Mật</li>
                    </ul>
                </div>
                <div className={cx('footer-section')}>
                    <h5>THANH TOÁN</h5>
                    <div className={cx('icons')}>
                        <SiVisa size={25} />
                        <SiMastercard size={25} />
                        <SiJcb size={25} />
                        <SiShopee size={25} />
                    </div>
                </div>
                <div className={cx('footer-section')}>
                    <h5>THEO DÕI CHÚNG TÔI TRÊN</h5>
                    <div className={cx('icons')}>
                        <FaFacebook size={24} />
                        <FaInstagram size={24} />
                        <FaLinkedin size={24} />
                    </div>
                </div>
            </Container>
            <div className={cx('footer-bottom')}>&copy; 2022 Shopee. Tất cả các quyền được bảo lưu.</div>
        </footer>
    );
}
