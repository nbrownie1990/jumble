import React, { Component } from 'react'
import Star from '../../components/common/rating'
import MapComponent from '../../components/mapcomponent'
import NavBar from '../../components/navbar'

class Category extends React.Component {
  handleRating = () => {
    console.log('Click rated')
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />

        <MapComponent />
      </React.Fragment>
    )
  }
}

export default Category
