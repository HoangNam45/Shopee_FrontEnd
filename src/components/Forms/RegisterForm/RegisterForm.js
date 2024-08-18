import classNames from 'classnames/bind';
import styles from './RegisterForm.module.scss';
import '../../../assets/styles/authForm.scss';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';

import { register } from '../../../services/authService';
// import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from '../../../utils/registerValidationSchema';

const cx = classNames.bind(styles);

function RegisterForm() {
    return (
        <Formik
            initialValues={{ account: '', password: '', confirmPassword: '' }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
                try {
                    const response = register(values);
                    console.log(response);
                } catch (error) {
                    console.error('Error register', error);
                }
            }}
        >
            <Form className={cx('auth_form')}>
                <div className={cx('form_header')}>Đăng ký</div>
                <div className={cx('form_input')}>
                    <div className={cx('form_input_')}>
                        <div className={cx('input_wrap')}>
                            <Field
                                name="account"
                                type="text"
                                autoComplete="new-password"
                                placeholder="Tài khoản của bạn"
                                className={cx('input')}
                            />
                        </div>
                        <ErrorMessage name="account" className={cx('input_validate')} component="div"></ErrorMessage>
                    </div>
                    <div className={cx('form_input_')}>
                        <div className={cx('input_wrap')}>
                            <Field
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                placeholder="Mật khẩu của bạn"
                                className={cx('input')}
                            />
                        </div>
                        <ErrorMessage name="password" className={cx('input_validate')} component="div"></ErrorMessage>
                    </div>
                    <div className={cx('form_input_')}>
                        <div className={cx('input_wrap')}>
                            <Field
                                name="confirmPassword"
                                type="password"
                                autoComplete="new-password"
                                placeholder="Nhập lại mật khẩu"
                                className={cx('input')}
                            />
                        </div>
                        <ErrorMessage
                            name="confirmPassword"
                            className={cx('input_validate')}
                            component="div"
                        ></ErrorMessage>
                    </div>
                    <Button full_width primary type="submit">
                        ĐĂNG KÝ
                    </Button>

                    <div className={cx('form_input_or', 'custom_form_input_or')}>
                        <div className={cx('form_input_or_line')}></div>
                        <div className={cx('form_input_or_text')}>HOẶC</div>
                        <div className={cx('form_input_or_line')}></div>
                    </div>
                    <div className={cx('form_input_method')}>
                        <Button text medium>
                            <div className={cx('form_input_method_')}>
                                <div className={cx('form_input_method_img_fb')}></div>
                                <span>Facebook</span>
                            </div>
                        </Button>
                        <Button text medium>
                            <div className={cx('form_input_method_')}>
                                <div className={cx('form_input_method_img_gg')}></div>
                                <span>Google</span>
                            </div>
                        </Button>
                    </div>
                </div>
                <div className={cx('form_footer')}>
                    <span>Bạn đã có tài khoản?</span>
                    <Link to="/login">Đăng nhập</Link>
                </div>
            </Form>
        </Formik>
    );
}

export default RegisterForm;
