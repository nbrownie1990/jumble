import React, {useCallback, useEffect, useState} from 'react'
import Navbar from '../../components/navbar'
import ProfileForm from '../../components/profileForm'
import {useNavigate, useParams} from "react-router";
import {deleteUser, getUserById, updateUser } from "../../services/apiService";
import Loading from "../../components/loading";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../services/firebase";

export default function EditProfile() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [url, setUrl] = useState("")
  const [user, setUser] = useState([])
  const navigate = useNavigate();
  let { id } = useParams();

//TODO:Validation nur wenn currentUser.id == id darf Seite betreten werden

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

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        console.log(file)
        if (!file) return;
        const fileRef = ref(storage, "users/" + 'id.' + user.id + '.png');
        const snapshot = uploadBytes(fileRef, file);
        const userPhoto = getDownloadURL(fileRef)
            .then((url) => {setUrl(url)})
        alert("Bild ist hochgeladen! Sobald du rechts vom Bild auf speichern gehst, wird es aktualisiert...")
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
    const handleProfileInputChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value});
 }


  const handleCancel = () => {
    navigate(`/home`)
  }

  const handleDeleteUser = (id) => {
    setLoading(true)
    deleteUser(id)
        .then(user => {
          console.log('Lösche Nutzer mit ID: '+ user.id)
          navigate(`/`)
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
      <main className="m-md-5 m-3 mt-5 mb-5">
        <section className="container w-100 h-100 p-0 mt-5">
          <div className="container rounded bg-white">
              {/*{ error && <p>There was an error loading your data!</p> }*/}
              <ProfileForm
                  user={user}
                  setUser={setUser}
                  onDrop={onDrop}
                  url={url}
                  setUrl={setUrl}
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

