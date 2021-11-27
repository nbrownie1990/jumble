import React, {useEffect, useState} from 'react'
import Navbar from '../../components/navbar'
import {Link} from 'react-router-dom'
import ProfileForm from '../../components/profileForm'
import {useNavigate, useParams} from "react-router";
import {deleteUser, getUserById, updateUser, updateUserText} from "../../services/apiService";

export default function EditProfile() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [user, setUser] = useState([])
  //const { user, token } = useAuth()
  const navigate = useNavigate();
  let { userId } = useParams();


  useEffect(() => {
    setLoading(true);
    getUserById(userId)
        .then(user => setUser(user))
        .catch(error => setError(error))
        .finally(() => setLoading(false))
  },[userId])



  const handleProfileInputChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSaveProfileChanges = (userId, user) => {
    setLoading(true)
    updateUser(userId, user)
        .then(updatedUser=> {
          setUser(updatedUser)
          navigate(`/user/edit/${userId}`)
        })
        .catch(error => {
          setError(error)
          setLoading(false)
        })
  }

  const handleCancel = () => {
    navigate(`/home`)
  }

  const handleDeleteUser = (userId) => {
    setLoading(true)
    deleteUser(userId)
        .then(deletedUser => {
          console.log('deleted user with userId: '+ userId)
          navigate(`/home`)
        })
        .catch(error => {
          setError(error)
          setLoading(false)
        })
  }

  //console.log(user)
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
                    <img
                      className="rounded-circle p-md-3 profile-img"
                      name="userImage"
                      src={user.userImage}
                      alt="This is a profile"
                    />
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

