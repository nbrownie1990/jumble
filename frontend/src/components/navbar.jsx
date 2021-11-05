import React, { Component, useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavBar = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
      console.log('Testtest123')
    }
  }, [])

  console.log(offset)

  return (
    <Navbar collapseOnSelect fixed="top" expand="sm" variant="dark">
      <Container className="container-fluid mt-3">
        <Navbar.Brand href="/home">Jumble</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end w-100 text-end mr-2">
            <Nav.Link href="/home">Home</Nav.Link>

            <Nav.Link href="/categories">Categories</Nav.Link>

            <Nav.Link href="/jumbleadd">Add Jumble</Nav.Link>

            <Nav.Link href="/profile">Profile</Nav.Link>

            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
