import { SellerHome, ProductManagement, ProductAddition, ShopProfile } from '../pages';
import { HeaderWithSidebar, HeaderOnly } from '../components/Layouts';

const sellerRoutes = [
    { path: '/seller', component: SellerHome, layout: HeaderWithSidebar },
    { path: '/seller/all_product', component: ProductManagement, layout: HeaderWithSidebar },
    { path: '/seller/add_product', component: ProductAddition, layout: HeaderOnly },
    { path: '/seller/shop_profile', component: ShopProfile, layout: HeaderWithSidebar },
];

export default sellerRoutes;
