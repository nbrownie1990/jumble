import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import 'font-awesome/css/font-awesome.css'
import './assets/css/style.css'
import App from './App'

import reportWebVitals from './reportWebVitals'
import 'mapbox-gl/dist/mapbox-gl.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
