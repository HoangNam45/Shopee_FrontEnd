import React, { useState, useCallback } from 'react';
import { Button } from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './PriceRange.module.scss';

const cx = classNames.bind(styles);

const PriceRange = ({ onPriceRangeChange }) => {
    const [priceRanges, setPriceRanges] = useState([]);

    const handleAddRange = (e) => {
        e.preventDefault();
        setPriceRanges((prevRanges) => {
            const newRanges = [...prevRanges, { from: '', to: '', price: '' }];
            onPriceRangeChange(newRanges);
            return newRanges;
        });
    };

    const handleRemoveRange = (index) => {
        setPriceRanges((prevRanges) => {
            const newRanges = prevRanges.filter((_, i) => i !== index);
            onPriceRangeChange(newRanges);
            return newRanges;
        });
    };

    const handleInputChange = (index, field, value) => {
        setPriceRanges((prevRanges) => {
            const newRanges = prevRanges.map((range, i) => (i === index ? { ...range, [field]: value } : range));
            onPriceRangeChange(newRanges);
            return newRanges;
        });
    };

    return (
        <div>
            {priceRanges.length === 0 ? (
                <Button size_auto dashed_border onClick={handleAddRange}>
                    <FontAwesomeIcon icon={faPlus} className={cx('plus_icon')} />
                    Thêm khoảng giá
                </Button>
            ) : (
                <div className={cx('price_range_container')}>
                    <div className={cx('price_range_header')}>
                        <div className={cx('price_range_text_start', 'price_range_header_text')}>Khoảng giá</div>
                        <div className={cx('price_range_header_text', 'price_range_text_middle')}>Từ (sản phẩm)</div>
                        <div className={cx('price_range_header_text', 'price_range_text_middle')}>Đến (sản phẩm)</div>
                        <div className={cx('price_range_header_text', 'price_range_text_middle')}>Đơn giá</div>
                        <div className={cx('price_range_text_end', 'price_range_header_text')}>Thao tác</div>
                    </div>

                    {priceRanges.map((range, index) => (
                        <div className={cx('price_range_body')} key={index}>
                            <div className={cx('price_range_text_start', 'price_range_body_text')}>
                                Khoảng giá {index + 1}
                            </div>
                            <div className={cx('price_range_text_middle', 'price_range_body_text')}>
                                <input
                                    type="text"
                                    placeholder="Từ (sản phẩm)"
                                    className={cx('price_range_body_input')}
                                    value={range.from}
                                    onChange={(e) => handleInputChange(index, 'from', e.target.value)}
                                />
                            </div>
                            <div className={cx('price_range_text_middle', 'price_range_body_text')}>
                                <input
                                    type="text"
                                    placeholder="Đến (sản phẩm)"
                                    className={cx('price_range_body_input')}
                                    value={range.to}
                                    onChange={(e) => handleInputChange(index, 'to', e.target.value)}
                                />
                            </div>
                            <div className={cx('price_range_text_middle', 'price_range_body_text')}>
                                <input
                                    type="text"
                                    placeholder="Đơn giá"
                                    className={cx('price_range_body_input')}
                                    value={range.price}
                                    onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                                />
                            </div>
                            <div className={cx('price_range_text_end', 'price_range_body_text')}>
                                <FontAwesomeIcon
                                    className={cx('render_img_delete_icon')}
                                    icon={faTrash}
                                    onClick={() => handleRemoveRange(index)}
                                />
                            </div>
                        </div>
                    ))}

                    <div className={cx('price_range_body')}>
                        <div className={cx('price_range_text_start', 'price_range_body_text')}>
                            Khoảng giá {priceRanges.length + 1}
                        </div>
                        <div className={cx('price_range_text_middle', 'price_range_add')}>
                            <Button size_auto dashed_border onClick={handleAddRange}>
                                <FontAwesomeIcon icon={faPlus} className={cx('plus_icon')} />
                                Thêm khoảng giá
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PriceRange;
