import React from 'react'
import NavBar from '../../components/navbar'
const Jumble = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className="px-3 m-5">
        <p className="lead">
          <a
            href="https://google.com"
            className="btn btn-lg btn-secondary fw-bold"
          >
            Learn more
          </a>
        </p>
        <button className="btn btn-danger"> Test </button>
        <div
          className="alert alert-primary shadow-lg"
          role="alert"
          data-aos="fade-up"
        ></div>
        <p className="lead ">Make it your own.</p>
      </main>
    </React.Fragment>
  )
}

export default Jumble
