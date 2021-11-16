import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

import Star from '../../components/rating'
import Map from '../../components/map'
import NavBar from '../../components/navbar'
import Rezension from '../../components/rezension'
import {getAllJumbles, getJumbleById} from '../../services/apiService'
import TextArea from "../../components/textArea";

export default function Jumble() {
  const navigate = useNavigate()
  const [error, setError] = useState()
  const [jumble, setJumble] = useState([])
  const [fetching, setFetching] = useState(true);
  const { id } = useParams()

  const fetchJumble = jumbleId =>
    getJumbleById(id)
      .then(res => res.json())
      .then(data => {
            console.log(data);
            setJumble(data);
      }).catch(error => {
      console.log(error.response)
      error.response.json().then(response => {
        console.log(response);
        alert("There was an issue 😰");
      })
       //   .finally(() => setFetching(false))
    });

      useEffect(() => {
        console.log('component is mounted')
        console.log(JSON.stringify(jumble, null, 2))
        fetchJumble()
      }, [])

      return (
          <React.Fragment>
            <NavBar/>
            <main className="m-md-5 mt-5 mb-5">
              <section className="container w-100 h-100 mt-5">
                <div className="container">
                  <div className="row ">
                    <div className="col-sm-12">
                      <h1 className="display-1 fs-md-5 fs-lg-6 fs-xl-8 text-light">
                        Flohschanze
                        <span>
                    <Link
                        to={`/jumbles/edit`}
                        className="btn "
                        type="button"
                        // onClick={() => handleEditJumble(jumble.id)}
                        data-toggle="tooltip"
                        title="Edit"
                    >
                      <i className="fas fa-pen ps-2 pb-1"> </i>
                    </Link>
                  </span>
                      </h1>
                      <div className="row ">
                        <div className="col-sm-6">
                          <img
                              className="rounded-circle jumble-img"
                              src="https://www.deutschlandmalanders.com/wp-content/uploads/2020/10/Flohschanze-Flohmarkt-Schanzenviertel-Hamburg-1.jpg"
                              alt="This is a jumble"
                          />
                        </div>

                        <div className="col-sm-6">
                          Bewertung: <Star/>
                          <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                              <th>Jumble Name</th>
                              <th>Jumble Address</th>
                              <th>Jumble Image</th>
                              <th>Jumble Image</th>
                              <th>Jumble Image</th>
                              <th>Jumble Image</th>
                              <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {jumble.map(jumble => (
                                <React.Fragment key={jumble.id}>
                                  <tr>
                                    <td>{jumble.name}</td>
                                    <td>{jumble.category}</td>
                                    <td>{jumble.address}</td>
                                    <td>{jumble.rating}</td>
                                    <td>{jumble.time}</td>
                                    <td>{jumble.website}</td>
                                    <td>{jumble.date}</td>
                                  </tr>
                                </React.Fragment>
                            ))}
                            </tbody>
                          </table>
                          <TextArea
                              //disabled={true}
                              //key={jumble.id}
                              //name={jumble.name}
                              //value={jumbleToString(jumble.name)}
                              //readOnly={true}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 mt-2">
                      <Map/>

                      <p className="lead mt-5">
                        <strong>Beschreibung: </strong>
                        Jeden Samstag ab 08:00 Uhr wird das Gelände vor der
                        Rinderschlachthalle zum Kult-Flohmarkt. Sehr gut zu erreichen
                        am U-Bahnhof Feldstraße lädt dieser Flohmarkt zum trödeln und
                        feilschen ein. Bei diesem Flohmarkt ist der Trödelcharakter
                        hoch.
                      </p>
                    </div>

                    <div className="col-sm-6">
                      <h4 className="display-6 fw-bolder mt-2">Erfahrungsberichte</h4>
                      <p className="lead">
                        Hier findest du einige Rezensionen zu diesem Jumble. Erzähl
                        auch du gerne von deinen Erfahrungen!
                      </p>
                      <Rezension/>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </React.Fragment>
      )
}