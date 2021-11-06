import React from 'react'

class SearchBar extends React.Component {
  render() {
    return (
      <form className="d-flex m-3">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Adresses or Jumbles"
          aria-label="Search"
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
    )
  }
}

export default SearchBar
