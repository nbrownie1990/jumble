// -- React and related libs
import React, {useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom'

// -- Third Party Libs
import AOS from 'aos'
import 'aos/dist/aos.css'

// -- Custom Components
import Start from './pages/Start/start'
import Home from './pages/Home/home'
import Jumble from './pages/Jumble/jumble'
import EditJumble from './pages/Jumble/editJumble'
import AddJumble from './pages/Jumble/addJumble'
import EditProfile from './pages/Profile/editProfile'

import Category from './pages/Category/category'
import Categories from './pages/Categories/categories'
import AllJumbles from "./pages/Jumble/allJumbles";
import Forgot from './pages/Login/forgot'
import Reset from './pages/Login/reset'
import Profile from './pages/Profile/profile'
import Logout from './pages/Logout/logout'
import Signup from './pages/SignUp/signup'
import Notfound from './pages/Notfound/notfound'
import Impressum from './pages/Impressum/impressum'
import Footer from './components/footer'
import AddProfile from "./pages/Profile/addProfile";
import Login from "./pages/Login/login";
import {getCurrentUser, logout} from "./services/apiService"
// -- Component Styles
import './assets/css/style.css'



function App() {
//  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    AOS.init()
    //   const user = getCurrentUser();
    //
    //   if (user) {
    //     setCurrentUser(user);
    //   }
    // }, []
  });


  return (
    <div className="App">
      <Routes>
        <Route path="/jumbles/edit/:jumbleId" element={<EditJumble />} />
        <Route path="/jumbles/:jumbleId" element={<Jumble />} />
        <Route path="/jumbles/new" element={<AddJumble />} />
        <Route path="/jumbles/getall" element={<AllJumbles />} />
        <Route path="/categories/:categoryId" element={<Category />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/logout" element={<Logout />} />
        {/*//current userID??*/}
        <Route path="/user/edit/:id" element={<EditProfile />} />
        <Route path="/user/new" element={<AddProfile />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Start />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  )
}

//https://github.com/flatlogic/sofia-react-template/blob/master/src/components/Layout/Layout.js
// App.propTypes = {
//   navbarOpened: PropTypes.bool,
//   dispatch: PropTypes.func.isRequired,
// }
// function mapStateToProps(store) {
//   return {
//     sidebarOpened: store.navigation.sidebarOpened,
//   };
// }

// export default withRouter(connect(mapStateToProps)(Layout));

export default App
