// -- React and related libs
import React, {useEffect, useState} from 'react'
import {Route, Routes} from 'react-router-dom'

// -- Custom Components
import Start from './pages/Start/start'
import Home from './pages/Home/home'
import Jumble from './pages/Jumble/jumble'
import EditJumble from './pages/Jumble/editJumble'
import AddJumble from './pages/Jumble/addJumble'
import EditProfile from './pages/Profile/editProfile'

import Category from './pages/Category/category'
import Categories from './pages/Categories/categories'
import AllJumbles from "./pages/Jumble/allJumbles"
import Forgot from './pages/Login/forgot'
import Reset from './pages/Login/reset'
import Profile from './pages/Profile/profile'
import Logout from './pages/Logout/logout'
import Signup from './pages/SignUp/signup'
import Impressum from './pages/Impressum/impressum'
import Footer from './components/footer'
import MyProfile from "./pages/Profile/myProfile"
import NotFound from './pages/Not/notFound'
import NotAllowed from "./pages/Not/notAllowed"
import Login from "./pages/Login/login"
import {getCurrentUser} from "./services/authService"
import ProtectedRoutes from "./auth/ProtectedRoutes";

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
            <Route path="/jumbles/edit/:jumbleId" element={<EditJumble/>}/>
            <Route path="/jumbles/:jumbleId" element={<Jumble />} />
            <Route path="/jumbles/new" element={<AddJumble />} />
            <Route path="/jumbles/getall" element={<AllJumbles />} />
            <Route path="/categories/:categoryId" element={<Category />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/user/:id" element={<Profile />} />
            <Route path="/user/edit/:id" element={<EditProfile/>} />
            <Route path="/user/me" element={<MyProfile/>} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
