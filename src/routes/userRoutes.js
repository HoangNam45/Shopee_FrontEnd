import { DefaultLayout } from '../components/Layouts';
import { lazy } from 'react';
const AllPurchases = lazy(() => import('../pages/PurchasesManagement/AllPurchases'));
// const CompletedPurchases = () => import('../pages/PurchasesManagement/AllProduct');
const PendingPurchases = lazy(() => import('../pages/PurchasesManagement/PendingPurchases'));
// const ShippingPurchases = () => import('../pages/PurchasesManagement/HiddenProduct');

const userRoutes = [
    { path: '/user/all_purchases', component: AllPurchases, layout: DefaultLayout },
    { path: '/user/pending_purchases', component: PendingPurchases, layout: DefaultLayout },
    { path: '/user/shipping_purchases', component: AllPurchases, layout: DefaultLayout },
    { path: '/user/completed_purchases', component: AllPurchases, layout: DefaultLayout },
    { path: '/user/canceled_purchases', component: AllPurchases, layout: DefaultLayout },
];

export default userRoutes;
