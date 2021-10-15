import React, { Component } from 'react'
import Star from './common/rating'

class Jumbles extends React.Component {
  handleRating = () => {
    console.log('Click rated')
  }

  render() {
    return (
      <div>
        <h2>Jumbles Component</h2>
        <Star />
      </div>
    )
  }
}

export default Jumbles
