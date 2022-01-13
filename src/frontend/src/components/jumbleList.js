import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from "./starRating";

const JumbleList = props => {
    const { items, onItemSelected} = props

  return (
             <div className="container">
                 {items.map(item => (
                 <div key={item.jumbleId} className="card m-2">
                 <div className="card-body">
                 <div className="row">
                     <div className="col-3 d-flex align-items-center d-none d-sm-block">
                         <img src={item.jumbleImage} className="img-fluid rounded-start" alt="This is a jumble image" />
                     </div>
                      <div className="col-4 p-0">
                         <h5 className="text-primary text-start align-self-start mb-0">
                            {item.jumbleName}
                         </h5>
                    <p className="m-0 py-2 text-muted text-start" key={item.address?.addressId}>
                        {item.address?.addressStreet} {' '}
                         {item.address?.addressNumber}
                        <br/>
                         {item.address?.addressZip}{' '}
                         {item.address?.addressCity}{' '}
                    </p>
                </div>
                <div className="col-5 text-end">
                 <StarRating
                 className="m-auto d-none d-sm-block"
                 ratingValue="3"/>
                      <Link
                        to={`/jumbles/${item.jumbleId}`}
                        onClick={() => onItemSelected(item)}
                        className="btn btn-primary mt-auto"
                      >
                        Details
                      </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default JumbleList

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
