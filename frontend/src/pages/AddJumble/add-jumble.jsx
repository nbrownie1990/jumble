import React from 'react'
import NavBar from '../../components/navbar'
import Star from '../../components/rating'
import { Link } from 'react-router-dom'
import TextField from '../../components/textField'
import TextArea from '../../components/textArea'

const AddJumble = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className="m-md-5 m-2 mt-5 mb-5">
        <section className="container w-100 h-100 px-lg-5 mt-5">
          <div className="container rounded bg-white p-md-5">
            <div className="row">
              <div className="col-md-2 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img
                    className="rounded-circle mt-5"
                    src="https://www.deutschlandmalanders.com/wp-content/uploads/2020/10/Flohschanze-Flohmarkt-Schanzenviertel-Hamburg-1.jpg"
                    width="110"
                    alt="This is a jumble"
                  />
                  <Link
                    to={`/jumble/edit`}
                    className="btn"
                    type="button"
                    data-toggle="tooltip"
                    title="Edit"
                  >
                    <i class="fas fa-pen"></i>
                  </Link>
                  <span className="font-weight-bold mt-2 mb-3">
                    Bild des Jumbles
                  </span>
                  <span class="form-text">
                    Jumbles sind Orte für dein Ausrangiertes! Es geht um:
                    Food-Sharing, Flea Markets, Clothing Donations & Second-Hand
                    in deiner Nähe!
                  </span>
                </div>
              </div>
              <div className="col-md-5 border-right">
                <div className="p-md-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="text-right">Erstelle ein Jumble</h2>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12">
                      <label className="labels">Jumble-Name</label>
                      <TextField
                        type="text"
                        placeholder="Jumblename"
                        value="Flohschanze"
                      />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label className="labels">Adresse</label>
                      <TextField
                        type="text"
                        placeholder="Adresse"
                        value=" Neuer Kamp 30, 20357 Hamburg"
                      />
                      <span id="placeHelpInline" class="form-text">
                        Wo befindet sich das Jumble?
                      </span>
                    </div>

                    <div className="col-md-12">
                      <label className="labels">Termine</label>
                      <TextField type="date" placeholder="Termine" />
                      <span id="dateHelpInline" class="form-text">
                        Wann findet das nächste Jumble statt?
                      </span>
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Öffnungszeiten</label>
                      <TextField
                        type="time"
                        placeholder="Öffnungszeiten"
                        value="10-16 Uhr"
                      />
                      <span id="timeHelpInline" class="form-text">
                        Wie sind die Öffnungszeiten des Jumbles?
                      </span>
                    </div>
                    <div className="col-md-12">
                      <label className="labels"> Website</label>
                      <TextField
                        type="url"
                        placeholder="Website"
                        value="www.flohschanze.de"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-5 border-right">
                <div className="p-3 py-5">
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="form-group col-md-12">
                      <label className="labels">Rezension schreiben</label>
                      <TextArea
                        rows="10"
                        placeholder="Wie ist/war es hier?"
                        value="Verkaufe hier einmal im Monat meine Klamotten und es lohnt sich!"
                      />
                    </div>

                    <div className="mt-5 text-center">
                      <Star />
                      <Link
                        to={`/home`}
                        className="btn btn-primary profile-button mt-3"
                        type="button"
                      >
                        Save Jumble
                      </Link>
                    </div>
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

export default AddJumble
