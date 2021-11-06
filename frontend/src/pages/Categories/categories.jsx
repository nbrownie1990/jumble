import React from 'react'
import NavBar from '../../components/navbar'
import CategoryGroup from '../../components/categoryGroup'
import JumbleList from '../../components/jumbleList'
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

    return (
      <React.Fragment>
        <NavBar />
        {/* <Map /> */}
        <main className="m-5 mb-5">
          <section className="container w-100 h-100 px-4 px-lg-5 mt-5">
            <CategoryGroup
              items={this.state.categories}
              selectedItem={this.state.selectedCategory}
              onItemSelect={this.handleCategorySelect}
            />{' '}
          </section>
          <section className="card container px-4 px-lg-5 mt-5">
            <p className="m-2">
              Showing {filtered.length} Jumbles in the database.{' '}
            </p>
            <JumbleList
              jumbles={this.state.jumbles}
              selectedJumble={this.state.selectedJumble}
              onJumbleSelect={this.handleJumbleSelect}
              jumblesCount={filtered.length}
            />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default Categories
