import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>© 2021 All rights reserved.</p>
        <br />
        <Link to="/impressum">Impressum</Link>
      </footer>
    )
  }
}

export default Footer
