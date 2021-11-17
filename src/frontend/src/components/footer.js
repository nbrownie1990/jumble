import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer({}) {
  return (
    <footer>
      <div className="svg-wrapper">
        <p>© 2021 All rights reserved.</p>
        <br />
        <Link to="/impressum">Impressum</Link>
      </div>
    </footer>
  )
}
