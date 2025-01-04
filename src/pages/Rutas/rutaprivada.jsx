import { Navigate } from 'react-router-dom';
import { useAuth } from './../../contexto/contextauth';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    if (user == null | user == undefined | user == '') {
        return <Navigate to="/iniciarsesion" />;
    }
    return children;
};

export default PrivateRoute;