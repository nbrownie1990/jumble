import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Star from '../../components/rating'
import Map from '../../components/map'
import Navbar from '../../components/navbar'
import Rezension from '../../components/rezension'


export default function Jumble() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [jumble, setJumble] = useState([]);
  let { jumbleId } = useParams();

  useEffect(() => {
    console.log(jumbleId)
    setLoading(true);
    fetch(`/api/jumbles/${jumbleId}`)
        .then((res) => res.json())
        .then((data) => {
          setJumble(data)
          console.log(data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
  }, [jumbleId]);

  if (loading) {
    return <p>Data is loading...</p>;
  }

    return (
          <React.Fragment>
            <Navbar/>
            <main className="m-md-5 mt-5 mb-5">
              <section className="container w-100 h-100 mt-5">
                <div className="container">
                  <div className="row " key={jumble.jumbleId}>
                    <div className="col-sm-12">
                      <h1 className="display-1 fs-md-5 fs-lg-6 fs-xl-8 text-light">
                        {jumble.jumbleName}
                           <span>
                    <Link
                        to={`/jumbles/new`}
                        className="btn "
                        type="button"
                        // onClick={() => handleNewJumble(jumble.jumbleId)}
                        data-toggle="tooltip"
                        title="Edit"
                    >
                      <i className="fas fa-pen ps-2 pb-1"> </i>
                    </Link>
                          </span>
                      </h1>
                      <div className="row ">
                        <div className="col-sm-6 align-self-center">
                          <img
                              className="rounded-circle jumble-img"
                              src={jumble.jumbleImage}
                              alt="This is a jumble"
                          />
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