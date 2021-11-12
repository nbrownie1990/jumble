import React, { useState } from 'react'
import { useNavigate } from 'react-router'

import { useAuth } from '../../auth/AuthProvider'
import { postJumble } from '../../services/apiService'
import NavBar from '../../components/navbar'
import JumbleForm from '../../components/jumbleForm'

export default function AddJumble() {
  const navigate = useNavigate()
  const [error, setError] = useState()
  const [jumble, setJumble] = useState()
  const { token } = useAuth()

  const handleJumbleInputChange = e => {
    setJumble({ ...jumble, [e.target.name]: e.target.value })
  }

  const handleSaveNewJumble = event => {
    event.preventDefault()
    postJumble(token, jumble)
      .catch(setError)
      .finally(() => {
        navigate('/home')
      })
  }

  const handleCancel = () => {
    navigate('/home')
  }

  return (
    <React.Fragment>
      <NavBar />
      <main className="m-md-5 m-2 mt-5 mb-5">
        <section className="container w-100 h-100 px-lg-5 mt-5">
          <div className="container rounded bg-white p-md-5">
            <div className="row">
              <JumbleForm
                handleJumbleInputChange={handleJumbleInputChange}
                handleSaveNewJumble={handleSaveNewJumble}
                handleCancel={handleCancel}
                readOnly={false}
                mode="new"
              />
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}
