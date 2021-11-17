import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../../auth/AuthProvider'
import Navbar from '../../components/navbar'
import JumbleForm from '../../components/jumbleForm'
import {addNewJumble} from "../../services/apiService";
import {initialState, initialAddressState} from "../../services/stateService";
import Error from "../../components/error";


export default function AddJumble() {
  const navigate = useNavigate()
  const [jumble, setJumble] = useState(initialState)
  const [address, setAddress] = useState(initialAddressState)
  const [error, setError] = useState()

  const handleJumbleInputChange = event => {
    setJumble({ ...jumble, [event.target.name]: event.target.value })
    setAddress({ ...address, [event.target.name]: event.target.value })
  }

  const handleSaveNewJumble = event => {
    event.preventDefault()
    setError()
    addNewJumble(jumble, jumble.id)
        .catch(setError)
        .finally(() =>{
          navigate(`/home`)
    })
  };

  const handleSaveFailed = errorInfo => {
    alert(JSON.stringify(errorInfo, null, 2));
  };

  const handleCancel = () => {
    navigate('/home')
  }


  return (
    <>
      <Navbar />
      <main className="m-md-5 m-2 mt-5 mb-5">
        <section className="container w-100 h-100 px-lg-5 mt-5">
          <div className="container rounded bg-white p-md-5">
            <JumbleForm
              jumble={jumble}
              address={address}
              handleJumbleInputChange={handleJumbleInputChange}
              handleSaveNewJumble={handleSaveNewJumble}
              handleSaveFailed={handleSaveFailed}
              handleCancel={handleCancel}
              readOnly={false}
              mode="new"
            />
            {error && <Error>ERROR-WARNING o.O!</Error>}
          </div>
        </section>
      </main>
    </>
  )
}
