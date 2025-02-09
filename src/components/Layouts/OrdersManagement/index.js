import styles from './OrdersManagementLayout.module.scss';
import classNames from 'classnames/bind';
import '../../../assets/styles/globalClass.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function OrdersManagementLayout({ children }) {
    return (
        <div className={cx('board', 'orders-management_wrapper')}>
            <div className={cx('orders-management_header_wrapper')}>
                <NavLink
                    to="/seller/all_orders"
                    className={({ isActive }) => cx('orders-management_header', { active_link: isActive })}
                >
                    Tất cả
                </NavLink>
                <NavLink
                    to="/seller/pending_orders"
                    className={({ isActive }) => cx('orders-management_header', { active_link: isActive })}
                >
                    Chờ xác nhận
                </NavLink>
                <NavLink
                    to="/seller/all_orders/1"
                    className={({ isActive }) => cx('orders-management_header', { active_link: isActive })}
                >
                    Đang giao
                </NavLink>
                <NavLink
                    to="/seller/all_orders/1"
                    className={({ isActive }) => cx('orders-management_header', { active_link: isActive })}
                >
                    Đã giao
                </NavLink>
                <NavLink
                    to="/seller/all_orders/1"
                    className={({ isActive }) => cx('orders-management_header', { active_link: isActive })}
                >
                    Giao không thành công
                </NavLink>
                <NavLink
                    to="/seller/all_orders/1"
                    className={({ isActive }) => cx('orders-management_header', { active_link: isActive })}
                >
                    Hủy
                </NavLink>
            </div>

            {children}
        </div>
    );
}

export default OrdersManagementLayout;
