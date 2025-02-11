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
const ShippingOrders = lazy(() => import('../pages/OrdersManagement/ShippingOrders'));
const CanceledOrders = lazy(() => import('../pages/OrdersManagement/CanceledOrders'));
const FailedDeliveryOrders = lazy(() => import('../pages/OrdersManagement/FailedDeliveryOrders'));
const CompletedOrders = lazy(() => import('../pages/OrdersManagement/CompletedOrders'));

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
    { path: '/seller/shipping_orders', component: ShippingOrders, layout: HeaderWithSidebar },
    { path: '/seller/canceled_orders', component: CanceledOrders, layout: HeaderWithSidebar },
    { path: '/seller/failed_delivery_orders', component: FailedDeliveryOrders, layout: HeaderWithSidebar },
    { path: '/seller/completed_orders', component: CompletedOrders, layout: HeaderWithSidebar },
];

export default sellerRoutes;
