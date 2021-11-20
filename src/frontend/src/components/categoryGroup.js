import React from 'react'
import { Link } from 'react-router-dom'

const CategoryGroup = props => {
  const { items, onItemSelected } = props

  return (
    <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3  justify-content-center">
      {items.map(item => (
        <div key={item.categoryId} className="col mb-5">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={item.categoryImage}
              alt="..."
            />
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">{item.categoryName}</h5>
                {item.categoryText}
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <Link
                  to={`/categories/${item.categoryId}`}
                  onClick={() => onItemSelected(item)}
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
