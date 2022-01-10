import React, { useState, useEffect } from 'react'
import {getAllJumbles} from "../../services/apiService";
import JumbleList from "../../components/jumbleList";
import Navbar from '../../components/navbar'
import Loading from "../../components/loading";


function AllJumbles() {
    const [jumbles, setJumbles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        getAllJumbles()
            .then(jumbles => setJumbles(jumbles))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    },[])

  return (
      <React.Fragment>
          {loading && <Loading />}
          <Navbar />
          {!loading && (
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
   </main>)}
</React.Fragment>
  )
}
export default AllJumbles

