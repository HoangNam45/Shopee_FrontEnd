import { lazy } from 'react';
import { HeaderWithSidebar, HeaderOnly } from '../components/Layouts';
const SellerHome = lazy(() => import('../pages/SellerHome'));
const AllProduct = lazy(() => import('../pages/ProductManagement/AllProduct'));
const ActiveProduct = lazy(() => import('../pages/ProductManagement/ActiveProduct'));
const HiddenProduct = lazy(() => import('../pages/ProductManagement/HiddenProduct'));

const ProductAddition = lazy(() => import('../pages/ProductAddition'));
const ShopProfile = lazy(() => import('../pages/ShopProfile'));

const sellerRoutes = [
    { path: '/seller', component: SellerHome, layout: HeaderWithSidebar },
    { path: '/seller/all_products', component: AllProduct, layout: HeaderWithSidebar },
    { path: '/seller/active_products', component: ActiveProduct, layout: HeaderWithSidebar },
    { path: '/seller/hidden_products', component: HiddenProduct, layout: HeaderWithSidebar },

    { path: '/seller/add_product', component: ProductAddition, layout: HeaderOnly },
    { path: '/seller/shop_profile', component: ShopProfile, layout: HeaderWithSidebar },
];

export default sellerRoutes;
