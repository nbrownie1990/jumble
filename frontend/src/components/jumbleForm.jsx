import DateField from './dateField'
import TextField from './textField'
import TextArea from './textArea'
import React from 'react'
import Address from './address'
import { Link } from 'react-router-dom'
import Select from './select'

export default function JumbleForm({}) {
  state = {}
  return (
    <React.Fragment>
      <div className="col-md-6 border-right">
        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
          <div className="img-wrapper mt-5 ">
            <img
              className="rounded-circle jumble-img"
              src="https://www.deutschlandmalanders.com/wp-content/uploads/2020/10/Flohschanze-Flohmarkt-Schanzenviertel-Hamburg-1.jpg"
              alt="This is a jumble"
            />
            <Link
              to={`/jumble/edit`}
              className="btn edit-btn"
              type="button"
              data-toggle="tooltip"
              title="Edit"
            >
              <i class="fas fa-pen ps-2 pb-1"></i>
            </Link>
          </div>
          <span className="font-weight-bold mt-2 mb-3">Bild des Jumbles</span>

          <label className="labels">Beschreibung</label>
          <TextArea
            rows="5"
            placeholder=" Bitte beschreibe diesen Jumble"
          ></TextArea>
          <span id="dateHelpInline" class="form-text">
            Jumbles sind Orte für dein Ausrangiertes! Es geht um: Food-Sharing,
            Flea Markets, Clothing Donations & Second-Hand in deiner Nähe!
          </span>
        </div>
      </div>

      <div className="col-md-6 border-right">
        <div className="p-md-3 py-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="text-right">Erstelle ein Jumble</h2>
          </div>
          <div className="row mt-2">
            <div className="col-md-12">
              <label className="labels">Jumble-Name</label>
              <TextField type="text" placeholder="z.B. Flohschanze" value="" />
            </div>

            <div className="col-md-12">
              <label className="labels">Jumble-Category</label>
              <Select />
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
