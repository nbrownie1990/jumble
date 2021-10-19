import React from 'react'
import NavBar from '../../components/navbar'

const EditProfile = () => {
  return (
    <React.Fragment>
      <NavBar />

      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                src="https://i.imgur.com/O1RmJXT.jpg"
                width="90"
              />
              <span className="font-weight-bold">John Doe</span>
              <span className="text-black-50">john_doe12@bbb.com</span>
              <span>United States</span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="text-right">Edit your profile</h6>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    value="John"
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Surname</label>
                  <input
                    type="text"
                    className="form-control"
                    value="Doe"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Headline</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="headline"
                    value="UI/UX Developer"
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Current position</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="headline"
                    value="UI/UX Developer at Boston"
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Education</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="education"
                    value="Boston University"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="country"
                    value="USA"
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">State/Region</label>
                  <input
                    type="text"
                    className="form-control"
                    value="Boston"
                    placeholder="state"
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default EditProfile
