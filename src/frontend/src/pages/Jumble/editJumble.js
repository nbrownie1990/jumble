import React, { useState} from 'react'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import Navbar from '../../components/navbar'
import JumbleForm from '../../components/jumbleForm'
import {
    deleteJumble, deleteUser, getAddressById, getAllCategories,
    getJumbleById,
    updateJumble,
    updateJumbleAddress
} from "../../services/apiService";
import Loading from "../../components/loading";

export default function EditJumble() {
    let { jumbleId } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [jumble, setJumble] = useState([]);

    useEffect(() => {
        getAllCategories()
            .then(categories => setCategories(categories))
            .catch(error => setError(error))

        getJumbleById(jumbleId)
            .then(jumble => {
                setJumble(jumble)})
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    },[jumbleId])


  const handleJumbleInputChange = event => {
    setJumble({ ...jumble, [event.target.name]: event.target.value })
  }

    const handleSaveJumbleChanges = (jumbleId, jumble) => {
        let updatedCategory = categories.filter(c => {return c.categoryName === jumble.category})
        if (updatedCategory.length === 1) {
            jumble.category = updatedCategory[0] }
        console.log(jumble)

        setLoading(true)
        updateJumble(jumbleId, jumble)
            .then(updatedJumble=> {
                setJumble(updatedJumble)
                navigate(`/jumbles/${jumbleId}`)
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
            .then(jumble => {
                console.log('deleted jumble with jumbleId: '+ jumbleId)
                //setJumble(jumble => jumble.jumbleId !== jumbleId)
                navigate(`/home`)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }


    return (
      <React.Fragment>
          {loading && <Loading />}
        <Navbar />
          {!loading && (
        <main className="m-md-5 m-2 mt-5 mb-5">
          <section className="container w-100 h-100 px-lg-5 mt-5">
            <div className="container rounded bg-white p-md-5">
              <JumbleForm
                jumble={jumble}
                categories={categories}
                handleJumbleInputChange={handleJumbleInputChange}
                handleSaveJumbleChanges={handleSaveJumbleChanges}
               // handleSaveAddressChanges={handleSaveAddressChanges}
                handleCancel={handleCancel}
                handleDeleteJumble={handleDeleteJumble}
                readOnly={false}
                mode="edit"
              />
            </div>
          </section>
        </main>)}
      </React.Fragment>
    )
}
