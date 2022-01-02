import React, {useCallback, useEffect, useState} from 'react'
import Navbar from '../../components/navbar'
import ProfileForm from '../../components/profileForm'
import {useNavigate, useParams} from "react-router";
import {deleteUser, getUserById, updateUser } from "../../services/apiService";
import Loading from "../../components/loading";

export default function EditProfile() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [url, setUrl] = useState("")
  const [user, setUser] = useState([])
  const navigate = useNavigate();
  let { id } = useParams();


  const loadDataOnlyOnce = useCallback(() => {
    getUserById(id)
        .then(user => {setUser(user)})
        .catch(setError)
        .finally(() => {
          setLoading(false)
        })
  }, [id])

  useEffect(() => {
    loadDataOnlyOnce()
  }, [loadDataOnlyOnce])



    function handleImageInputChange (url) {
        if (url) {
            setUser({...user, userImage: url})
            console.log(user)
        } else if(user.userImage) {
            setUser({...user, userImage: user.userImage});
        }
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

    const handleProfileInputChange = (event, url) => {
        setUser({ ...user, [event.target.name]: event.target.value })
        if (url){  setUser({...user, userImage: url}) }
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
              {/*{ error && <p>There was an error loading your data!</p> }*/}
              <ProfileForm
                  user={user}
                  setUser={setUser}
                  url={url}
                  setUrl={setUrl}
                  handleImageInputChanges={handleImageInputChange}
                  handleProfileInputChange={handleProfileInputChange}
                  handleSaveProfileChanges={handleSaveProfileChanges}
                  handleDeleteUser={handleDeleteUser}
                  handleCancel={handleCancel}
                  readOnly={false}
              />
          </div>
        </section>
      </main>)}
    </React.Fragment>
  )
}

