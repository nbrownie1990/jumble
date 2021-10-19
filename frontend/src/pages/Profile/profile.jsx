import React from 'react'
import NavBar from '../../components/navbar'

const Profile = () => {
  return (
    <React.Fragment>
      <NavBar />
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-md-center h-100">
            <div className="card-wrapper">
              <div className="text-center">
                <h6 className="card-title pt-3">Kleiderklara42</h6>
                <img className="profile-img" />

                <div className="card">
                  <div className="card-body">
                    <p className="m-0 py-3 text-muted">
                      Hallo Ihr Lieben! Ich mache regelmäßig Flohmärkte mit,
                      also kommt vorbei! Pieces from all over the world - picked
                      and cared with love for you. ♥️
                    </p>
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
