import React from 'react'
import SearchBar from '../../components/searchbar'

const Home = () => {
  return (
    <main>
      <h1>Home</h1>
      <div className="container-fluid" data-aos="fade-up">
        <SearchBar />
      </div>
    </main>
  )
}

export default Home
