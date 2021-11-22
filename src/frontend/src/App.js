// -- React and related libs
import React, { useEffect } from 'react'
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
import Login from './pages/Login/login'
import Forgot from './pages/Login/forgot'
import Reset from './pages/Login/reset'
import Profile from './pages/Profile/profile'
import Logout from './pages/Logout/logout'
import SignUp from './pages/SignUp/sign-up'
import Notfound from './pages/Notfound/notfound'
import Impressum from './pages/Impressum/impressum'
import Footer from './components/footer'
// -- Component Styles
import './assets/css/style.css'
import JumbleList from "./components/jumbleList";

function App() {
  useEffect(() => {
    AOS.init()
  })

  return (
    <div className="App">
      <Routes>
        <Route path="/jumbles/edit/:jumbleId" element={<EditJumble />} />
        <Route path="/jumbles/:jumbleId" element={<Jumble />} />
        <Route path="/jumbles/new" element={<AddJumble />} />
        <Route path="/jumbles/getall" element={<JumbleList />} />
        <Route path="/categories/:categoryId" element={<Category />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/user/edit" element={<EditProfile />} />
        <Route path="/user" element={<Profile />} />
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
