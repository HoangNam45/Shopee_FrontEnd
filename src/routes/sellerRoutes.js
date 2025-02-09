import { lazy } from 'react';
import { HeaderWithSidebar, HeaderOnly } from '../components/Layouts';
const SellerHome = lazy(() => import('../pages/SellerHome'));
const AllProduct = lazy(() => import('../pages/ProductManagement/AllProduct'));
const ActiveProduct = lazy(() => import('../pages/ProductManagement/ActiveProduct'));
const HiddenProduct = lazy(() => import('../pages/ProductManagement/HiddenProduct'));

const ProductAddition = lazy(() => import('../pages/ProductAddition'));
const ShopProfile = lazy(() => import('../pages/ShopProfile'));

const SellerDiscountPage = lazy(() => import('../pages/SellerDiscountPage'));
const CreateDiscountPage = lazy(() => import('../pages/CreateDiscountPage'));

const AllOrders = lazy(() => import('../pages/OrdersManagement/AllOrders'));
const PendingOrders = lazy(() => import('../pages/OrdersManagement/PendingOrders'));

const sellerRoutes = [
    { path: '/seller', component: SellerHome, layout: HeaderWithSidebar },
    { path: '/seller/all_products', component: AllProduct, layout: HeaderWithSidebar },
    { path: '/seller/active_products', component: ActiveProduct, layout: HeaderWithSidebar },
    { path: '/seller/hidden_products', component: HiddenProduct, layout: HeaderWithSidebar },

    { path: '/seller/portal_product/:productId', component: ProductAddition, layout: HeaderOnly },
    { path: '/seller/portal_product', component: ProductAddition, layout: HeaderOnly },
    { path: '/seller/shop_profile', component: ShopProfile, layout: HeaderWithSidebar },
    { path: '/seller/discount', component: SellerDiscountPage, layout: HeaderWithSidebar },
    { path: '/seller/discount/create', component: CreateDiscountPage, layout: HeaderWithSidebar },

    { path: '/seller/all_orders', component: AllOrders, layout: HeaderWithSidebar },
    { path: '/seller/pending_orders', component: PendingOrders, layout: HeaderWithSidebar },
];

export default sellerRoutes;
