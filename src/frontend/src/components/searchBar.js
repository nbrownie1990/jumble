import React from 'react'

export default function SearchBar() {
  return (
    <form className="d-flex m-3">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search Jumbles"
        aria-label="Search"
      />
      <button className="btn btn-primary" type="submit">
        Search
      </button>
    </form>
  )
}
