import React, {useState} from 'react'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import Navbar from '../../components/navbar'
import JumbleForm from '../../components/jumbleForm'
import {
    deleteJumble,
    getAllCategories,
    getJumbleById,
    updateJumble,
} from "../../services/apiService";
import Loading from "../../components/loading";
import {getDownloadURL, uploadBytes, ref} from 'firebase/storage';
import {storage} from '../../services/firebase';

export default function EditJumble() {
    let {jumbleId} = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState();
    const [url, setUrl] = useState(() => null)
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [jumble, setJumble] = useState([]);

//TODO:Validation nur wenn currentUser.id == jumble.user.id darf Seite betreten werden

    useEffect(() => {
        getAllCategories()
            .then(categories => setCategories(categories))
            .catch(error => setError(error))

        getJumbleById(jumbleId)
            .then(jumble => {
                setJumble(jumble)
            })
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [jumbleId])


//Image Dropzone
    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        console.log(file)
        if (!file) return;
        const fileRef = ref(storage, "jumbles/" + 'jumbleId.' + jumble.jumbleId + '.png');
        const snapshot = uploadBytes(fileRef, file);
        const userPhoto = getDownloadURL(fileRef)
            .then((url) => {
                setUrl(url)
            })
        alert("Bild ist hochgeladen! Sobald du rechts vom Bild auf speichern gehst, wird es aktualisiert...")
    }

    const handleJumbleInputChange = (event) => {
        setJumble(
            {...jumble,
                address: {...jumble.address, [event.target.name]: event.target.value },
                [event.target.name]: event.target.value});
    }

    const handleSaveJumbleChanges = (jumbleId, jumble) => {
      setLoading(true)
        let updatedCategory = categories.filter(c => {return c.categoryName === jumble.category})
        if (updatedCategory.length === 1) {
            jumble.category = updatedCategory[0] }

     updateJumble(jumbleId, jumble)
         .then(
             changedJumble=> {
              setJumble(changedJumble)
                 navigate(`/jumbles/${jumbleId}`)
             }
             )
         .catch(error => setError(error))
         .finally(setLoading(false))
  }

//TODO: Funktioniert aktuell nicht
  const handleDeleteJumble = (jumbleId) => {
        setLoading(true)
        deleteJumble(jumbleId)
            .then(jumble => {
                console.log('Lösche Jumble mit ID: '+ jumble.jumbleId)
                navigate(`/home`)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }

    const handleCancel = () => {
        navigate('/home')
    }

    return (
      <React.Fragment>
          {loading && <Loading />}
        <Navbar />
          {!loading && (
        <main className="m-md-5 m-2 mt-5 mb-5">
          <section className="container w-100 h-100 px-lg-5 mt-5">
            <div className="container rounded bg-white p-md-5">
              <JumbleForm
                jumble={jumble}
                setJumble={setJumble}
                url={url}
                setUrl={setUrl}
                onDrop={onDrop}
                mode="edit"
                categories={categories}
                handleJumbleInputChange={handleJumbleInputChange}
                handleSaveJumbleChanges={handleSaveJumbleChanges}
                handleCancel={handleCancel}
                handleDeleteJumble={handleDeleteJumble}
                readOnly={false}
              />
            </div>
          </section>
        </main>
          )}
      </React.Fragment>
    )
}
