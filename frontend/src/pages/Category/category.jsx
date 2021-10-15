import React, { Component } from 'react'
import Star from '../../components/common/rating'

class Category extends React.Component {
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

export default Category
