import { DefaultLayout, HeaderWithSidebar, HeaderOnly } from '../components/Layouts';
import { Home, Auth, SellerHome, ProductAddition, ProductDetail } from '../pages';

const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/login', component: Auth, layout: DefaultLayout },
    { path: '/register', component: Auth, layout: DefaultLayout },
    { path: '/seller', component: SellerHome, layout: HeaderWithSidebar },
    { path: '/seller/add_product', component: ProductAddition, layout: HeaderOnly },
    { path: '/seller/add_product', component: ProductAddition, layout: HeaderOnly },
    { path: '/products/:slug', component: ProductDetail, layout: DefaultLayout },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };