import React from 'react'
import Star from '../common/rating'

const JumbleList = props => {
  const { jumbles, selectedJumble, onJumbleSelect } = props

  return (
    <div className="container">
      {jumbles.map(jumble => (
        <div key={jumble._id} className="card m-2">
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <h5 className="text-primary text-start align-self-start">
                  {jumble.name}
                </h5>
                <p className="m-0 py-2 text-muted text-start">
                  {jumble.address}
                </p>
              </div>
              <div className="col-6 text-end">
                <Star />
                <a
                  onClick={() => onJumbleSelect(jumble)}
                  className="btn btn-primary mt-auto"
                  href="#"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default JumbleList
