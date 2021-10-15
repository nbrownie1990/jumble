import React, { Component } from 'react'

class NavBar extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top py-4 d-block m-3"
        data-navbar-on-scroll="data-navbar-on-scroll"
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div
            className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
              <li className="nav-item px-2" data-anchor="data-anchor">
                <a
                  className="nav-link fw-medium active"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item px-2" data-anchor="data-anchor">
                <a class="nav-link" href="#aboutUs">
                  About us
                </a>
              </li>
              <li className="nav-item px-2" data-anchor="data-anchor">
                <a className="nav-link" href="#clients">
                  Clients
                </a>
              </li>
              <li className="nav-item px-2" data-anchor="data-anchor">
                <a className="nav-link" href="#faq">
                  Faq
                </a>
              </li>
            </ul>
            <form className="ps-lg-5">
              <a className="btn btn-primary order-1 order-lg-0" href="#!">
                CONTACT US
              </a>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
