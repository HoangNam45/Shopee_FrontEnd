import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../services/tokenService';

const PrivateRoute = ({ children }) => {
    const authenticated = isAuthenticated();

    return authenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
