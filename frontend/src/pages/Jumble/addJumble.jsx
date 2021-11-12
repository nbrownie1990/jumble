import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../../auth/AuthProvider'
import { postJumble } from '../../services/apiService'
import NavBar from '../../components/navbar'
import JumbleForm from '../../components/jumbleForm'

const initialState = {
  id: null,
  text: '',
  name: '',
  category: '',
  date: '',
  time: '',
  website: '',
}

const initialAddressState = {
  id: null,
  street: '',
  number: '',
  zip: '',
  city: 'Hamburg',
  country: 'Deutschland',
}

export default function AddJumble() {
  const navigate = useNavigate()
  const [jumble, setJumble] = useState(initialState)
  const [address, setAddress] = useState(initialAddressState)
  const [error, setError] = useState()
  const { token } = useAuth()

  const handleJumbleInputChange = e => {
    setJumble({ ...jumble, [e.target.name]: e.target.value })
  }

  const handleSaveNewJumble = e => {
    e.preventDefault()
    setError()
    postJumble(token, jumble)
      .catch(error => {
        setError(error)
      })
      .finally(() => {
        // navigate('/home')
      })
  }

  const handleCancel = () => {
    navigate('/home')
  }

  return (
    <>
      <NavBar />
      <main className="m-md-5 m-2 mt-5 mb-5">
        <section className="container w-100 h-100 px-lg-5 mt-5">
          <div className="container rounded bg-white p-md-5">
            <JumbleForm
              jumble={jumble}
              handleJumbleInputChange={handleJumbleInputChange}
              handleSaveNewJumble={handleSaveNewJumble}
              handleCancel={handleCancel}
              readOnly={false}
              mode="new"
            />
          </div>
        </section>
      </main>
    </>
  )
}
