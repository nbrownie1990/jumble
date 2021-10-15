import React, { useEffect } from 'react'
import './styles/App.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Jumbles from './components/jumbles'
import NavBar from './components/navbar'

function App() {
  useEffect(() => {
    AOS.init()
  })
  return (
    <React.Fragment>
      <NavBar />
      <main className="px-3 m-5">
        <p className="lead">
          <a
            href="http://localhost:3000/"
            className="btn btn-lg btn-secondary fw-bold border-black bg-black"
          >
            Learn more
          </a>
        </p>
        <div
          className="alert alert-primary shadow-lg"
          role="alert"
          data-aos="fade-up"
        >
          <Jumbles />
        </div>
        <p className="lead ">Make it your own.</p>
      </main>
    </React.Fragment>
  )
}

export default App
