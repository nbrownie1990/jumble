import React from 'react'
import NavBar from '../../components/navbar'
import { Link } from 'react-router-dom'
import ProfileForm from '../../components/profileForm'

const EditProfile = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className="m-md-5 m-3 mt-5 mb-5">
        <section className="container w-100 h-100 p-0 mt-5">
          <div className="container rounded bg-white">
            <div className="row">
              <div className="col-md-2 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img
                    className="rounded-circle p-md-3"
                    src="https://i.imgur.com/O1RmJXT.jpg"
                    width="110"
                    alt="This is a profile"
                  />
                  <Link
                    to={`/user/edit`}
                    className="btn"
                    type="button"
                    data-toggle="tooltip"
                    title="Edit"
                  >
                    <i class="fas fa-pen"></i>
                  </Link>

                  <span className="font-weight-bold">John Doe</span>
                </div>
              </div>
              <ProfileForm />
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}

export default EditProfile
