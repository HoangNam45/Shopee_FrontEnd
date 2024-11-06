import { lazy } from 'react';
import { DefaultLayout } from '../components/Layouts';

const Home = lazy(() => import('../pages/Home'));
const SearchPage = lazy(() => import('../pages/SearchPage'));

const mainRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/search', component: SearchPage, layout: DefaultLayout },
];

export default mainRoutes;
