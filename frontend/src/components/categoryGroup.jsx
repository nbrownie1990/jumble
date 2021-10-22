import React from 'react'
import { Link } from 'react-router-dom'

const CategoryGroup = props => {
  const { items, selectedItem, onItemSelect } = props

  return (
    <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3  justify-content-center">
      {items.map(item => (
        <div key={item._id} className="col mb-5">
          <div className="card h-100">
            <img
              className="card-img-top"
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="..."
            />
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">{item.name}</h5>
                {item.description}
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <Link
                  to={`/categories/category`}
                  onClick={() => onItemSelect(item)}
                  className="btn btn-primary mt-auto"
                >
                  Mehr
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoryGroup
