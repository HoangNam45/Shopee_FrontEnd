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
                <div className={cx('purchases-management-header_status')}>Chờ giao hàng</div>
                <div className={cx('purchases-management-header_status')}>Hoàn thành</div>
                <div className={cx('purchases-management-header_status')}>Đã hủy</div>
                <div className={cx('purchases-management-header_status')}>Trả hàng</div>
            </div>

            {children}
        </Container>
    );
}
export default PurchasesManagementLayout;
