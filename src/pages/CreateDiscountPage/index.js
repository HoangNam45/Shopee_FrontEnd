import styles from './CreateDiscountPage.module.scss';
import classNames from 'classnames/bind';
import '../../assets/styles/globalClass.scss';
const cx = classNames.bind(styles);
function CreateDiscountPage() {
    return (
        <div className={cx('board', 'create_discount_info_wrap')}>
            <h2 className={cx('create_discount_info_header')}>Thông tin cơ bản</h2>
        </div>
    );
}

export default CreateDiscountPage;
