import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (

    <main className="d-flex text-center text-white m-md-5 mt-5 mb-5 min-vh-100"
          style={
      {backgroundImage: "url(" + "https://firebasestorage.googleapis.com/v0/b/jumble-113b5.appspot.com/o/footer%2Fabstractjumble-sm.webp?alt=media&token=d3783375-0e03-47cd-9c93-7100b4185f25" + ")",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat"}}>
      <section className="container w-100 p-3 flex-column align-self-center">
        <div className="px-3 ">
          <h1>Jumble - the right place for your stuff</h1>
          <p className="lead">
            Endlich wieder Platz in den Regalen - Finde einen besseren Platz für
            dein Ausrangiertes und tue dabei etwas Gutes! Food-Sharing, Flea
            Markets, Clothing Donations & Second-Hand in deiner Nähe!
          </p>
          <p className="lead">
            <Link className="btn btn-lg btn-primary fw-bold" to="/signup">
              Sign up
            </Link>
          </p>{' '}
        </div>
      </section>
    </main>
  )
}

export default Start
