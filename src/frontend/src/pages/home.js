import React from 'react'
import Navbar from '../components/navbar'
import MapComponent from '../components/mapComponent'
import SearchBar from '../components/searchBar'

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="d-flex text-center text-white m-md-5 mt-5 mb-5">
        <div className="container w-100 h-100 p-3 flex-column ">
          <div className="px-3 mt-5">
            <h1>Jumble - the right place for your stuff</h1>
            <p className="lead">
              Endlich wieder Platz in den Regalen - Finde einen besseren Platz
              für dein Ausrangiertes und tue dabei etwas Gutes! Food-Sharing,
              Flea Markets, Clothing Donations & Second-Hand in deiner Nähe!
            </p>
          </div>
          <MapComponent />
          <div className="card">
            <SearchBar />
            <div className="sidebar scroll-list card-body p-4 text-start text-black">
              <div className="heading text-black">
                <h1>Jumbles:</h1>
              </div>
              <div id="listings" className="listings"></div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}

export default Home
