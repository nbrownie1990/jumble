import React from 'react'
import NavBar from '../../components/navbar'

const AddJumble = () => {
  return (
    <React.Fragment>
      <NavBar />

      <div class="container bg-gra-01 p-t-180 p-b-100">
        <div class="card bg-light">
          <div classNameName="card card-3">
            <div className="card-heading"></div>
            <div className="card-body">
              <h2 className="title">Add Jumble</h2>
              <form method="POST">
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="text"
                    placeholder="Adresse"
                    name="Adresse"
                  />
                </div>
                <div className="input-group">
                  <div className="rs-select2">
                    <select name="gender">
                      <option disabled="disabled" selected="selected">
                        Category
                      </option>
                      <option>Flea-Market</option>
                      <option>Second-Hand</option>
                      <option>FoodSharing</option>
                    </select>
                    <div className="select-dropdown"></div>
                  </div>
                </div>
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="text"
                    placeholder="Termine"
                    name="Termine"
                  />
                </div>
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="text"
                    placeholder="Öffnungszeiten"
                    name="oeffnungszeiten"
                  />
                </div>
                <div className="p-t-10">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddJumble
