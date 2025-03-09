import { DefaultLayout } from '../components/Layouts';
import { lazy } from 'react';
const AllPurchases = lazy(() => import('../pages/PurchasesManagement/AllPurchases'));
const CompletedPurchases = lazy(() => import('../pages/PurchasesManagement/CompletedPurchases'));
const ShippingPurchases = lazy(() => import('../pages/PurchasesManagement/ShippingPurchases'));
const FailDeliveryPurchases = lazy(() => import('../pages/PurchasesManagement/FailDeliveryPurchases'));
const PendingPurchases = lazy(() => import('../pages/PurchasesManagement/PendingPurchases'));
const CanceledPurchases = lazy(() => import('../pages/PurchasesManagement/CanceledPurchases'));
const UserProfile = lazy(() => import('../pages/UserProfile'));

const userRoutes = [
    { path: '/user/all_purchases', component: AllPurchases, layout: DefaultLayout },
    { path: '/user/pending_purchases', component: PendingPurchases, layout: DefaultLayout },
    { path: '/user/shipping_purchases', component: ShippingPurchases, layout: DefaultLayout },
    { path: '/user/completed_purchases', component: CompletedPurchases, layout: DefaultLayout },
    { path: '/user/canceled_purchases', component: CanceledPurchases, layout: DefaultLayout },
    { path: '/user/fail_delivery_purchases', component: FailDeliveryPurchases, layout: DefaultLayout },
    { path: '/user/profile', component: UserProfile, layout: DefaultLayout },
];

export default userRoutes;
