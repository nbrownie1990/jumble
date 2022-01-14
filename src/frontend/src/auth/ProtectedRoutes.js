import {Navigate, Outlet} from "react-router"
import {getCurrentUser} from "../services/authService";

const useAuth = () => {
    const user = getCurrentUser();
    return user
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet/> : <Navigate to="/notallowed" />
};

export default ProtectedRoutes;

