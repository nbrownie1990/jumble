import React from 'react'
import NavBar from '../../components/navbar'

const AddJumble = () => {
  return (
    <React.Fragment>
      <NavBar />

      <div className="container">
        <div class="card bg-light">
          <div className="card-heading">Add Jumble</div>
          <div className="card-body">
            <div class="product-content product-wrap">
              <div class="row">
                <div class="col-md-5 col-sm-12 col-xs-12">
                  <img
                    src="https://via.placeholder.com/194x228/87CEFA"
                    class="img-responsive"
                  />
                </div>
                <div class="col-md-7 col-sm-12 col-xs-12">
                  <div class="product-detail">
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
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddJumble
