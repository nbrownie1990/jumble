import React from 'react'
import { Link } from 'react-router-dom'

const Logout = () => {
  return (
    <React.Fragment>
      <header />
      <main className="m-2 text-center text-primary">
        <h1>Logout</h1>
        <h2>You are successfully logged-out.</h2>
        <h3>Come back soon! </h3>
        <h6>
          Maybe now? <Link to="/login">Login</Link>
        </h6>
      </main>
    </React.Fragment>
  )
}

export default Logout
