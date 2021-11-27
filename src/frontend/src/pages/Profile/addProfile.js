import React, {useState} from 'react'
import Navbar from '../../components/navbar'
import { Link } from 'react-router-dom'
import ProfileForm from '../../components/profileForm'
import {initialProfileState} from "../../services/stateService";
import {useNavigate} from "react-router";
import {addNewUser} from "../../services/apiService";

export default function AddProfile() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [user, setUser] = useState(initialProfileState)
  //const { user, token } = useAuth()
  const navigate = useNavigate()

  const handleProfileInputChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }
/*
  const handleSaveNewProfile = event => {
    event.preventDefault()
    setLoading(true)
    setError()
    addNewUser()
        .catch(setError)
        .finally(() => {
          setLoading(false)
          //navigate(`/home`)
        })
  }
  const handleCancel = () => {
    navigate(`/home`)
  }*/

  return (
    <React.Fragment>
      <Navbar />
      <main className="m-md-5 m-3 mt-5 mb-5">
        <section className="container w-100 h-100 p-0 mt-5">
          <div className="container rounded bg-white">
            <div className="row">
              <div className="col-md-4 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <div className="img-wrapper">
                    <img
                      className="rounded-circle p-md-3 profile-img"
                      src="https://cdn.pixabay.com/photo/2020/11/03/11/07/woman-5709470_1280.png"
                      alt="This is a profile"
                    />
                    <Link
                      to={`/image/upload`}
                      className="btn edit-btn"
                      type="button"
                      data-toggle="tooltip"
                      title="Edit"
                    >
                      <i className="fas fa-pen ps-2 pb-1"></i>
                    </Link>
                  </div>
                  <span className="font-weight-bold">John Doe</span>
                </div>
              </div>
              <ProfileForm
                  user={user}
                  onChange={handleProfileInputChange}
                 // handleSaveNewProfile={handleSaveNewProfile}
                 // handleCancel={handleCancel}
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

