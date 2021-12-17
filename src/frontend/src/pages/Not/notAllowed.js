import React from 'react'
import { Link } from 'react-router-dom'

const NotAllowed = () => {
  return (
    <main className="d-flex m-md-5 mt-5 mb-5 min-vh-100">
      <section className="container w-100 p-3 flex-column align-self-center">
        <div className="d-flex h-100 w-100 text-center text-white  ">
          <div className="cover-container align-self-center">
            <h1>Not Allowed</h1>
            <p>
              You are not logged in and can't access this page.
            </p>
            <div className="form-group m-0">
              <Link
                to={`/login`}
                type="button"
                className="btn btn-primary btn-block"
              >
                Go to login
              </Link>
            </div>
            <br />
            <br />
          </div>
        </div>
      </section>
    </main>
  )
}

export default NotAllowed
