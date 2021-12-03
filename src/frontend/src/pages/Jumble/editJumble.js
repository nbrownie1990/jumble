import React, { useState} from 'react'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import Navbar from '../../components/navbar'
import JumbleForm from '../../components/jumbleForm'
import {
    deleteJumble, getAddressById,
    getJumbleById,
    updateJumble,
    updateJumbleAddress
} from "../../services/apiService";

export default function EditJumble() {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [jumble, setJumble] = useState([]);
  const [address, setAddress] = useState([]);
  let { jumbleId } = useParams();
  let  addressId  = jumble.address?.addressId;

    useEffect(() => {
        setLoading(true);
        getJumbleById(jumbleId)
            .then(jumble => setJumble(jumble))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    },[jumbleId])

    useEffect(() => {
        setLoading(true);
        getAddressById(addressId)
            .then(address => setAddress(address))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    },[addressId])


  const handleJumbleInputChange = event => {
    setJumble({ ...jumble, [event.target.name]: event.target.value })
    setAddress({ ...address, [event.target.name]: event.target.value })
  }

    const handleSaveJumbleChanges = (jumbleId, jumble) => {
        setLoading(true)
        updateJumble(jumbleId, jumble)
            .then(updatedJumble=> {
                setJumble(updatedJumble)
                navigate(`/jumbles/edit/${jumbleId}`)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }

    const handleSaveAddressChanges = (addressId, address) => {
        setLoading(true)
        updateJumbleAddress(addressId, address)
            .then(updatedAddress=> {
                setAddress(updatedAddress)
               navigate(`/jumbles/edit/${jumbleId}`)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }

  const handleCancel = () => {
    navigate('/home')
  }

    const handleDeleteJumble = (jumbleId) => {
        setLoading(true)
        deleteJumble(jumbleId)
            .then(deletedJumble => {
                console.log('deleted jumble with jumbleId: '+ jumbleId +' and addressId:' + addressId)
                navigate(`/home`)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }

    console.log(jumble)

    return (
      <React.Fragment>
        <Navbar />
        <main className="m-md-5 m-2 mt-5 mb-5">
          <section className="container w-100 h-100 px-lg-5 mt-5">
            <div className="container rounded bg-white p-md-5">
              <JumbleForm
                jumble={jumble}
                address={address}
                handleJumbleInputChange={handleJumbleInputChange}
                handleSaveJumbleChanges={handleSaveJumbleChanges}
                handleSaveAddressChanges={handleSaveAddressChanges}
                handleCancel={handleCancel}
                handleDeleteJumble={handleDeleteJumble}
                readOnly={false}
                mode="edit"
              />
            </div>
          </section>
        </main>
      </React.Fragment>
    )
}
