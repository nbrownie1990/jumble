import React from 'react'
import NavBar from '../../components/navbar'
import { Link } from 'react-router-dom'
const Profile = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className="m-md-5 mt-5 mb-5">
        <section className="container w-100 h-100">
          <div className="container">
            <div className="row">
              <div className="d-flex flex-column align-items-center text-center">
                <div className="col-12 mt-5 ">
                  <img
                    className="rounded-circle user-img "
                    src="https://images.unsplash.com/photo-1542596594-649edbc13630?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
                    alt="Profile"
                  />
                </div>
                <h1 className="card-title text-center pt-3 ">Kleiderklara42</h1>
                <div className="col-sm-8 align-self-center ">
                  <div className="card ">
                    <div className="card-body">
                      <p className="m-0 py-2 text-muted ">
                        Hallo Ihr Lieben! Ich mache regelmäßig Flohmärkte mit,
                        also kommt vorbei! Pieces from all over the world -
                        picked and cared with love for you. ♥️
                      </p>
                      <Link
                        to={`/user/edit`}
                        className="btn btn-outline-dark m-3 float-end"
                        type="button"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        <i className="fa fa-user-edit"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}

export default Profile
