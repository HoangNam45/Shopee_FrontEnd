import { lazy } from 'react';
import { DefaultLayout } from '../components/Layouts';
const Auth = lazy(() => import('../pages/Auth'));

const authRoutes = [
    { path: '/login', component: Auth, layout: DefaultLayout },
    { path: '/register', component: Auth, layout: DefaultLayout },
];

export default authRoutes;
