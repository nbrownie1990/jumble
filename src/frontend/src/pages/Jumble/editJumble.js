// import React, { useState } from 'react'
// import { useEffect } from 'react'
// import { useParams, useNavigate } from 'react-router'

// import {
//   getJumbleToUpdate,
//   updateJumbleName,
//   updateJumbleAddress,
//   updateJumbleDate,
//   updateJumbleImage,
//   updateJumbleTime,
//   updateJumbleWebsite,
//   deleteJumble,
// } from '../../services/apiService'
// import Navbar from '../../components/navbar'
// import JumbleForm from '../../components/jumbleForm'

// export default function EditJumble() {
//   const navigate = useNavigate()
//   const [error, setError] = useState()
//   const [jumble, setJumble] = useState()
//   const { id } = useParams()

//   useEffect(() => {
//     setError()
//     getJumbleToUpdate(jumble, id).then(setJumble).catch(setError)
//   }, [jumble, id])

//   const handleJumbleInputChange = e => {
//     setJumble({ ...jumble, [e.target.name]: e.target.value })
//   }

//   const handleSaveJumbleChanges = id => {
//     updateJumbleName(id, jumble)
//       .then(updatedJumble => {
//         setJumble(updatedJumble)
//         navigate('/edit/${id}')
//       })
//       .catch(error => {
//         setError(error)
//       })
//   }

//   const handleCancel = () => {
//     navigate('/home')
//   }

//   const handleDeleteJumble = () => {
//     deleteJumble(id)
//       .then(deletedJumble => {
//         console.log('deleted: ', deletedJumble)
//         navigate(`/home`)
//       })
//       .catch(error => {
//         setError(error)
//       })
//   }
//   {
//     return (
//       <React.Fragment>
//         <Navbar />
//         <main className="m-md-5 m-2 mt-5 mb-5">
//           <section className="container w-100 h-100 px-lg-5 mt-5">
//             <div className="container rounded bg-white p-md-5">
//               <JumbleForm
//                 handleJumbleInputChange={handleJumbleInputChange}
//                 handleSaveJumbleChanges={handleSaveJumbleChanges}
//                 handleCancel={handleCancel}
//                 handleDeleteJumble={handleDeleteJumble}
//                 readOnly={false}
//                 mode="edit"
//               />
//             </div>
//           </section>
//         </main>
//       </React.Fragment>
//     )
//   }
// }
