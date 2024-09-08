import authRoutes from './authRoutes';
import mainRoutes from './mainRoutes';
import sellerRoutes from './sellerRoutes';
import productRoutes from './productRoutes';
const publicRoutes = [...authRoutes, ...mainRoutes, ...productRoutes];
const privateRoutes = [...sellerRoutes];
export { publicRoutes, privateRoutes };
