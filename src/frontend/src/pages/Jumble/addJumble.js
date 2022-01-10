import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router'
import Navbar from '../../components/navbar'
import JumbleForm from '../../components/jumbleForm'
import {addNewJumble, getAllCategories} from "../../services/apiService";
import Loading from "../../components/loading";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../services/firebase";
import {getCurrentUser} from "../../services/authService";


export default function AddJumble() {
    const navigate = useNavigate();
    const [jumble, setJumble] = useState([]);
    const [categories, setCategories] = useState([]);
    const [url, setUrl] = useState(() => null)
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getAllCategories()
            .then(categories => setCategories(categories))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [])

    const handleJumbleInputChange = (event) => {
      setJumble(jumble => ({...jumble, [event.target.name]: event.target.value}));
    }

    useEffect(() =>{
        console.log(jumble)
    }, [jumble])

     const handleSaveNewJumble = (jumble) => {
        setLoading(true)
        jumble.userId = getCurrentUser()["id"];
        let updatedCategory = categories.filter(c => {return c.categoryName === jumble.category})
        if (updatedCategory.length === 1) {
            jumble.category = updatedCategory[0] }

        if (!jumble.hasOwnProperty("category")) {
            jumble.category = categories[0]
        }

        addNewJumble(jumble)
            .catch(setError)
            .finally(() => {
                            setLoading(false)
                            navigate('/home')
                        })
    }


//Image Dropzone
    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        console.log(file)
        if (!file) return;
        const fileRef = ref(storage, "jumbles/" + 'new' + '.png');
        const snapshot = uploadBytes(fileRef, file);
        const userPhoto = getDownloadURL(fileRef)
            .then((url) => {
                setUrl(url)
            })
        alert("Bild ist hochgeladen! Sobald du rechts vom Bild auf speichern gehst, wird es aktualisiert...")
    }

   const handleSaveFailed = errorInfo => {
     alert(JSON.stringify(errorInfo, null, 2));
   };

  const handleCancel = () => {
    navigate('/home')
  }


    if (error || !Array.isArray(categories)) {
        return <p className="container w-100 h-100 mt-5" >There was an error loading your data!</p>;
    }

    return (
    <>
        {loading && <Loading />}
        <Navbar />
        {!loading && (
      <main className="m-md-5 m-2 mt-5 mb-5">
        <section className="container w-100 h-100 px-lg-5 mt-5">
          <div className="container rounded bg-white p-md-5">
            <JumbleForm
              jumble={jumble}
              setJumble={setJumble}
              onDrop={onDrop}
              url={url}
              setUrl={setUrl}
              categories={categories}
              handleJumbleInputChange={handleJumbleInputChange}
              handleSaveNewJumble={handleSaveNewJumble}
              handleSaveFailed={handleSaveFailed}
              handleCancel={handleCancel}
              readOnly={false}
              mode="new"
            />
          </div>
        </section>
      </main>)}
    </>
  )
}
