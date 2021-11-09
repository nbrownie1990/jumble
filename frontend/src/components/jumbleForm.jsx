import DateField from './dateField'
import TextField from './textField'
import TextArea from './textArea'
import React from 'react'
import Address from './address'

export default function JumbleForm({}) {
  return (
    <React.Fragment>
      <div className="row mt-2">
        <div className="col-md-12">
          <label className="labels">Jumble-Name</label>
          <TextField type="text" placeholder="z.B. Flohschanze" value="" />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-10 col-8 m-2">
          <label className="labels">Jumble-Adresse</label>
          <Address />
        </div>

        <div className="col-md-12">
          <label className="labels">Termin</label>
          <DateField placeholder="Termin" />
          <span id="dateHelpInline" class="form-text">
            Wann findet das nächste Jumble statt?
          </span>
        </div>
        <div className="col-md-12">
          <label className="labels">Öffnungszeiten</label>
          <TextField type="text" placeholder=" z.B. 9-16 Uhr" value="" />

          <span id="timeHelpInline" class="form-text">
            Wie sind die Öffnungszeiten des Jumbles?
          </span>
        </div>
        <div className="col-md-12">
          <label className="labels"> Website</label>
          <TextField
            type="url"
            placeholder="z.B. www.flohschanze.de"
            value=""
          />
        </div>
      </div>
    </React.Fragment>
  )
}

// {mode === 'new' && (
//   <ButtonGroup>
//     <Button type="button" onClick={handleCancel}>
//       abbrechen
//     </Button>
//     <Button onClick={handleSaveNewAddress}> speichern </Button>
//   </ButtonGroup>
// )}
// {readOnly && (
//   <ButtonGroup>
//     <Button type="button" onClick={() => handleEditAddress(address.id)}>
//       bearbeiten
//     </Button>
//   </ButtonGroup>
// )}
// {mode === 'edit' && (
//   <ButtonGroup>
//     <Button type="button" onClick={handleCancel}>
//       abbrechen
//     </Button>
//     <Button
//       type="button"
//       onClick={() => handleSaveAddressChanges(address.id)}
//     >
//       Änderungen speichern
//     </Button>
//     <Button type="button" onClick={handleDeleteAddress}>
//       <Icon src={trash} />
//     </Button>
//   </ButtonGroup>
// )}
