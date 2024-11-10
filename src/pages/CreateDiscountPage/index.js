import styles from './CreateDiscountPage.module.scss';
import classNames from 'classnames/bind';
import '../../assets/styles/globalClass.scss';
import { DateTimeRangePicker } from '@mui/x-date-pickers-pro/DateTimeRangePicker';
import Button from '../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function CreateDiscountPage() {
    return (
        <>
            <div className={cx('board', 'create_discount_info_wrap')}>
                <h2 className={cx('board_header')}>Thông tin cơ bản</h2>
                <div className={cx('create_discount_info_time_wrap')}>
                    <div className={cx('create_discount_info_time')}>Thời gian khuyến mãi</div>
                    <div className={cx('create_discount_info_time_picker')}>
                        <DateTimeRangePicker
                            slotProps={{ textField: { size: 'small' } }}
                            localeText={{ start: 'Bắt đầu', end: 'Kết thúc' }}
                            disablePast
                        />
                    </div>
                </div>
            </div>

            <div className={cx('board', 'add_product_info_wrap')}>
                <h2 className={cx('board_header')}>Thông tin cơ bản</h2>
                <h3 className={cx('board_sub_header')}>
                    Thêm sản phẩm vào chương trình khuyến mãi và thiết lập giá khuyến mãi.
                </h3>
                <Button className={cx('add_product_info_button')} primary_text medium>
                    <FontAwesomeIcon className={cx('add_product_info_icon')} icon={faPlus} />
                    <span>Thêm sản phẩm</span>
                </Button>
            </div>

            <div className={cx('action_button')}>
                <Button className={cx('action_button_item')} primary small>
                    Xác nhận
                </Button>
                <Button text small>
                    Hủy
                </Button>
            </div>
        </>
    );
}

export default CreateDiscountPage;
