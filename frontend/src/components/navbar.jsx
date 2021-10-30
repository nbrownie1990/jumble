import React, { Component, useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
class NavBar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect fixed="top" expand="sm" variant="dark">
        <Container className="container-fluid">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link className="navbar-brand " to="/home">
                Jumble
              </Nav.Link>

              <Nav.Link className="nav-link" to="/home">
                Home
              </Nav.Link>

              <Nav.Link className="nav-link" to="/categories">
                Categories
              </Nav.Link>

              <Nav.Link className="nav-link" to="/jumbleadd">
                Add Jumble
              </Nav.Link>

              <Nav.Link className="nav-link" to="/profile">
                Profile
              </Nav.Link>

              <Nav.Link className="nav-link" to="/logout">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavBar
