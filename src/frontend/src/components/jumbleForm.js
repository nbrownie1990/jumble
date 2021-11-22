import React from 'react'
import { Link } from 'react-router-dom'
import DateField from './dateField'
import TextField from './textField'
import TextArea from './textArea'
import AddressForm from './addressForm'
import Select from './select'

export default function JumbleForm({
  mode,
  jumble,
  address,
  handleJumbleInputChange,
  handleEditJumble,
  handleSaveNewJumble,
  handleSaveJumbleChanges,
  handleCancel,
  handleDeleteJumble,
  readOnly,
}) {
  return (
    <>
      <form as="form" className="row">
        <div className="col-md-6">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <div className="img-wrapper mt-5 ">
              <img
                className="rounded-circle jumble-img"
                src={jumble.jumbleImage}
                alt="This is a jumble"
              />
              <Link
                to={`/jumbles/edit`}
                className="btn edit-btn"
                type="button"
                data-toggle="tooltip"
                title="Edit"
              >
                <i className="fas fa-pen ps-2 pb-1"></i>
              </Link>
            </div>
            <span className="font-weight-bold mt-2 mb-3">Bild des Jumbles</span>

            <label className="labels">Beschreibung</label>
            <TextArea
              name="text"
              placeholder=" Bitte beschreibe diesen Jumble"
              type="text"
              rows="5"
              value={jumble.jumbleText}
              onChange={handleJumbleInputChange}
              disabled={readOnly}
              rules={[{required: true, message: 'Please enter a description'}]}
            />
            <span id="dateHelpInline" className="form-text">
              Jumbles sind Orte für dein Ausrangiertes! Es geht um:
              Food-Sharing, Flea Markets, Clothing Donations & Second-Hand in
              deiner Nähe!
            </span>
          </div>
        </div>

        <div className="col-md-6 ">
          <div className="p-md-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="text-right">Erstelle ein Jumble</h2>
            </div>
            <div className="row mt-2">
              <div className="col-md-12">
                <label className="labels">Jumble-Name</label>
                <TextField
                  name="name"
                  placeholder="z.B. Flohschanze"
                  type="text"
                  value={jumble.jumbleName}
                  onChange={handleJumbleInputChange}
                  disabled={readOnly}
                  rules={[{required: true, message: 'Please enter jumble name'}]}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Jumble-Category</label>
                <Select className="form-control"
                  name="category"
                  value={jumble.category}
                  onChange={handleJumbleInputChange}
                  readOnly={readOnly}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-10 col-8 m-2">
                <label className="labels">Jumble-Adresse</label>
                <AddressForm
                  address={address}
                  handleJumbleInputChange={handleJumbleInputChange}
                  handleCancel={handleCancel}
                  handleSaveJumbleChanges={handleSaveJumbleChanges}
                  handleSaveNewJumble={handleSaveNewJumble}
                  handleDeleteJumble={handleDeleteJumble}
                  readOnly={false}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Termin</label>
                <DateField
                  name="date"
                  placeholder="Termin"
                  type="date"
                  value={jumble.jumbleDate}
                  onChange={handleJumbleInputChange}
                  disabled={readOnly}
                />
                <span id="dateHelpInline" className="form-text">
                  Wann findet das nächste Jumble statt?
                </span>
              </div>
              <div className="col-md-12">
                <label className="labels">Öffnungszeiten</label>
                <TextField
                  name="time"
                  placeholder=" z.B. 9-16 Uhr"
                  type="text"
                  value={jumble.jumbleTime}
                  onChange={handleJumbleInputChange}
                  disabled={readOnly}
                />
                <span id="timeHelpInline" className="form-text">
                  Wie sind die Öffnungszeiten des Jumbles?
                </span>
              </div>
              <div className="col-md-12">
                <label className="labels"> Website</label>
                <TextField
                  name="website"
                  placeholder="z.B. www.flohschanze.de"
                  type="url"
                  value={jumble.jumbleWebsite}
                  onChange={handleJumbleInputChange}
                  disabled={readOnly}
                />
              </div>
            </div>
          </div>
          <div className="mt-2 mt-md-5 text-center">
            {mode === 'new' && (
              <button
                className="btn btn-primary profile-button mb-5 m-3"
                type="button"
                onClick={() => handleSaveNewJumble()}
              >
                <i className="fas fa-save"></i> Save Jumble
              </button>
            )}
            {readOnly && (
              <button
                className="btn btn-primary profile-button mb-5 m-3"
                type="button"
                onClick={() => handleEditJumble(jumble.jumbleId)}
              >
                <i className="fas fa-pen"></i> Edit Jumble
              </button>
            )}
            {mode === 'edit' && (
              <>
                <button
                  className="btn btn-primary profile-button mb-5 m-3"
                  type="button"
                  onClick={() => handleSaveJumbleChanges()}
                >
                  <i className="fas fa-save"></i> Save Jumble
                </button>
                <button
                  className="btn btn-warning mb-5 m-3"
                  type="button"
                  onClick={() => handleDeleteJumble()}
                >
                  <i className="fas fa-trash"></i> Delete Jumble
                </button>
              </>
            )}
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => handleCancel()}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
