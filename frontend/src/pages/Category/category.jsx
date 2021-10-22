import React, { Component } from 'react'
import NavBar from '../../components/navbar'
import JumbleList from '../../components/common/jumbleList'
import { getJumbles } from '../../services/fakeJumbleService'
import { getCategories } from '../../services/fakeCategoryService'
class Category extends React.Component {
  state = {
    jumbles: [],
    categories: [],
  }

  componentDidMount() {
    this.setState({ jumbles: getJumbles(), categories: getCategories() })
  }

  handleCategorySelect = category => {
    this.setState({ selectedCategory: category })
  }

  handleJumbleSelect = jumble => {
    this.setState({ selectedJumble: jumble })
  }
  render() {
    const { length: count } = this.state.jumbles
    const { selectedCategory, jumbles: allJumbles } = this.state

    if (count === 0) return <p>There are no jumbles in the database</p>

    const filtered =
      selectedCategory && selectedCategory._id
        ? allJumbles.filter(j => j.category._id === selectedCategory._id)
        : allJumbles

    const jumbles = filtered

    return (
      <React.Fragment>
        <NavBar />
        <div className="sidebar scroll-list card-body p-4 text-start ">
          <div className="heading">
            <h1>Jumbles:</h1>
          </div>
          <JumbleList
            jumbles={jumbles}
            selectedJumble={this.state.selectedJumble}
            onJumbleSelect={this.handleJumbleSelect}
            jumblesCount={filtered.length}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default Category
