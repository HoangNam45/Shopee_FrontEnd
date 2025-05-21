import { HeaderWithSidebar, HeaderOnly } from '../components/Layouts';
import SellerHome from '../pages/SellerHome';
import AllProduct from '../pages/ProductManagement/AllProduct';
import ActiveProduct from '../pages/ProductManagement/ActiveProduct';
import HiddenProduct from '../pages/ProductManagement/HiddenProduct';
import ProductAddition from '../pages/ProductAddition';
import ShopProfile from '../pages/ShopProfile';
import SellerDiscountPage from '../pages/SellerDiscountPage';
import CreateDiscountPage from '../pages/CreateDiscountPage';
import AllOrders from '../pages/OrdersManagement/AllOrders';
import PendingOrders from '../pages/OrdersManagement/PendingOrders';
import ShippingOrders from '../pages/OrdersManagement/ShippingOrders';
import CanceledOrders from '../pages/OrdersManagement/CanceledOrders';
import FailedDeliveryOrders from '../pages/OrdersManagement/FailedDeliveryOrders';
import CompletedOrders from '../pages/OrdersManagement/CompletedOrders';

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
