import React from 'react'
import NavBar from '../../components/navbar'

const Profile = () => {
  return (
    <React.Fragment>
      <NavBar />
      <section className="h-100">
        <div className="container h-100">
          <div className="row">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <div className="col-6">
                <img
                  className="rounded-circle m-3 float-end"
                  src="https://images.unsplash.com/photo-1542596594-649edbc13630?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
                  width="150"
                />
              </div>
              <h1 className="card-title text-center pt-3 ">Kleiderklara42</h1>
              <div className="col-6 align-self-center ">
                <div className="card ">
                  <div className="card-body">
                    <p className="m-0 py-3 text-muted">
                      Hallo Ihr Lieben! Ich mache regelmäßig Flohmärkte mit,
                      also kommt vorbei! Pieces from all over the world - picked
                      and cared with love for you. ♥️
                    </p>
                    <button
                      class="btn btn-outline-dark m-3 float-end"
                      type="button"
                      data-toggle="tooltip"
                      title="Edit"
                    >
                      <i class="fa fa-user-edit"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Profile
