import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../../auth/AuthProvider'
import NavBar from '../../components/navbar'
import { Link } from 'react-router-dom'
import JumbleForm from '../../components/jumbleForm'

export default function EditJumble() {
  const navigate = useNavigate()
  const [error, setError] = useState()
  const [jumble, setJumble] = useState()
  const { token } = useAuth()
  {
    // mode,
    // handleEditJumble,
    // handleSaveNewJumble,
    // handleSaveJumbleChanges,
    // handleCancel,
    // handleDeleteJumble,
  }

  const handleJumbleInputChange = e => {
    setJumble({ ...jumble, [e.target.name]: e.target.value })
  }

  const handleSaveJumbleChanges = id => {}

  const handleCancel = () => {
    navigate('/home')
  }

  const handleDeleteJumble = () => {
    // deleteJumble(token, id)
    //   .then(deletedJumble => {
    //     console.log('deleted: ', deletedJumble)
    //     navigate(`/home`)
    //   })
    //   .catch(error => {
    //     setError(error)
    //   })
  }
  {
    return (
      <React.Fragment>
        <NavBar />
        <main className="m-md-5 m-2 mt-5 mb-5">
          <section className="container w-100 h-100 px-lg-5 mt-5">
            <div className="container rounded bg-white p-md-5">
              <div className="row">
                <JumbleForm
                  handleSaveJumbleChanges={handleSaveJumbleChanges}
                  handleJumbleInputChange={handleJumbleInputChange}
                  handleCancel={handleCancel}
                  handleDeleteJumble={handleDeleteJumble}
                  readOnly={false}
                  mode="edit"
                />
                <div className="mt-2 mt-md-5 text-center">
                  {/* 

              {mode === 'new' && (
        <ButtonGroup>
          <Button type="button" className="btn btn-primary profile-button mb-5 m-3" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSaveNewJumble} className="btn btn-primary profile-button mb-5 m-3">    <i className="fas fa-save"></i> 
          Save Jumble </Button>
        </ButtonGroup>
      )}
      {readOnly && (
        <ButtonGroup>
          <Button type="button" onClick={() => handleEditJumble(jumble.id)} className="btn btn-primary profile-button mb-5 m-3">
            Edit
          </Button>
        </ButtonGroup>
      )}
      {mode === 'edit' && (
        <ButtonGroup>
          <Button type="button" onClick={handleCancel} className="btn btn-primary profile-button mb-5 m-3">
            Cancel
          </Button>
          <Button
            type="button"
            onClick={() => handleSaveJumbleChanges(address.id)}
            className="btn btn-primary profile-button mb-5 m-3"
          >
             <i className="fas fa-save"></i> 
            Änderungen speichern
          </Button>
          <Button type="button" onClick={handleDeleteJumble} className="btn btn-primary profile-button mb-5 m-3">
             <i className="fas fa-trash"></i> Delete Jumble
          </Button>
        </ButtonGroup>
      )} */}

                  <Link
                    to={`/categories/category`}
                    className="btn btn-primary profile-button mb-5 m-3"
                    type="button"
                  >
                    <i className="fas fa-save"></i> Save Jumble
                  </Link>
                  <Link
                    to={`/categories/category`}
                    className="btn btn-warning mb-5 m-3"
                    type="button"
                    data-toggle="tooltip"
                    title="Delete Jumble"
                  >
                    <i className="fas fa-trash"></i> Delete Jumble
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </React.Fragment>
    )
  }
}
