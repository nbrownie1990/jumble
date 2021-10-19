import React from 'react'
import NavBar from '../../components/navbar'
import Map from '../../components/map'
import SearchBar from '../../components/searchbar'
// import Map from '../../components/map'

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className="d-flex h-100 text-center text-white">
        <div className="cover-container d-flex w-100 h-100 p-3 flex-column">
          <div className="px-3">
            <h1>Jumble - the right place for your stuff</h1>
            <p className="lead">
              Endlich wieder Platz in den Regalen - Finde einen besseren Platz
              für dein Ausrangiertes und tue dabei etwas Gutes! Food-Sharing,
              Flea Markets, Clothing Donations & Second-Hand in deiner Nähe!
            </p>
            <p className="lead">
              <div className="container-fluid" data-aos="fade-up">
                <Map />

                <div className="card h-100">
                  <SearchBar />
                  <div className="card-body p-4"></div>
                </div>
              </div>
            </p>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}

export default Home
