import styles from './SellerHeader.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function SellerHeader() {
    return <div className={cx('seller_header')}></div>;
}

export default SellerHeader;
