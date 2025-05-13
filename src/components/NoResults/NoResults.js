import React from 'react';
import classNames from 'classnames/bind';
import styles from './NoResults.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function NoResults({ message }) {
    return (
        <div className={cx('no_results_wrapper')}>
            <FontAwesomeIcon icon={faFaceFrown} className={cx('no_results_icon')} />
            <div className={cx('no_results_message')}>{message}</div>
        </div>
    );
}

export default NoResults;
