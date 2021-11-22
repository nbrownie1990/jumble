import TextField from './textField'
import React from 'react'

export default function AddressForm({
  handleJumbleInputChange,
  readOnly,
    address
}){


// const addressToString = address =>{
//     return(
//         address.addressStreet +
//             ' ' +
//         address.addressNumber +
//         ' ' +
//         address.addressZip +
//         ' ' +
//         address.addressCity +
//         ' ' +
//         address.addressCountry
//     )
// }
  return (
    <>
      <TextField
        name="street"
        placeholder="Straße"
        type="text"
        value={address.addressStreet}
        onChange={handleJumbleInputChange}
        title="Straße"
        disabled={readOnly}
        rules={[{required: true, message: 'Please enter a address'}]}
      />
      <TextField
        name="number"
        placeholder="Hausnr."
        type="text"
        value={address.addressNumber}
        onChange={handleJumbleInputChange}
        title="Hausnummer"
        disabled={readOnly}
        rules={[{required: true, message: 'Please enter the street number'}]}
      />
      <TextField
        name="zip"
        placeholder="Postleitzahl"
        type="text"
        value={address.addressZip}
        onChange={handleJumbleInputChange}
        title="Postleitzahl"
        disabled={readOnly}
        rules={[{required: true, message: 'Please enter zip code'}]}

      />
      <TextField
        name="city"
        placeholder="Stadt"
        type="text"
        value={address.addressCity}
        onChange={handleJumbleInputChange}
        title="Stadt"
        disabled={readOnly}
      />
      <TextField
        name="country"
        placeholder="Land"
        type="text"
        value={address.addressCountry}
        onChange={handleJumbleInputChange}
        title="Land"
        disabled={readOnly}
      />
    </>
  )
}
