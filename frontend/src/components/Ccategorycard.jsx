import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CategoryCard extends React.Component {
  render() {
    return (
      <div className="col mb-5">
        <div className="card h-100">
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">Special Item</h5>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
              consequatur?
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-primary mt-auto" href="#">
                Mehr
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CategoryCard
