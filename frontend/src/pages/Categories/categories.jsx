import React from 'react'
import NavBar from '../../components/navbar'
import Map from '../../components/map'
import CategoryCard from '../../components/categorycard'

const Categories = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Map />
      <section className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </section>
    </React.Fragment>
  )
}

export default Categories
