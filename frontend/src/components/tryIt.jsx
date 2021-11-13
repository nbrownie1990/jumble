import fetch from 'unfetch'

const checkStatus = response => {
  if (response.ok) {
    return response
  }
  // convert non-2xx HTTP responses into errors:
  const error = new Error(response.statusText)
  error.response = response
  return Promise.reject(error)
}
export const getAllJumbles = () => fetch('/jumbles/getall').then(checkStatus)

// return (
//   <div>
//     <h2 className="text-center">JumblesList</h2>
//     <div className="row">
//       <table className="table table-striped table-bordered">
//         <thead>
//           <tr>
//             <th>Jumble Name</th>
//             <th>Jumble Address</th>
//             <th>Jumble Image</th>
//             <th>Jumble Image</th>
//             <th>Jumble Image</th>
//             <th>Jumble Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           <React.Fragment key={jumble.id}>
//             <tr>
//               <td>{jumble.name}</td>
//               <td>{jumble.category}</td>
//               <td>{jumble.address}</td>
//               <td>{jumble.rating}</td>
//               <td>{jumble.termin}</td>
//               <td>{jumble.website}</td>
//               <td>{jumble.postalCode}</td>
//             </tr>
//           </React.Fragment>
//         </tbody>
//       </table>
//     </div>
//   </div>
// )
