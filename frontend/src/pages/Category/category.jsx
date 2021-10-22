import React, { Component } from 'react'
import NavBar from '../../components/navbar'
class Category extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="sidebar scroll-list card-body p-4 text-start ">
          <div className="heading">
            <h1>Jumbles:</h1>
          </div>
          <div id="listings" className="listings"></div>
        </div>
      </React.Fragment>
    )
  }
}

export default Category
