import React from 'react'
import { Link } from 'react-router-dom'
import JumbleList from '../../components/jumbleList'

const NotFound = () => {
  return (
    <main className="d-flex m-md-5 mt-5 mb-5 min-vh-100">
      <section className="container w-100 p-3 flex-column align-self-center">
        <div className="d-flex h-100 w-100 text-center text-white  ">
          <div className="cover-container align-self-center">
            <h1>Not Found</h1>
            <JumbleList />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
              architecto similique facilis amet eos necessitatibus enim, sed
              ipsum vitae temporibus ipsa fugiat expedita exercitationem
              corporis?
            </p>
            <div className="form-group m-0">
              <Link
                to={`/home`}
                type="button"
                className="btn btn-primary btn-block"
              >
                Go Back
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

export default NotFound
