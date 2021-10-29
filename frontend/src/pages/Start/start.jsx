import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <React.Fragment>
      <main
        id="start-page"
        class="d-flex h-100 text-center text-white align-self-center"
      >
        <div className="cover-container d-flex w-100 h-100 p-3 flex-column">
          <div className="px-3">
            <h1>Jumble - the right place for your stuff</h1>
            <p className="lead">
              Endlich wieder Platz in den Regalen - Finde einen besseren Platz
              für dein Ausrangiertes und tue dabei etwas Gutes! Food-Sharing,
              Flea Markets, Clothing Donations & Second-Hand in deiner Nähe!
            </p>
            <p className="lead">
              <Link className="btn btn-lg btn-primary fw-bold" to="/signup">
                Sign up
              </Link>
            </p>{' '}
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}

export default Start
