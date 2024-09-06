import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../services/tokenService';

function PrivateRoute({ children }) {
    const isAuthenticated = isAuthenticated(); 

    return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;