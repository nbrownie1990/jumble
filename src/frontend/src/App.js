// -- React and related libs
import React, {useEffect, useState, Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
// -- Component Styles
import './assets/css/style.css'

// -- Component Styles
import './assets/css/style.css'


// -- Custom Components
import Start from './pages/start'
import NotFound from './pages/notFound'
import NotAllowed from "./pages/notAllowed"
import Login from "./pages/login"
import {getCurrentUser} from "./services/authService"
import ProtectedRoutes from "./auth/ProtectedRoutes";
import Forgot from './pages/forgot'
import Reset from './pages/reset'
import Logout from './pages/logout'
import Signup from './pages/signup'
import Impressum from './pages/impressum'
import Footer from './components/footer'


//import Home from './pages/Home/home'
//import Jumble from './pages/Jumble/jumble'
//import EditJumble from './pages/Jumble/editJumble'
//import AddJumble from './pages/Jumble/addJumble'
//import AllJumbles from "./pages/Jumble/allJumbles"
//import Category from './pages/Category/category'
//import Categories from './pages/Categories/categories'
//import Profile from './pages/Profile/profile'
//import MyProfile from "./pages/Profile/myProfile"
//import EditProfile from './pages/Profile/editProfile'


const Home = React.lazy(() => import("./pages/home"));
const Jumble = React.lazy(() => import("./pages/jumble"));
const EditJumble = React.lazy(() => import("./pages/editJumble"));
const AddJumble = React.lazy(() => import("./pages/addJumble"));
const AllJumbles = React.lazy(() => import("./pages/allJumbles"));
const Profile = React.lazy(() => import("./pages/profile"));
const MyProfile = React.lazy(() => import("./pages/myProfile"));
const EditProfile = React.lazy(() => import("./pages/editProfile"));
const Category = React.lazy(() => import("./pages/category"));
const Categories = React.lazy(() => import("./pages/categories"));


function App() {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    }, [])

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/forgot" element={<Forgot />} />
                <Route path="/reset" element={<Reset />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/logoutnow" element={<Logout />} />
                <Route path="/notallowed" element={<NotAllowed />}/>
                <Route element={<ProtectedRoutes/>}>
                    <Route
                        path="/jumbles/:jumbleId"
                        element={
                            <Suspense fallback={<>...</>}>
                                <Jumble/>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/jumbles/edit/:jumbleId"
                        element={
                            <Suspense fallback={<>...</>}>
                                <EditJumble />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/jumbles/new"
                        element={
                            <Suspense fallback={<>...</>}>
                                <AddJumble />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/jumbles/getall"
                        element={
                            <Suspense fallback={<>...</>}>
                                <AllJumbles />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/categories/:categoryId"
                        element={
                            <Suspense fallback={<>...</>}>
                                <Category />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/categories"
                        element={
                            <Suspense fallback={<>...</>}>
                                <Categories />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/user/:id"
                        element={
                            <Suspense fallback={<>...</>}>
                                <Profile />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/user/edit/:id"
                        element={
                            <Suspense fallback={<>...</>}>
                                <EditProfile />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/user/me"
                        element={
                            <Suspense fallback={<>...</>}>
                                <MyProfile />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/home"
                        element={
                            <Suspense fallback={<>...</>}>
                                <Home />
                            </Suspense>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    )
}

export default App
