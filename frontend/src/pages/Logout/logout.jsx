import React from 'react'
import { Link } from 'react-router-dom'

const Logout = () => {
  return (
    <main className="d-flex m-5 text-center text-primary min-vh-100">
      <section className="container w-100 p-3 flex-column align-self-center">
        <h1>Logout</h1>
        <h2>You are successfully logged-out.</h2>
        <h3>Come back soon! </h3>
        <h6>
          Or maybe now? <Link to="/login">Login</Link>
        </h6>
      </section>
    </main>
  )
}

export default Logout
