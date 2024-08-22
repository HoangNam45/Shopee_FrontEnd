import { Link } from 'react-router-dom';
import styles from './SellerSidebar.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function SellerSidebar() {
    return (
        <div className={cx('seller_sidebar_container')}>
            <ul className={cx('seller_sidebar')}>
                <li className={cx('seller_sidebar_menu')}>
                    <input type="checkbox" className={cx('seller_sidebar_menu_checkbox')} id="menu1" />
                    <label className={cx('seller_sidebar_menu_item')} htmlFor="menu1">
                        <img
                            className={cx('seller_sidebar_menu_item_img')}
                            alt="productImg"
                            src="/images/productManagement.png"
                        />
                        <span className={cx('seller_sidebar_menu_item_text')}>Quản Lý Đơn Hàng</span>
                        <span className={cx('seller_sidebar_menu_item_space')}></span>

                        <i className={cx('seller_sidebar_menu_item_dropdown')}>
                            <svg className={cx('arrow')} viewBox="0 0 16 16">
                                <path d="m8 6.81 3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81Z"></path>
                            </svg>
                        </i>
                    </label>
                    <ul className={cx('seller_sidebar_submenu')}>
                        <li className={cx('seller_sidebar_submenu_item')}>
                            <Link to="/seller/all_product" className={cx('seller_sidebar_submenu_item_')}>
                                Tất Cả Sản Phẩm
                            </Link>
                        </li>
                        <li className={cx('seller_sidebar_submenu_item')}>
                            {' '}
                            <Link to="/seller/add_product" className={cx('seller_sidebar_submenu_item_')}>
                                Thêm Sản Phẩm
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className={cx('seller_sidebar_menu')}>
                    <input type="checkbox" className={cx('seller_sidebar_menu_checkbox')} id="menu2" />
                    <label className={cx('seller_sidebar_menu_item')} htmlFor="menu2">
                        <img className={cx('seller_sidebar_menu_item_img')} alt="productImg" src="/images/Shop.png" />
                        <span className={cx('seller_sidebar_menu_item_text')}>Quản Lý Shop</span>
                        <span className={cx('seller_sidebar_menu_item_space')}></span>

                        <i className={cx('seller_sidebar_menu_item_dropdown')}>
                            <svg className={cx('arrow')} viewBox="0 0 16 16">
                                <path d="m8 6.81 3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81Z"></path>
                            </svg>
                        </i>
                    </label>
                    <ul className={cx('seller_sidebar_submenu')}>
                        <li className={cx('seller_sidebar_submenu_item')}>
                            <Link to="/seller/shop_profile" className={cx('seller_sidebar_submenu_item_')}>
                                Hồ Sơ Shop
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default SellerSidebar;
