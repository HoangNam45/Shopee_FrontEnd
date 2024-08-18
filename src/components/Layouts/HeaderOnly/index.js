import styles from './HeaderOnly.module.scss';
import classNames from 'classnames/bind';
import SellerHeader from '../components/SellerHeader';

const cx = classNames.bind(styles);

function HeaderWithSidebar({ children }) {
    return (
        <div className={cx('container')}>
            <SellerHeader />
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default HeaderWithSidebar;
