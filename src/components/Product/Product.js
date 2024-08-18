import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Product({ img, name, price, id }) {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price);
    };
    return (
        <Link to={`/product/${name}-${id}`} className={cx('product_wrap')}>
            <div className={cx('product_image_wrap')}>
                <img alt="product_img" className={cx('product_image')} src={img} />
            </div>
            <div className={cx('product_description')}>
                <div className={cx('product_description_name')}>{name}</div>
                <div className={cx('product_description_space')}></div>
                <div className={cx('product_description_info')}>
                    <div className={cx('product_description_info_price')}>
                        <span className={cx('product_description_info_price_', 'price_unit')}>₫</span>
                        <span className={cx('product_description_info_price_')}>{formatPrice(price)}</span>
                    </div>
                    <div className={cx('product_description_info_sold')}>Đã bán 257</div>
                </div>
            </div>
        </Link>
    );
}

export default Product;
