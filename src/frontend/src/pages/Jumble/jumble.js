import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Star from '../../components/rating'
import Navbar from '../../components/navbar'
import Rezension from '../../components/rezension'
import {getJumbleById} from "../../services/apiService";
import {useParams} from "react-router";
import TextField from "../../components/textField";

function Jumble() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [address] = useState({})
  const [jumble, setJumble]= useState([]);
  let { jumbleId } = useParams();



  useEffect(() => {
    setLoading(true);
    getJumbleById(jumbleId)
        .then(jumble => setJumble(jumble))
        .catch(error => setError(error))
        .finally(() => setLoading(false))
  },[jumbleId])


  console.log(jumble.address?.addressStreet)


  //console.log(jumble.address[0])
 // console.log(jumble.address[0].main)


  const addressToString = address => {
    return(
        jumble.address?.addressStreet +
        ' ' +
        jumble.address?.addressNumber +
        ' ' +
        jumble.address?.addressZip +
        ' ' +
        jumble.address?.addressCity
    )
  }
  return (
          <React.Fragment>
            <Navbar/>
            <main className="m-md-5 mt-5 mb-5">
              <section className="container w-100 h-100 mt-5">
                <div className="container">
                  { loading &&  <p>Data is loading...</p>}
                  { error && <p>There was an error loading your data!</p> }
                  <div key={jumble.jumbleId} className="row ">
                    <div className="col-sm-12">
                      <h1 className="display-1 fs-md-5 fs-lg-6 fs-xl-8 text-light">
                        {jumble.jumbleName}
                      </h1>
                      <div className="row ">
                        <div className="col-sm-6 align-self-center img-wrapper mt-5">
                          <img
                              className="rounded-circle jumble-img"
                              src={jumble.jumbleImage}
                              alt="This is a jumble"
                          />
                          <Link
                              to={`/jumbles/edit/${jumbleId}`}
                              className="btn edit-btn"
                              type="button"
                              data-toggle="tooltip"
                              title="Edit"
                          >
                            <i className="fas fa-pen ps-2 pb-1"></i>
                          </Link>
                        </div>

                        {/*<div className="col-sm-6 mt-2">*/}
                        {/*  <Map/>*/}
                        {/*</div>*/}

                        <div className="col-sm-6">
                          Bewertung: <Star/>
                          <p className="lead mt-2">
                            <strong>Beschreibung: </strong>
                            {jumble.jumbleText}
                          </p>
                          <TextField
                              disabled={true}
                              key={jumble.address?.addressId}
                              value={addressToString(address)}
                              readOnly={true}
                          />
                        </div>
                    <div className="col-sm-12">
                      <h4 className="display-6 fw-bolder mt-2">Erfahrungsberichte</h4>
                      <p className="lead">
                        Hier findest du einige Rezensionen zu diesem Jumble. Erzähl
                        auch du gerne von deinen Erfahrungen!
                      </p>
                      <Rezension/>
                    </div>
                      </div>
                    </div>
                </div>
                </div>
              </section>
            </main>
          </React.Fragment>
      )
}
export default Jumble
