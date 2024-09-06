import classNames from 'classnames/bind';
import styles from './AllProduct.module.scss';
import { ProductManagementLayout } from '../../../components/Layouts';
import ProductList from '../../../components/ProductList/ProductList';

const cx = classNames.bind(styles);

const AllProduct = () => {
    return (
        <>
            <ProductManagementLayout>
                <div className={cx('alo')}>Mayf laf thNgangangasdugeugfu ugugugug</div>
            </ProductManagementLayout>
            <ProductList />
        </>
    );
};

export default AllProduct;
