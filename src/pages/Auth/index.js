import classNames from 'classnames/bind';
import styles from './Auth.module.scss';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm';
import { useLocation } from 'react-router-dom';
const cx = classNames.bind(styles);
function Auth() {
    const location = useLocation();
    let Form;
    if (location.pathname === '/login') {
        Form = LoginForm;
    } else if (location.pathname === '/register') {
        Form = RegisterForm;
    }
    return (
        <div className={cx('auth_body_wrap')}>
            <div className={cx('auth_body')}>
                <Form />
            </div>
        </div>
    );
}

export default Auth;
