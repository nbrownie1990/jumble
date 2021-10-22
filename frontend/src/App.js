// -- React and related libs
import { Route, Switch, useHistory } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

// -- Third Party Libs
import AOS from 'aos'
import 'aos/dist/aos.css'
import PropTypes from 'prop-types'

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
import Missing from './pages/Missing/missing'
import Impressum from './pages/Impressum/impressum'

// -- Component Styles
import './assets/css/style.css'

function App() {
  useEffect(() => {
    AOS.init()
  })
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Start />{' '}
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/jumble">
          <Jumble />
        </Route>
        <Route path="/jumbleadd">
          <AddJumble />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/forgot">
          <Forgot />
        </Route>
        <Route path="/reset">
          <Reset />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/profileedit">
          <EditProfile />
        </Route>
        <Route path="/impressum" component={Impressum} />
        <Missing path="*" component={Missing} />
      </Switch>
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
