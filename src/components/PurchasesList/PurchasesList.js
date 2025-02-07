import classNames from 'classnames/bind';
import styles from './PurchasesList.module.scss';
import '../../assets/styles/globalClass.scss';

const cx = classNames.bind(styles);
const PurchasesList = () => {
    return (
        <div className={cx('board', 'purchases-list')}>
            <div className={cx('purchases-list_info_wrapper')}>
                <div className={cx('purchases-list_info_header')}>
                    <div>
                        <span className={cx('purchases-list_info_header_seller')}>Người bán</span>
                        <img
                            className={cx('purchases-list_info_header_seller_avatar')}
                            src="/images/7fe2f43c07284c892375dbb80d0ca93d.jpg"
                            alt="avt"
                        />
                        <span className={cx('purchases-list_info_header_seller_name')}>Nam hoeng</span>
                    </div>
                    <span className={cx('purchases-list_info_header_status')}>ĐÃ HỦY</span>
                </div>

                <div className={cx('purchases-list_info_body')}>
                    <img
                        className={cx('purchases-list_info_body_img')}
                        src="/images/7fe2f43c07284c892375dbb80d0ca93d.jpg"
                        alt="avt"
                    />
                    <div className={cx('purchases-list_info_body_product')}>
                        <span className={cx('purchases-list_info_body_product_name')}>
                            Điện thoại Apple iPhone 16 128GB
                        </span>
                        <span className={cx('purchases-list_info_body_product_quantity')}>x1</span>
                    </div>
                    <div className={cx('body-space')}></div>
                    <div className={cx('purchases-list_info_body_price')}>
                        <div className={cx('purchases-list_info_body_discount_price')}>₫22.999.000</div>
                        <div className={cx('purchases-list_info_body_original_price')}>₫21.990.000</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchasesList;
