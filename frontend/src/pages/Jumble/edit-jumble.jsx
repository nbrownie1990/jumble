import React from 'react'
import NavBar from '../../components/navbar'
import Star from '../../components/rating'
import { Link } from 'react-router-dom'

import TextArea from '../../components/textArea'
import JumbleForm from '../../components/jumbleForm'

const EditJumble = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className="m-md-5 m-2 mt-5 mb-5">
        <section className="container w-100 h-100 px-lg-5 mt-5">
          <div className="container rounded bg-white p-md-5">
            <div className="row">
              <JumbleForm />

              <div className="mt-2 mt-md-5 text-center">
                <Link
                  to={`/categories/category`}
                  className="btn btn-primary profile-button mb-5 m-3"
                  type="button"
                >
                  <i class="fas fa-save"></i> Save Jumble
                </Link>
                <Link
                  to={`/categories/category`}
                  className="btn btn-warning mb-5 m-3"
                  type="button"
                  data-toggle="tooltip"
                  title="Delete Jumble"
                >
                  <i class="fas fa-trash"></i> Delete Jumble
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}

export default EditJumble
