import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import Navbar from '../../components/navbar'
import JumbleForm from '../../components/jumbleForm'

export default function EditJumble() {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [jumble, setJumble] = useState();
  const [address, setAddress] = useState();
  const { jumbleId } = useParams();

  useEffect(() => {
    console.log(jumbleId)
    setLoading(true);
    fetch(`/api/jumbles/edit/${jumbleId}`)
        .then((res) => res.json())
        .then((data) => {
          setJumble(data)
          setAddress(data)
          console.log(data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
  }, [jumbleId]);

  if (loading) {
    return <p className="container w-100 h-100 mt-5" >Data is loading...</p>;
  }

  const handleJumbleInputChange = event => {
    setJumble({ ...jumble, [event.target.name]: event.target.value })
    setAddress({ ...address, [event.target.name]: event.target.value })
  }

  // const handleSaveJumbleChanges = jumbleId => {
  //   ApiService.updateJumbleName(jumbleId, jumble)
  //     .then(updatedJumble => {
  //       setJumble(updatedJumble)
  //       navigate(`/jumbles/${jumbleId}`)
  //     })
  //     .catch(error => {
  //       setError(error)
  //     })
  // }

  const handleCancel = () => {
    navigate('/home')
  }

  // const handleDeleteJumble = () => {
  //   ApiService.deleteJumble(jumbleId)
  //     .then(deletedJumble => {
  //       console.log('deleted: ', deletedJumble)
  //       navigate(`/home`)
  //     })
  //     .catch(error => {
  //       setError(error)
  //     })
  // }
  {
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
                //handleSaveJumbleChanges={handleSaveJumbleChanges}
                handleCancel={handleCancel}
                //handleDeleteJumble={handleDeleteJumble}
                readOnly={false}
                mode="edit"
              />
            </div>
          </section>
        </main>
      </React.Fragment>
    )
  }
}
