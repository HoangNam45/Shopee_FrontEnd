import Header from '../components/Header';
import AuthHeader from '../components/AuthHeader';
import Footer from '../components/Footer';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const location = useLocation();
    const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
    return (
        <div>
            {isAuthPage ? <AuthHeader /> : <Header />}
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
