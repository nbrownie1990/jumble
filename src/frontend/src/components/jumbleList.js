import React, { useState, useEffect } from 'react'
import Star from './rating'
import { Link } from 'react-router-dom'

function JumbleList({onJumbleSelect}) {
    const [jumbles, setJumbles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        fetch('/api/jumbles/getall')
            .then((res) => res.json())
            .then((data) => {
                setJumbles(data)
                console.log(data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Data is loading...</p>;
    }

    if (error || !Array.isArray(jumbles)) {
        return <p>There was an error loading your data!</p>;
    }

  return (
    <div className="container">
      {jumbles.map((jumble) => (
        <div key={jumble.jumbleId} className="card m-2">
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <h5 className="text-primary text-start align-self-start">
                  {jumble.jumbleName}
                </h5>
                {/*<p className="m-0 py-2 text-muted text-start">*/}
                {/*  {jumble.jumbleAddress}*/}
                {/*</p>*/}
              </div>
              <div className="col-6 text-end">
                 <Star />
                      <Link
                        to={`/jumbles/${jumble.jumbleId}`}
                        onClick={() => onJumbleSelect(jumble)}
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
