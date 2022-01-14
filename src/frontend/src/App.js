// -- React and related libs
import React, {useEffect, useState, Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'

// -- Custom Components
import Start from './pages/Start/start'
import NotFound from './pages/Not/notFound'
import NotAllowed from "./pages/Not/notAllowed"
import Login from "./pages/Login/login"
import {getCurrentUser} from "./services/authService"
import ProtectedRoutes from "./auth/ProtectedRoutes";
import Forgot from './pages/Login/forgot'
import Reset from './pages/Login/reset'
import Logout from './pages/Logout/logout'
import Signup from './pages/SignUp/signup'
import Impressum from './pages/Impressum/impressum'
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


const Home = React.lazy(() => import("./pages/Home/home"));
const Jumble = React.lazy(() => import("./pages/Jumble/jumble"));
const EditJumble = React.lazy(() => import("./pages/Jumble/editJumble"));
const AddJumble = React.lazy(() => import("./pages/Jumble/addJumble"));
const AllJumbles = React.lazy(() => import("./pages/Jumble/allJumbles"));
const Profile = React.lazy(() => import("./pages/Profile/profile"));
const MyProfile = React.lazy(() => import("./pages/Profile/myProfile"));
const EditProfile = React.lazy(() => import("./pages/Profile/editProfile"));
const Category = React.lazy(() => import("./pages/Category/category"));
const Categories = React.lazy(() => import("./pages/Categories/categories"));


// -- Component Styles
import './assets/css/style.css'

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
