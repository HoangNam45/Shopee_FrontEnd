import { lazy } from 'react';
import { DefaultLayout } from '../components/Layouts';
const ProductDetail = lazy(() => import('../pages/ProductDetail'));

const productRoutes = [{ path: '/products/:slug', component: ProductDetail, layout: DefaultLayout }];

export default productRoutes;
