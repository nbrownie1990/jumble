import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from "./star";

const JumbleList = props => {
    const { items, onItemSelected} = props


  return (
             <div className="container">
                 {items.map(item => (
                 <div key={item.jumbleId} className="card m-2">
                 <div className="card-body">
                 <div className="row">
                      <div className="col-6">
                         <h5 className="text-primary text-start align-self-start">
                            {item.jumbleName}
                         </h5>
                {/*<p className="m-0 py-2 text-muted text-start">*/}
                {/*  {item.jumbleAddress.toString()}*/}
                {/*</p>*/}
                </div>
                <div className="col-6 text-end">
                 <StarRating />
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
