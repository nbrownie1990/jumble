import TextField from './textField'
import React from 'react'

export default function AddressForm({
  handleJumbleInputChange,
  readOnly,
  address
}){


  return (
    <>
      <TextField
        name="addressStreet"
        type="text"
        value={address.addressStreet}
        onChange={handleJumbleInputChange}
        title="Straße"
        disabled={readOnly}
        //rules={[{required: true, message: 'Please enter a address'}]}
      />
      <TextField
        name="addressNumber"
        type="text"
        value={address.addressNumber}
        onChange={handleJumbleInputChange}
        title="Hausnummer"
        disabled={readOnly}
        //rules={[{required: true, message: 'Please enter the street number'}]}
      />
      <TextField
        name="addressZip"
        type="text"
        value={address.addressZip}
        onChange={handleJumbleInputChange}
        title="Postleitzahl"
        disabled={readOnly}
        //rules={[{required: true, message: 'Please enter zip code'}]}

      />
      <TextField
        name="addressCity"
        type="text"
        value={address.addressCity}
        onChange={handleJumbleInputChange}
        title="Stadt"
        disabled={readOnly}
      />
      <TextField
        name="addressCountry"
        type="text"
        value={address.addressCountry}
        onChange={handleJumbleInputChange}
        title="Land"
        disabled={readOnly}
      />
    </>
  )
}
