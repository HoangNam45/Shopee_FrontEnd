import classNames from 'classnames/bind';
import styles from './ShopProfile.module.scss';
import '../../assets/styles/globalClass.scss';

const cx = classNames.bind(styles);

function ShopProfile() {
    return <div className={cx('board', 'shop_profile_wrap')}>
        <div className={cx('shop_profile_header')}>
    </div>;
}

export default ShopProfile;
