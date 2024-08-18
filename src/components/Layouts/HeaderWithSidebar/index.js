import styles from './HeaderWithSidebar.module.scss';
import classNames from 'classnames/bind';
import SellerHeader from '../components/SellerHeader';
import SellerSidebar from '../components/SellerSidebar';
const cx = classNames.bind(styles);

function HeaderWithSidebar() {
    return (
        <div className={cx('container')}>
            <SellerHeader />
            <div className={cx('content')}>
                <SellerSidebar />
            </div>
        </div>
    );
}

export default HeaderWithSidebar;