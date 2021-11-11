import React, { Component } from 'react'
import Star from '../../components/rating'
import Map from '../../components/map'
import NavBar from '../../components/navbar'
import Rezension from '../../components/rezension'

import { Link } from 'react-router-dom'

class Jumble extends Component {
  // { const jumbleToString = jumble => {
  //   return (
  //     jumble.name +
  //     ' ' +
  //     jumble.category +
  //     ', ' +
  //    jumble.date +
  //     ' ' +
  //     jumble.time
  //   )
  // }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="m-md-5 mt-5 mb-5">
          <section className="container w-100 h-100 mt-5">
            <div class="container">
              <div class="row ">
                <div class="col-sm-12">
                  <h1 class="display-1 fs-md-5 fs-lg-6 fs-xl-8 text-light">
                    Flohschanze
                    <span>
                      <Link
                        to={`/categories/category/:id/edit`}
                        className="btn "
                        type="button"
                        // onClick={() => handleEditJumble(jumble.id)}
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        <i class="fas fa-pen ps-2 pb-1"> </i>
                      </Link>
                    </span>
                  </h1>
                  <div class="row ">
                    <div className="col-sm-6">
                      <img
                        className="rounded-circle jumble-img"
                        src="https://www.deutschlandmalanders.com/wp-content/uploads/2020/10/Flohschanze-Flohmarkt-Schanzenviertel-Hamburg-1.jpg"
                        alt="This is a jumble"
                      />
                    </div>

                    <div className="col-sm-6">
                      Bewertung: <Star />
                      <p className="text-300 mb-5 fs-4">
                        Adresse: Neuer Kamp 30, 20357 Hamburg
                        <br />
                        Termine
                        <br />
                        Öffnungszeiten: 9- 16 Uhr
                        <br />
                        Website: www.flohmarkt.de
                        <br />
                        Kategorie: Flea Markets
                      </p>
                      {/* <TextField
                  disabled={true}
                  key={jumble.id}
                  name={`jumble${id}`}
                  value={jumbleToString(jumble)}
                  readOnly={true}
                /> */}
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 mt-2">
                  <Map />

                  <p className="lead mt-5">
                    <strong>Beschreibung: </strong>
                    Jeden Samstag ab 08:00 Uhr wird das Gelände vor der
                    Rinderschlachthalle zum Kult-Flohmarkt. Sehr gut zu
                    erreichen am U-Bahnhof Feldstraße lädt dieser Flohmarkt zum
                    trödeln und feilschen ein. Bei diesem Flohmarkt ist der
                    Trödelcharakter hoch.
                  </p>
                </div>

                <div className="col-sm-6">
                  <h4 className="display-6 fw-bolder mt-2">
                    Erfahrungsberichte
                  </h4>
                  <p className="lead">
                    Hier findest du einige Rezensionen zu diesem Jumble. Erzähl
                    auch du gerne von deinen Erfahrungen!
                  </p>
                  <Rezension />
                </div>
              </div>
            </div>
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default Jumble
