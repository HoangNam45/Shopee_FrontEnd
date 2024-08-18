import classNames from 'classnames/bind';
import styles from './LoginForm.module.scss';
import '../../../assets/styles/authForm.scss';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { login } from '../../../services/authService';
import validationSchema from '../../../utils/loginValidationonSchema';
import { setToken } from '../../../services/tokenService';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function LoginForm() {
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{ account: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
                try {
                    const data = await login(values);
                    const token = data.token;
                    setToken(token);
                    navigate('/');
                } catch (error) {
                    console.error('Error login', error);
                }
            }}
        >
            <Form className={cx('auth_form')}>
                <div className={cx('form_header')}>Đăng nhập</div>
                <div className={cx('form_input')}>
                    <div className={cx('form_input_')}>
                        <div className={cx('input_wrap')}>
                            <Field
                                type="text"
                                placeholder="Email/Số điện thoại/Tên đăng nhập"
                                className={cx('input')}
                                name="account"
                                autoComplete="new-password"
                            />
                        </div>
                        <ErrorMessage name="account" component="div" className={cx('input_validate')}></ErrorMessage>
                    </div>
                    <div className={cx('form_input_')}>
                        <div className={cx('input_wrap')}>
                            <Field
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                placeholder="Mật khẩu"
                                className={cx('input')}
                            />
                        </div>
                        <ErrorMessage name="password" component="div" className={cx('input_validate')}></ErrorMessage>
                    </div>
                    <Button full_width primary>
                        ĐĂNG NHẬP
                    </Button>
                    <div className={cx('login_form_input_forget')}>Quên mật khẩu</div>
                    <div className={cx('form_input_or')}>
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
                        <Button type="submit" text medium>
                            <div className={cx('form_input_method_')}>
                                <div className={cx('form_input_method_img_gg')}></div>
                                <span>Google</span>
                            </div>
                        </Button>
                    </div>
                </div>
                <div className={cx('form_footer')}>
                    <span>Bạn mới biết đến Shopee?</span>
                    <Link to="/register">Đăng ký</Link>
                </div>
            </Form>
        </Formik>
    );
}

export default LoginForm;
