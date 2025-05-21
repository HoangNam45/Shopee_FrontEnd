import { DefaultLayout } from '../components/Layouts';
import Auth from '../pages/Auth';

const authRoutes = [
    { path: '/login', component: Auth, layout: DefaultLayout },
    { path: '/register', component: Auth, layout: DefaultLayout },
];

export default authRoutes;
