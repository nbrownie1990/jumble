import React from 'react'
import Star from '../../components/common/rating'
import NavBar from '../../components/navbar'
const Jumble = () => {
  return (
    <React.Fragment>
      <NavBar />

      <div class="container">
        <div class="row gx-5">
          <div class="col-6">
            <h1 class="display-1 fs-md-5 fs-lg-6 fs-xl-8 text-light">
              Flohschanze
            </h1>
            <h1 class="text-800 mb-5 fs-4">
              Lorem ipsum dolor sit amet.
              <br class="d-none d-xxl-block" />
              Lorem ipsum dolor sit
            </h1>

            <img
              className="card-img-top mb-5 mb-md-0"
              src="https://dummyimage.com/400x500/dee2e6/6c757d.jpg"
              alt="..."
            />
          </div>
          <div className="col-6">
            <h3 className="display-6 fw-bolder"> Shop item template</h3>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Star />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Jumble
