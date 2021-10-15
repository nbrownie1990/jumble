import './custom.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Route, Switch, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Header from './components/header'
import Home from './pages/Home/home'
import NavBar from './components/navbar'
import Footer from './components/footer'
import Jumble from './pages/Jumble/jumble'
import Category from './pages/Category/category'
import Categories from './pages/Categories/categories'
import Login from './pages/Login/login'
import Profile from './pages/Profile/profile'
import Logout from './pages/Logout/logout'
import SignUp from './pages/SignUp/sign-up'
import Missing from './pages/Missing/missing'
import About from './pages/About/about'

function App() {
  useEffect(() => {
    AOS.init()
  })
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />{' '}
        </Route>
        <Route path="/jumble">
          <Jumble />
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
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/about" component={About} />
        <Missing path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
