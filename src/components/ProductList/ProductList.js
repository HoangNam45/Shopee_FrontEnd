import classNames from 'classnames/bind';
import styles from './ProductList.module.scss';
import '../../assets/styles/globalClass.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
const cx = classNames.bind(styles);
const ProductList = () => {
    return (
        <div className={cx('board', 'product_list_container')}>
            <div className={cx('product_list_search')}>
                <div className={cx('product_list_search_')}>
                    <FontAwesomeIcon className={cx('search_icon')} icon={faMagnifyingGlass} />
                    <input
                        className={cx('product_list_search_input')}
                        type="text"
                        placeholder="Tìm Tên sản phẩm, SKU sản phẩm, SKU phân loại, Mã sản phẩm"
                    />
                </div>
                <Button className={cx('product_list_search_button')} quite_small primary_text>
                    Áp dụng
                </Button>
                <Button className={cx('product_list_search_button')} quite_small text>
                    Nhập lại
                </Button>
            </div>
        </div>
    );
};

export default ProductList;
