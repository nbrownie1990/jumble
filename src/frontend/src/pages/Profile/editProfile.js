import React, {useCallback, useEffect, useState} from 'react'
import Navbar from '../../components/navbar'
import {Link} from 'react-router-dom'
import ProfileForm from '../../components/profileForm'
import {useNavigate, useParams} from "react-router";
import {deleteUser, getUserById, updateUser, updateUserText} from "../../services/apiService";

export default function EditProfile() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [user, setUser] = useState([])
  const [userEmail, setUserEmail] = useState([])
  const [userName, setUserName] = useState([])
  const [userText, setUserText] = useState([])

  const navigate = useNavigate();
  let { id } = useParams();


  const loadDataOnlyOnce = useCallback(() => {
    setLoading(true)
    getUserById(id)
        .then(user => {
          setUser(user)
        })
        .then(user => setUserName(user.username))
        .then(user => setUserEmail(user.email))
        .then(user => setUserText(user.userText))
        .catch(setError)
        .finally(() => {
          setLoading(false)
        })
  }, [id])

  useEffect(() => {
    loadDataOnlyOnce()
  }, [loadDataOnlyOnce])



  // useEffect(() => {
  //   setLoading(true);
  //   getUserById(userId)
  //       .then(user => setUser(user))
  //       .catch(error => setError(error))
  //       .finally(() => setLoading(false))
  // },[userId])



  const handleProfileInputChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSaveProfileChanges = (id, user) => {
    setLoading(true)
    updateUser(id, user)
        .then(updatedUser=> {
          setUser(updatedUser)
          navigate(`/user/me`)
        })
        .catch(error => {
          setError(error)
          setLoading(false)
        })
  }

  const handleCancel = () => {
    navigate(`/home`)
  }

  const handleDeleteUser = (id) => {
    setLoading(true)
    deleteUser(id)
        .then(deletedUser => {
          console.log('deleted user with userId: '+ id)
          navigate(`/home`)
        })
        .catch(error => {
          setError(error)
          setLoading(false)
        })
  }

  console.log(user)
  //console.log("UserRole" + user.userRole)

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

                    {user.userImage ?
                        <img
                            className="rounded-circle p-md-3 profile-img"
                            name="userImage"
                            src={user.userImage}
                            alt="This is a profile"
                        /> :
                        <img
                            className="rounded-circle user-img "
                            src="https://images.unsplash.com/photo-1608155686393-8fdd966d784d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt="Profile"
                        />
                    }
                    <Link
                      to={`/user/edit`}
                      className="btn edit-btn"
                      type="button"
                      data-toggle="tooltip"
                      title="Edit"
                    >
                      <i className="fas fa-pen ps-2 pb-1"></i>
                    </Link>
                  </div>
                  <span className="font-weight-bold">{user.username}</span>
                </div>
              </div>
              { loading &&  <p>Data is loading...</p>}
              { error && <p>There was an error loading your data!</p> }
              <ProfileForm
                  user={user}
                  handleProfileInputChange={handleProfileInputChange}
                  handleSaveProfileChanges={handleSaveProfileChanges}
                  handleDeleteUser={handleDeleteUser}
                  handleCancel={handleCancel}
                  readOnly={false}
                  mode="edit"
              />
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}

