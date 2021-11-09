import React from 'react'
import NavBar from '../../components/navbar'
import Star from '../../components/rating'
import { Link } from 'react-router-dom'

import TextArea from '../../components/textArea'
import JumbleForm from '../../components/jumbleForm'

const AddJumble = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className="m-md-5 m-2 mt-5 mb-5">
        <section className="container w-100 h-100 px-lg-5 mt-5">
          <div className="container rounded bg-white p-md-5">
            <div className="row">
              <div className="col-md-6 border-right">
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
              <div className="col-md-6 border-right">
                <div className="p-md-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="text-right">Erstelle ein Jumble</h2>
                  </div>
                  <JumbleForm />
                </div>
              </div>

              <div className="mt-2 mt-md-5 text-center">
                <Link
                  to={`/home`}
                  className="btn btn-primary profile-button mb-5 m-3"
                  type="button"
                >
                  <i class="fas fa-save"></i> Save Jumble
                </Link>
                <Link
                  to={`/user/edit`}
                  className="btn btn-warning mb-5 m-3"
                  type="button"
                  data-toggle="tooltip"
                  title="Delete Jumble"
                >
                  <i class="fas fa-trash"></i> Delete Jumble
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}

export default AddJumble
