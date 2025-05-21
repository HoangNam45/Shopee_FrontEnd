import { DefaultLayout } from '../components/Layouts';

import Home from '../pages/Home';
import SearchPage from '../pages/SearchPage';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';

const mainRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/search', component: SearchPage, layout: DefaultLayout },
    { path: '/cart', component: Cart, layout: DefaultLayout },
    { path: '/checkout', component: Checkout, layout: DefaultLayout },
];

export default mainRoutes;
