import React, { Component } from 'react'
import NavBar from '../../components/navbar'
import Map from '../../components/map'
import CategoryGroup from '../../components/common/categoryGroup'
import { getJumbles } from '../../services/fakeJumbleService'
import { getCategories } from '../../services/fakeCategoryService'

class Categories extends React.Component {
  state = {
    jumbles: [],
    categories: [],
  }

  componentDidMount() {
    this.setState({ jumbles: getJumbles(), categories: getCategories() })
  }

  handleCategorySelect = category => {
    console.log(category)
  }
  render() {
    const { length: count } = this.state.jumbles
    return (
      <React.Fragment>
        <NavBar />
        <Map />
        <section className="container px-4 px-lg-5 mt-5">
          <CategoryGroup
            items={this.state.categories}
            textProperty="name"
            valueProperty="_id"
            onItemSelect={this.handleCategorySelect}
          />{' '}
        </section>
      </React.Fragment>
    )
  }
}

export default Categories
