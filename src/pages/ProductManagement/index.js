import { Button } from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './ProductManagement.module.scss';
const cx = classNames.bind(styles);

function ProductManagement() {
    return (
        <div className={cx('productManagement_wrap')}>
            <div className={cx('productManagement_header')}>
                <span className={cx('productManagement_header_')}>Sản phẩm</span>
                <Button primary medium>
                    <FontAwesomeIcon className={cx('plus_icon')} icon={faPlus} />
                    Thêm 1 sản phẩm mới
                </Button>
            </div>
            {/* <div className={cx('productManagement_header')}></div> */}
        </div>
    );
}
export default ProductManagement;
