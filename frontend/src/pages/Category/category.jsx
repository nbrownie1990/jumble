import React from 'react'
import NavBar from '../../components/navbar'
import JumbleList from '../../components/jumbleList'
import { getJumbles } from '../../services/jumbleService'
import { getCategories } from '../../services/categoryService'
class Category extends React.Component {
  state = {
    jumbles: [],
    categories: [],
  }

  componentDidMount() {
    console.log(this.props)
    this.setState({
      jumbles: getJumbles(),
      categories: getCategories(),
    })
  }

  handleCategorySelect = category => {
    this.setState({ selectedCategory: category })
  }

  ////////////////////GET PARAMS
  //console.log(this.props) //this.props.match
  //this.props.match.params.id
  /////////////////////////

  // handleJumbleSelect = jumble => {
  //   this.setState({ selectedJumble: jumble })
  // }
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
        <main className="m-md-5 mt-5 mb-5">
          <section className="container w-100 min-vh-100 px-lg-5 mt-5">
            <div className="sidebar scroll-list h-100 card-body p-0 text-start ">
              <div className="heading">
                <h1>Jumbles:</h1>
              </div>
              <p className="m-2">
                Showing {filtered.length} Jumbles in the database.{' '}
              </p>
              <JumbleList
                jumbles={filtered}
                // selectedJumble={this.state.selectedJumble}
                // onJumbleSelect={this.handleJumbleSelect}
                // jumblesCount={filtered.length}
              />
            </div>
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default Category
