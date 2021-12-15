import React, {useCallback, useEffect, useState} from 'react'
import Navbar from '../../components/navbar'
import { Link } from 'react-router-dom'
import ProfileForm from '../../components/profileForm'
import {initialProfileState} from "../../services/stateService";
import {useNavigate} from "react-router";
//import {useAuth} from "../../auth/AuthProvider";
import {addUserProfile, getUserByUserName} from "../../services/apiService";
import {getCurrentUser} from "../../services/authService";


export default function AddProfile() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [username, setUsername] = useState([])
  const [email, setEmail] = useState([])
  const [user, setUser] = useState()
//  const { token } = useAuth()
  const navigate = useNavigate()
  const currentUser = getCurrentUser();


  // const loadDataOnlyOnce = useCallback(() => {
  //   setLoading(true)
  //   setError()
  //   getUserByUserName(username, token)
  //       .then(response => setEmail(response))
  //       .catch(setError)
  //       .finally(() => {
  //         setLoading(false)
  //       })
  // }, [token, username])
  //
  // useEffect(() => {
  //   loadDataOnlyOnce()
  // }, [loadDataOnlyOnce])

  const handleProfileInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // const handleSaveNewProfile = e => {
  //   e.preventDefault()
  //   setLoading(true)
  //   setError()
  //   addUserProfile(username, token)
  //       .catch(setError)
  //       .finally(() => {
  //         setLoading(false)
  //         navigate(`/home`)
  //       })
  // ,[username, token]}

  const handleCancel = () => {
    navigate(`/home`)
  }

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
                  user={currentUser}
                  onChange={handleProfileInputChange}
                  //handleSaveNewProfile={handleSaveNewProfile}
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

