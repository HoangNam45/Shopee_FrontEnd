import authRoutes from './authRoutes';
import mainRoutes from './mainRoutes';
import sellerRoutes from './sellerRoutes';
import productRoutes from './productRoutes';
import userRoutes from './userRoutes';
const publicRoutes = [...authRoutes, ...mainRoutes, ...productRoutes];
const privateRoutes = [...sellerRoutes, ...userRoutes];
export { publicRoutes, privateRoutes };
