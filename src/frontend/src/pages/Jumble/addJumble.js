import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router'
import Navbar from '../../components/navbar'
import JumbleForm from '../../components/jumbleForm'
import {initialJumbleState, initialAddressState, jumbleCategoryOptions} from "../../services/stateService";
import {addNewJumble, getAllCategories} from "../../services/apiService";


export default function AddJumble() {
  const navigate = useNavigate();
  const [jumble, setJumble, setJumbleId] = useState([]);
  const [address, setAddress] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false)

    const handleJumbleInputChange = e => {
    setJumble({ ...jumble, [e.target.name]: e.target.value })
    setAddress({ ...address, [e.target.name]: e.target.value })
  }

    useEffect(() => {
        setLoading(true);
        getAllCategories()
            .then(categories => setCategories(categories))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    },[])

    const handleSaveNewJumble = (e, jumble) => {
        e.preventDefault()
        addNewJumble(jumble)
                .catch(setError)
                .finally(() => {
                    setLoading(false)
                    navigate('/home')
                })
    }

   const handleSaveFailed = errorInfo => {
     alert(JSON.stringify(errorInfo, null, 2));
   };

  const handleCancel = () => {
    navigate('/home')
  }

    if (loading) {
        return <p className="container w-100 h-100 mt-5" >Data is loading...</p>;
    }

    if (error || !Array.isArray(categories)) {
        return <p className="container w-100 h-100 mt-5" >There was an error loading your data!</p>;
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
              categories={categories}
              handleJumbleInputChange={handleJumbleInputChange}
              handleSaveNewJumble={handleSaveNewJumble}
              handleSaveFailed={handleSaveFailed}
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
