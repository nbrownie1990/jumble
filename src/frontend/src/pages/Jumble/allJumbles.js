import React, { useState, useEffect } from 'react'
import {getAllJumbles} from "../../services/apiService";
import JumbleList from "../../components/jumbleList";
import Navbar from '../../components/navbar'


function AllJumbles() {
    const [jumbles, setJumbles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        getAllJumbles()
            .then(jumbles => setJumbles(jumbles))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    },[])

  return (
      <React.Fragment>
        <Navbar />
          <main className="m-md-5 m-2 mt-5 mb-5">
              <section className="container w-100 h-100 px-4 px-lg-5 mt-5">
                  { loading &&  <p>Data is loading...</p>}
                  { error || !Array.isArray(jumbles) && <p>There was an error loading your data!</p> }
             <div className="container">
                 <JumbleList
                     items={jumbles}
                 />
             </div>
              </section>
   </main>
</React.Fragment>
  )
}
export default AllJumbles


// return (
//     <React.Fragment>
//         <Navbar />
//
//         <main className="m-md-5 m-2 mt-5 mb-5">
//             <section className="container w-100 h-100 px-4 px-lg-5 mt-5">
//                 { loading &&  <p>Data is loading...</p>}
//                 { error || !Array.isArray(jumbles) && <p>There was an error loading your data!</p> }
//                 <div className="container">
//                     {jumbles.map((jumble) => (
//                         <div key={jumble.jumbleId} className="card m-2">
//                             <div className="card-body">
//                                 <div className="row">
//                                     <div className="col-6">
//                                         <h5 className="text-primary text-start align-self-start">
//                                             {jumble.jumbleName}
//                                         </h5>
//                                         {/*<p className="m-0 py-2 text-muted text-start">*/}
//                                         {/*  {jumble.jumbleAddress.toString()}*/}
//                                         {/*</p>*/}
//                                     </div>
//                                     <div className="col-6 text-end">
//                                         <Star />
//                                         <Link
//                                             to={`/jumbles/${jumble.jumbleId}`}
//                                             onClick={() => onJumbleSelect(jumble)}
//                                             className="btn btn-primary mt-auto"
//                                         >
//                                             Details
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </main>
//     </React.Fragment>
// )
// }

