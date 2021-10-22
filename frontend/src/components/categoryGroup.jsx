import React from 'react'

const CategoryGroup = props => {
  const { items, selectedItem, onItemSelect } = props

  return (
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
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
                <a
                  onClick={() => onItemSelect(item)}
                  className="btn btn-primary mt-auto"
                  href="#"
                >
                  Mehr
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoryGroup
