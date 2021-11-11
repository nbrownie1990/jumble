import TextField from './textField'
import React from 'react'

export default function Address(
  {
    // address,
    // handleAddressInputChange,
    // readOnly,
  }
) {
  return (
    <React.Fragment>
      <TextField
        name="street"
        // value={address.street}
        // onChange={handleAddressInputChange}
        title="Straße"
        placeholder="Straße"
        type="text"
        // disabled={readOnly}
      />
      <TextField
        name="number"
        // value={address.number}
        // onChange={handleAddressInputChange}
        title="Hausnummer"
        placeholder="Hausnr."
        type="text"
        // disabled={readOnly}
      />
      <TextField
        name="zip"
        // value={address.zip}
        // onChange={handleAddressInputChange}
        title="Postleitzahl"
        placeholder="Postleitzahl"
        type="text"
        // disabled={readOnly}
      />
      <TextField
        name="city"
        // value={address.city}
        // onChange={handleAddressInputChange}
        title="Stadt"
        placeholder="Stadt"
        type="text"
        // disabled={readOnly}
      />
      <TextField
        name="country"
        // value={address.country}
        // onChange={handleAddressInputChange}
        title="Land"
        placeholder="Land"
        type="text"
        // disabled={readOnly}
      />
    </React.Fragment>
  )
}
