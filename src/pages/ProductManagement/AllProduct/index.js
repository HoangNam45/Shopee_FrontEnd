import classNames from 'classnames/bind';
import styles from './AllProduct.module.scss';
import { ProductManagementLayout } from '../../../components/Layouts';
import ProductList from '../../../components/ProductList/ProductList';

const cx = classNames.bind(styles);

const AllProduct = () => {
    return (
        <>
            <ProductManagementLayout></ProductManagementLayout>
            <ProductList />
        </>
    );
};

export default AllProduct;
