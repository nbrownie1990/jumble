import React, { Component } from 'react'
import Star from '../../components/common/rating'
import NavBar from '../../components/navbar'

class Category extends React.Component {
  handleRating = () => {
    console.log('Click rated')
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div>
          <h2>Jumbles Component</h2>
          <Star />
        </div>
      </React.Fragment>
    )
  }
}

export default Category
