import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from "./starRating";

const JumbleList = props => {
    const { items, onItemSelected} = props

  return (
      <div className="container">
          {items.map(item => (
              <div key={item.jumbleId} className="card mb-3">
          <div className="row no-gutters">
              <div className="col-md-4 align-self-center">
               <img src={item.jumbleImage} className="card-img" alt="This is a jumble-place" />
              </div>
              <div className="col-md-8">
                  <div className="card-body">
                      <h5 className="card-title">{item.jumbleName}</h5>
                      <div className="d-none d-sm-block">
                          <StarRating
                              className="m-auto"
                              ratingValue="3"/>
                      </div>
                      <p className="card-text" key={item.address?.addressId}>
                          {item.address?.addressStreet} {' '}
                          {item.address?.addressNumber}
                          <br/>
                          {item.address?.addressZip}{' '}
                          {item.address?.addressCity}{' '}
                      </p>
                      <p className="card-text">
                          <Link
                              to={`/jumbles/${item.jumbleId}`}
                              onClick={() => onItemSelected(item)}
                              className="btn btn-primary mt-auto"
                          >
                              Details
                          </Link>
                      </p>
                  </div>
              </div>
          </div>
      </div>
          ))}
      </div>
  )
}

export default JumbleList
