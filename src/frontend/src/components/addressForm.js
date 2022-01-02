import TextField from './textField'
import React from 'react'

export default function AddressForm({
  handleAddressInputChange,
  readOnly,
  jumble
}){


  return (
    <>
      <TextField
        name="addressStreet"
        type="text"
        value={jumble.address?.addressStreet}
        onChange={handleAddressInputChange}
        title="Straße"
        disabled={readOnly}
        //rules={[{required: true, message: 'Please enter a address'}]}
      />
      <TextField
        name="addressNumber"
        type="text"
        value={jumble.address?.addressNumber}
        onChange={handleAddressInputChange}
        title="Hausnummer"
        disabled={readOnly}
        //rules={[{required: true, message: 'Please enter the street number'}]}
      />
      <TextField
        name="addressZip"
        type="text"
        value={jumble.address?.addressZip}
        onChange={handleAddressInputChange}
        title="Postleitzahl"
        disabled={readOnly}
        //rules={[{required: true, message: 'Please enter zip code'}]}

      />
      <TextField
        name="addressCity"
        type="text"
        value={jumble.address?.addressCity}
        onChange={handleAddressInputChange}
        title="Stadt"
        disabled={readOnly}
      />
      <TextField
        name="addressCountry"
        type="text"
        value={jumble.address?.addressCountry}
        onChange={handleAddressInputChange}
        title="Land"
        disabled={readOnly}
      />
    </>
  )
}
