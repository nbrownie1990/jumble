import React, { Component } from 'react'
import Star from '../components/common/rating'
import '../assets/css/style.css'

class Rezension extends React.Component {
  render() {
    return (
      <div className="rez container">
        <div className="chat">
          <div className="mine messages">
            <div className=" message last row">
              <div className="col-6">
                <img
                  className="rounded-circle mt-5"
                  src="https://i.imgur.com/O1RmJXT.jpg"
                  width="50"
                />
              </div>
              <div className="col-12">
                Macht Spaß! <Star />
              </div>
              <div className="col-12">
                Verkaufe hier einmal im Monat meine Klamotten und es lohnt sich!
              </div>
            </div>
          </div>
        </div>
        <div className="yours messages">
          <div className="message last row">
            <div className="col-6">
              <img
                className="rounded-circle mt-5"
                src="https://images.unsplash.com/photo-1542596594-649edbc13630?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
                width="50"
              />
            </div>
            <div className="col-12">
              Macht Spaß! <Star />
            </div>
            <div className="col-12">Sehr gute Auswahl an tollen Sachen.</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Rezension
