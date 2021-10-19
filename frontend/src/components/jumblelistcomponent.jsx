import React from 'react'
import Star from '../components/common/rating'

const JumbleListComponent = () => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <h5 className="text-primary text-start align-self-start">
                Flohschanze
              </h5>
              <p className="m-0 py-2 text-muted text-start">
                Neuer Kamp 30, 20357 Hamburg
              </p>
            </div>
            <div className="col-6">
              <Star />
              <button
                class="btn btn-primary m-1 float-end"
                type="button"
                data-toggle="tooltip"
                title="Details"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default JumbleListComponent
