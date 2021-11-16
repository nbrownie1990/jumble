import React, { useState, useEffect } from 'react'
import Star from './rating'
import { Link } from 'react-router-dom'
import { getAllJumbles } from './tryIt'

function JumbleList() {
  const [jumbles, setJumbles] = useState([])

  const fetchJumbles = () =>
      getAllJumbles()
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setJumbles(data);
          }).catch(error => {
        console.log(error.response)
        error.response.json().then(response => {
          console.log(response);
          alert("There was an issue 😰");
        })
  //          .finally(() => setFetching(false))
      });

  useEffect(() => {
    console.log('component is mounted')
    console.log(JSON.stringify(jumbles, null, 2))
    fetchJumbles()
  }, [])


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
                {/* <Star />
                      <Link
                        to={`/jumbles/${jumble._id}`}
                        onClick={() => onJumbleSelect(jumble)}
                        className="btn btn-primary mt-auto"
                      >
                        Details
                      </Link> */}
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
