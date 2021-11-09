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
import AddJumble from './pages/AddJumble/add-jumble'
import EditProfile from './pages/Profile/edit-profile'

import Category from './pages/Category/category'
import Categories from './pages/Categories/categories'
import Login from './pages/Login/login'
import Forgot from './pages/Login/forgot'
import Reset from './pages/Login/reset'
import Profile from './pages/Profile/profile'
import Logout from './pages/Logout/logout'
import SignUp from './pages/SignUp/sign-up'
import NotFound from './pages/Notfound/notfound'
import Impressum from './pages/Impressum/impressum'
import Footer from './components/footer'

// -- Component Styles
import './assets/css/style.css'

function App() {
  useEffect(() => {
    AOS.init()
  })
  return (
    <div className="App">
      <Routes>
        <Route path="/jumble/edit" element={<AddJumble />} />
        <Route path="/categories/category/:id" element={<Jumble />} />
        <Route path="/categories/category" element={<Category />} />
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
        <Route path="*" element={<NotFound />} />
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
