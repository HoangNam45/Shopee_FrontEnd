import { lazy } from 'react';
import { DefaultLayout } from '../components/Layouts';

const Home = lazy(() => import('../pages/Home'));
const SearchPage = lazy(() => import('../pages/SearchPage'));
const Cart = lazy(() => import('../pages/Cart'));
const Checkout = lazy(() => import('../pages/Checkout'));

const mainRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/search', component: SearchPage, layout: DefaultLayout },
    { path: '/cart', component: Cart, layout: DefaultLayout },
    { path: '/checkout', component: Checkout, layout: DefaultLayout },
];

export default mainRoutes;
