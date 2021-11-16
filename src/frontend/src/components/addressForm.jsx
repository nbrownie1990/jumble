import TextField from './textField'
import React, {useState} from 'react'

export default function AddressForm({
  address,
  handleJumbleInputChange,
  readOnly,
}){

  return (
    <>
      <TextField
        name="street"
        placeholder="Straße"
        type="text"
        value={address}
        onChange={handleJumbleInputChange}
        title="Straße"
        disabled={readOnly}
        rules={[{required: true, message: 'Please enter a address'}]}
      />
      <TextField
        name="number"
        placeholder="Hausnr."
        type="text"
        value={address.number}
        onChange={handleJumbleInputChange}
        title="Hausnummer"
        disabled={readOnly}
        rules={[{required: true, message: 'Please enter the street number'}]}
      />
      <TextField
        name="zip"
        placeholder="Postleitzahl"
        type="text"
        value={address.zip}
        onChange={handleJumbleInputChange}
        title="Postleitzahl"
        disabled={readOnly}
        rules={[{required: true, message: 'Please enter zip code'}]}

      />
      <TextField
        name="city"
        placeholder="Stadt"
        type="text"
        value={address.city}
        onChange={handleJumbleInputChange}
        title="Stadt"
        disabled={readOnly}
      />
      <TextField
        name="country"
        placeholder="Land"
        type="text"
        value={address.country}
        onChange={handleJumbleInputChange}
        title="Land"
        disabled={readOnly}
      />
    </>
  )
}
