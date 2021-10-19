import React, { Component } from 'react'

class SearchBar extends React.Component {
  render() {
    return (
      <form class="d-flex m-3">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search Adresses or Jumbles"
          aria-label="Search"
        />
        <button class="btn btn-primary" type="submit">
          Search
        </button>
      </form>
    )
  }
}

export default SearchBar
