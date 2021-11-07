import React, { Component } from 'react'
import Star from '../../components/rating'
import Map from '../../components/map'
import NavBar from '../../components/navbar'
import Rezension from '../../components/rezension'

class Jumble extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="m-5 mb-5">
          <section className="container w-100 h-100 px-4 px-lg-5 mt-5">
            <div class="container m-5">
              <div class="row ">
                <div class="col-6 "></div>
                <div class="col-6">
                  <h1 class="display-1 fs-md-5 fs-lg-6 fs-xl-8 text-light">
                    Flohschanze
                  </h1>
                  <Star />
                  <p class="text-800 mb-5 fs-4">
                    Adresse: Neuer Kamp 30, 20357 Hamburg
                    <br />
                    Termine: tt.mm.jjjj
                    <br />
                    Öffnungszeiten: 9- 16 Uhr
                    <br />
                    Website: www.flohmarkt.de
                    <br />
                  </p>
                </div>
                <div className="col-6">
                  <img
                    className="card-img-top mb-5 -md-0 mt-2"
                    src="https://dummyimage.com/400x500/dee2e6/6c757d.jpg"
                    alt="This is a jumble"
                  />
                </div>
                <div className="col-6">
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
