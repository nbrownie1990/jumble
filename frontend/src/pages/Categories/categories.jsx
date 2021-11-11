import React from 'react'
import NavBar from '../../components/navbar'
import CategoryGroup from '../../components/categoryGroup'
import JumbleList from '../../components/jumbleList'
import { getJumbles } from '../../services/jumbleService'
import { getCategories } from '../../services/categoryService'

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

        <main className="m-md-5 m-2 mt-5 mb-5">
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
              jumbles={filtered}
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
//const CategoryWithParams = props => <Category {...props} params={useParams()} />

export default Categories
