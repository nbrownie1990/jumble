import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../../auth/AuthProvider'
import { postJumble, postAddress } from '../../services/apiService'
import NavBar from '../../components/navbar'
import JumbleForm from '../../components/jumbleForm'
import Error from '../../components/error'
import {addNewJumble} from "../../services/apiService";

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

  const handleJumbleInputChange = e => {
    setJumble({ ...jumble, [e.target.name]: e.target.value })
    setAddress({ ...address, [e.target.name]: e.target.value })
  }

  const handleSaveNewJumble = jumble => {
    console.log(JSON.stringify(jumble, null, 2))
    addNewJumble(jumble)
        .then(() => {
          console.log("jumble added")
          alert("Thanks for adding a new Jumble! 🥳");
        }).catch(error => {
          console.log(error)
          error.response.json().then(res => {
          console.log(res);
           alert("There was an issue")
      });
    })
  };

  const handleSaveFailed = errorInfo => {
    alert(JSON.stringify(errorInfo, null, 2));
  };

  const handleCancel = () => {
    navigate('/home')
  }

  // const handleSaveNewJumble = e => {
  //   e.preventDefault()
  //   setError()
  //   postJumble(jumble)
  //   postAddress(address)
  //     .catch(error => {
  //       setError(error)
  //     })
  //     .finally(() => {
  //       // navigate('/home')
  //     })
  // }



  return (
    <>
      <NavBar />
      <main className="m-md-5 m-2 mt-5 mb-5">
        <section className="container w-100 h-100 px-lg-5 mt-5">
          <div className="container rounded bg-white p-md-5">
            <JumbleForm
              jumble={jumble}
              address={address}
              handleJumbleInputChange={handleJumbleInputChange}
              handleSaveNewJumble={handleSaveNewJumble}
              handleSaveFailed={handleSaveFailed()}
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
