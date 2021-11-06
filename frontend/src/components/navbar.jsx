import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.listener = null
    this.state = {
      status: 'top',
    }
  }

  componentDidMount() {
    this.listener = document.addEventListener('scroll', e => {
      let scrolled = document.scrollingElement.scrollTop

      if (scrolled >= 120) {
        if (this.state.status !== '') {
          this.setState({ status: '' })
        }
      } else {
        if (this.state.status !== 'top') {
          this.setState({ status: 'top' })
        }
      }
    })
  }

  componentDidUpdate() {
    document.removeEventListener('scroll', this.listener)
  }

  render() {
    return (
      <Navbar
        style={{
          backgroundColor: this.state.status === 'top' ? '' : 'blue',
        }}
        collapseOnSelect
        fixed="top"
        expand="sm"
        variant="dark"
      >
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
}

export default NavBar
