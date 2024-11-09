import classNames from 'classnames/bind';
import styles from './QuantityButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const cx = classNames.bind(styles);

function QuantityButton() {
    const [quantity, setQuantity] = useState(1);
    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };
    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setQuantity(Number(value) > 0 ? Number(value) : 1);
        }
    };
    return (
        <div className={cx('product_info_choices_field_amout_adjust')}>
            <button className={cx('product_info_choices_field_amout_adjust_btn')} onClick={handleDecrease}>
                <FontAwesomeIcon className={cx('product_info_choices_field_amout_adjust_btn_icon')} icon={faMinus} />
            </button>
            <input
                type="number"
                className={cx('product_info_choices_field_amout_adjust_input')}
                value={quantity}
                onChange={handleChange}
            ></input>
            <button className={cx('product_info_choices_field_amout_adjust_btn')} onClick={handleIncrease}>
                <FontAwesomeIcon className={cx('product_info_choices_field_amout_adjust_btn_icon')} icon={faPlus} />
            </button>
        </div>
    );
}

export default QuantityButton;
