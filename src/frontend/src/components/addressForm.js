import TextField from './textField'
import React from 'react'

export default function AddressForm({
  handleJumbleInputChange,
  readOnly,
  jumble
}){

  return (
    <>
      <TextField
        name="addressStreet"
        type="text"
        value={jumble.address?.addressStreet}
        onChange={handleJumbleInputChange}
        title="Straße"
        disabled={readOnly}
      />
      <TextField
        name="addressNumber"
        type="text"
        value={jumble.address?.addressNumber}
        onChange={handleJumbleInputChange}
        title="Hausnummer"
        disabled={readOnly}
      />
      <TextField
        name="addressZip"
        type="text"
        value={jumble.address?.addressZip}
        onChange={handleJumbleInputChange}
        title="Postleitzahl"
        disabled={readOnly}
      />
      <TextField
        name="addressCity"
        type="text"
        value={jumble.address?.addressCity}
        onChange={handleJumbleInputChange}
        title="Stadt"
        disabled={readOnly}
      />
      <TextField
        name="addressCountry"
        type="text"
        value={jumble.address?.addressCountry}
        onChange={handleJumbleInputChange}
        title="Land"
        disabled={readOnly}
      />
    </>
  )
}
