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
              <div className="col-md-4">
               <img src={item.jumbleImage} className="card-img" alt="This is a jumble image" />
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
        //
        //      <div className="container">
        //          {items.map(item => (
        //          <div key={item.jumbleId} className="card m-2">
        //          <div className="card-body">
        //              <div className="row g-0">
        //                  <div className="col-sm-6 col-md-8">
        //                  <div className="d-none d-sm-block">
        //                  <img src={item.jumbleImage} className="img-fluid rounded-start w-50" alt="This is a jumble image" />
        //                  </div>
        //                  <h5 className="text-primary text-start align-self-start mb-0">
        //                     {item.jumbleName}
        //                  </h5>
        //             <p className="m-0 py-2 text-muted text-start" key={item.address?.addressId}>
        //                 {item.address?.addressStreet} {' '}
        //                  {item.address?.addressNumber}
        //                 <br/>
        //                  {item.address?.addressZip}{' '}
        //                  {item.address?.addressCity}{' '}
        //             </p>
        //         </div>
        //              <div className="col-6 col-md-4">
        //                          <div className="col-6 col-md-4 d-none d-sm-block">
        //                          <StarRating
        //                          className="m-auto"
        //                          ratingValue="3"/>
        //                          </div>
        //                      <div className="text-end">
        //                          <Link
        //                              to={`/jumbles/${item.jumbleId}`}
        //                              onClick={() => onItemSelected(item)}
        //                              className="btn btn-primary mt-auto"
        //                          >
        //                              Details
        //                          </Link>
        //                      </div>
        //                      </div>
        //              </div>
        //    </div>
        // </div>


// const JumbleList = props => {
//   const { jumbles, onJumbleSelect } = props

//   return (
//     <div className="container">
//       {jumbles.map(jumble => (
//         <div key={jumble._id} className="card m-2">
//           <div className="card-body">
//             <div className="row">
//               <div className="col-6">
//                 <h5 className="text-primary text-start align-self-start">
//                   {jumble.name}
//                 </h5>
//                 <p className="m-0 py-2 text-muted text-start">
//                   {jumble.address}
//                 </p>
//               </div>
//               <div className="col-6 text-end">
//                 <Star />
//                 <Link
//                   to={`/jumbles/${jumble._id}`}
//                   onClick={() => onJumbleSelect(jumble)}
//                   className="btn btn-primary mt-auto"
//                 >
//                   Details
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default JumbleList
