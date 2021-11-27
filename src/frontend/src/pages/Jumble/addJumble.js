import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router'
import Navbar from '../../components/navbar'
import JumbleForm from '../../components/jumbleForm'
import {initialJumbleState, initialAddressState, jumbleCategoryOptions} from "../../services/stateService";
import Error from "../../components/error";


export default function AddJumble() {
  const navigate = useNavigate();
  const [jumble, setJumble, setJumbleId] = useState([]);
  const [address, setAddress] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false)

    const handleJumbleInputChange = event => {
    setJumble({ ...jumble, [event.target.name]: event.target.value })
    setAddress({ ...address, [event.target.name]: event.target.value })
  }

  useEffect(() => {
      // POST request using fetch inside useEffect React hook
      const handleSaveNewJumble = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: 'Wenn das mal klappt...' })
      };
      fetch('/api/jumbles/new', handleSaveNewJumble)
          .then(response => response.json())
          .then(data => setJumbleId(data.id));

      //empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

    //
    // const handleSaveNewJumble = event => {
    //     event.preventDefault();
    //
    //     setLoading(true)
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ title: 'Wenn das mal klappt...' })
    //     };
    //     fetch('/api/jumbles/new', requestOptions)
    //         .then(response => response.json())
    //         .then(data => setJumbleId(data.id))
    //
    //         .catch(setError)
    //         .finally(() => {
    //             setLoading(false)
    //         })
    // }

  // const handleSaveFailed = errorInfo => {
  //   alert(JSON.stringify(errorInfo, null, 2));
  // };

  const handleCancel = () => {
    navigate('/home')
  }

  return (
    <>
      <Navbar />
      <main className="m-md-5 m-2 mt-5 mb-5">
        <section className="container w-100 h-100 px-lg-5 mt-5">
          <div className="container rounded bg-white p-md-5">
            <JumbleForm
              jumble={jumble}
              address={address}
              handleJumbleInputChange={handleJumbleInputChange}
              //handleSaveNewJumble={handleSaveNewJumble}
              //handleSaveFailed={handleSaveFailed}
              handleCancel={handleCancel}
              readOnly={false}
              mode="new"
            />
            {error && <Error>ERROR-WARNING o.O!</Error>}
          </div>
        </section>
      </main>
    </>
  )
}
