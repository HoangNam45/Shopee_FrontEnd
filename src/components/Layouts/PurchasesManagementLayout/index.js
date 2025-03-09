import styles from './PurchasesManagementLayout.module.scss';
import classNames from 'classnames/bind';
import '../../../assets/styles/globalClass.scss';
import { NavLink } from 'react-router-dom';

import { Container } from '@mui/material';
const cx = classNames.bind(styles);
function PurchasesManagementLayout({ children }) {
    return (
        <Container className={cx('custom_container_purchases_management')}>
            <div className={cx('purchases-management-header')}>
                <NavLink
                    to="/user/all_purchases"
                    className={({ isActive }) => cx('purchases-management-header_status', { active_link: isActive })}
                >
                    Tất cả
                </NavLink>
                <NavLink
                    to="/user/pending_purchases"
                    className={({ isActive }) => cx('purchases-management-header_status', { active_link: isActive })}
                >
                    Chờ xác nhận
                </NavLink>
                <NavLink
                    to="/user/shipping_purchases"
                    className={({ isActive }) => cx('purchases-management-header_status', { active_link: isActive })}
                >
                    Chờ giao hàng
                </NavLink>
                <NavLink
                    to="/user/completed_purchases"
                    className={({ isActive }) => cx('purchases-management-header_status', { active_link: isActive })}
                >
                    Hoàn thành
                </NavLink>
                <NavLink
                    to="/user/canceled_purchases"
                    className={({ isActive }) => cx('purchases-management-header_status', { active_link: isActive })}
                >
                    Đã hủy
                </NavLink>
                <NavLink
                    to="/user/fail_delivery_purchases"
                    className={({ isActive }) => cx('purchases-management-header_status', { active_link: isActive })}
                >
                    Trả hàng
                </NavLink>
            </div>

            {children}
        </Container>
    );
}
export default PurchasesManagementLayout;
