import { lazy } from 'react';
import { HeaderWithSidebar, HeaderOnly } from '../components/Layouts';
const SellerHome = lazy(() => import('../pages/SellerHome'));
const ProductManagement = lazy(() => import('../pages/ProductManagement'));
const ProductAddition = lazy(() => import('../pages/ProductAddition'));
const ShopProfile = lazy(() => import('../pages/ShopProfile'));

const sellerRoutes = [
    { path: '/seller', component: SellerHome, layout: HeaderWithSidebar },
    { path: '/seller/all_product', component: ProductManagement, layout: HeaderWithSidebar },
    { path: '/seller/add_product', component: ProductAddition, layout: HeaderOnly },
    { path: '/seller/shop_profile', component: ShopProfile, layout: HeaderWithSidebar },
];

export default sellerRoutes;
