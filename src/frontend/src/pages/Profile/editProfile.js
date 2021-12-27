import React, {useCallback, useEffect, useState} from 'react'
import Navbar from '../../components/navbar'
import ProfileForm from '../../components/profileForm'
import {useNavigate, useParams} from "react-router";
import {deleteUser, getUserById, updateUser, updateUserText} from "../../services/apiService";
import Loading from "../../components/loading";

export default function EditProfile() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [user, setUser] = useState([])
  const [userEmail, setUserEmail] = useState([])
  const [userName, setUserName] = useState([])
  const [userText, setUserText] = useState([])
  const navigate = useNavigate();
  let { id } = useParams();


  const loadDataOnlyOnce = useCallback(() => {
    getUserById(id)
        .then(user => {setUser(user)})
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
        .then(user => {
          console.log('Lösche Nutzer mit ID: '+ user.id)
          //setUser(user => user.id !== id)
          navigate(`/`)
        })
        .catch(error => {
          setError(error)
          setLoading(false)
        })
  }

  console.log(user)

  return (
      <React.Fragment>
          {loading && <Loading />}
          <Navbar />
          {!loading && (
      <main className="m-md-5 m-3 mt-5 mb-5">
        <section className="container w-100 h-100 p-0 mt-5">
          <div className="container rounded bg-white">
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
        </section>
      </main>)}
    </React.Fragment>
  )
}

