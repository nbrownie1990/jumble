import './custom.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Route, Switch, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Header from './components/header'
import Home from './components/home'
import NewPost from './components/newpost'
import NavBar from './components/navbar'
import Footer from './components/footer'
import Jumbles from './components/jumbles'
import Missing from './components/missing'
import About from './components/about'

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
        <Route path="/jumbles">
          <Jumbles />
        </Route>
        <Route path="/post">
          <NewPost />
        </Route>
        <Route path="/about" component={About} />
        <Missing path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
