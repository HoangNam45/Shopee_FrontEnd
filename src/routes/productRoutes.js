import { DefaultLayout } from '../components/Layouts';
import ProductDetail from '../pages/ProductDetail';

const productRoutes = [{ path: '/products/:slug', component: ProductDetail, layout: DefaultLayout }];

export default productRoutes;
