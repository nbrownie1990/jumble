import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark  py-4 d-block m-3">
        <div className="container-fluid">
          <Link class="navbar-brand " to="/home">
            Jumble
          </Link>

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
            className="collapse navbar-collapse mt-4 mt-lg-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
              <li className="nav-item px-2" data-anchor="data-anchor">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item px-2" data-anchor="data-anchor">
                <Link className="nav-link" to="/categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item px-2" data-anchor="data-anchor">
                <Link className="nav-link" to="/jumbleadd">
                  Add Jumble
                </Link>
              </li>
              <li className="nav-item px-2" data-anchor="data-anchor">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
            </ul>
            <form className="ps-lg-5">
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
