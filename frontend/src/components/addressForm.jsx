import TextField from './textField'
import React from 'react'

export default function AddressForm({
  address,
  handleJumbleInputChange,
  readOnly,
}) {
  return (
    <>
      <TextField
        name="street"
        placeholder="Straße"
        type="text"
        value={address.street}
        onChange={handleJumbleInputChange}
        title="Straße"
        disabled={readOnly}
      />
      <TextField
        name="number"
        placeholder="Hausnr."
        type="text"
        value={address.number}
        onChange={handleJumbleInputChange}
        title="Hausnummer"
        disabled={readOnly}
      />
      <TextField
        name="zip"
        placeholder="Postleitzahl"
        type="text"
        value={address.zip}
        onChange={handleJumbleInputChange}
        title="Postleitzahl"
        disabled={readOnly}
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
