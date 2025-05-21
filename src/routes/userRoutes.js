import { DefaultLayout } from '../components/Layouts';

import AllPurchases from '../pages/PurchasesManagement/AllPurchases';
import CompletedPurchases from '../pages/PurchasesManagement/CompletedPurchases';
import ShippingPurchases from '../pages/PurchasesManagement/ShippingPurchases';
import FailDeliveryPurchases from '../pages/PurchasesManagement/FailDeliveryPurchases';
import PendingPurchases from '../pages/PurchasesManagement/PendingPurchases';
import CanceledPurchases from '../pages/PurchasesManagement/CanceledPurchases';
import UserProfile from '../pages/UserProfile';

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
