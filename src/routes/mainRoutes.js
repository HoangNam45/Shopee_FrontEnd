import { lazy } from 'react';
import { DefaultLayout } from '../components/Layouts';
const Home = lazy(() => import('../pages/Home'));

const mainRoutes = [{ path: '/', component: Home, layout: DefaultLayout }];

export default mainRoutes;
