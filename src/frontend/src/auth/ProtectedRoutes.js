import {Navigate, Outlet} from "react-router"
import {getCurrentUser} from "../services/authService";

const useAuth = () => {
    const user = getCurrentUser();
    return user
};
// const useAuth = () => {
//     const user = {loggedIn: false};
//     return user && user.loggedIn;
// };
const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet/> : <Navigate to="/notallowed" />
};

export default ProtectedRoutes;





// import {Route} from 'react-router-dom';
// import {getCurrentUser} from "../services/authService";
// import {Navigate} from "react-router";
// import {useAuth} from "./AuthProvider";
//
//  export default function ProtectedRoute({ ...props }) {
//    const { user } = useAuth()
//    if (!user) {
//       return <Navigate replace="*" to="/notallowed" />
//        // if(error.response.status == 401){
//    }
//    return <Route {...props} />
//  }
