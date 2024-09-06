import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/Button/Button';
import classNames from 'classnames/bind';
import styles from './ProductManagementLayout.module.scss';

const cx = classNames.bind(styles);

const ProductManagementLayout = ({ children }) => {
    return (
        <div>
            <div className={cx('productManagement_wrap')}>
                <div className={cx('productManagement_header')}>
                    <span className={cx('productManagement_header_')}>Sản phẩm</span>
                    <Button primary medium>
                        <FontAwesomeIcon className={cx('plus_icon')} icon={faPlus} />
                        Thêm 1 sản phẩm mới
                    </Button>
                </div>
            </div>

            <nav className={cx('productManagement_nav')}>
                <NavLink to="/products/all" className={cx('productManagement_nav_')}>
                    Tất cả
                </NavLink>
                <NavLink to="/products/active" className={cx('productManagement_nav_')}>
                    Đang hoạt động
                </NavLink>
                <NavLink to="/products/inactive" className={cx('productManagement_nav_')}>
                    Chưa được đăng
                </NavLink>
            </nav>

            <div className="productManagement_list">{children}</div>
        </div>
    );
};

export default ProductManagementLayout;
