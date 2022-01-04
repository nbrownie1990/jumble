import React from 'react'
import { Link } from 'react-router-dom'
import DateField from './dateField'
import TextField from './textField'
import TextArea from './textArea'
import AddressForm from './addressForm'
import SelectField from './selectField'
import ImageDropzone from "./imageDropzone";

export default function JumbleForm({
  mode,
  onDrop,
  jumble, setJumble, url, setUrl,
  categories,
  handleJumbleInputChange,
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
              <ImageDropzone
                  jumble={jumble}
                  setJumble={setJumble}
                  url={url}
                  setUrl={setUrl}
                  onDrop={onDrop}
                  handleJumbleInputChange={handleJumbleInputChange}
                  mode="jumble"
              />
            </div>
            <span className="font-weight-bold mt-2 mb-3">{jumble.jumbleName}</span>

            <label className="labels">Beschreibung</label>
            <TextArea
              name="jumbleText"
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
              {mode === 'new' && (
              <h2 className="text-right">Erstelle ein Jumble</h2>
              )}
              {mode === 'edit' && (
                  <h2 className="text-right">Bearbeite das Jumble</h2>
              )}
            </div>
            <div className="row mt-2">
              <div className="col-md-12">
                <label className="labels">Jumble-Name</label>
                <TextField
                  name="jumbleName"
                  title="Name"
                  type="text"
                  value={jumble.jumbleName}
                  onChange={handleJumbleInputChange}
                  disabled={readOnly}
                  rules={[{required: true, message: 'Please enter jumble name'}]}
                />
              </div>
              <div className="col-md-12">
                <label className="labels mt-3">Jumble-Category</label>
                <br />
                <SelectField
                  name="category"
                  categories={categories}
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
                  name="address"
                  jumble={jumble}
                  handleJumbleInputChange={handleJumbleInputChange}
                  readOnly={false}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Termin</label>
                <DateField
                  name="jumbleDate"
                  title="Termin"
                  type="text"
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
                  name="jumbleTime"
                  title=" z.B. 9-16 Uhr"
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
                  name="jumbleWebsite"
                  title="Website"
                  type="text"
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
                className="btn btn-primary profile-button mb-5 mb-md-2 m-3"
                type="button"
                onClick={() => handleSaveNewJumble(jumble)}

                  // onClick={() => handleSaveNewJumble(jumble, jumble.address)}
              >
                <i className="fas fa-save"></i> Save Jumble
              </button>
            )}
            {mode === 'edit' && (
              <>
                <button
                  className="btn btn-primary profile-button mb-5 mb-md-2 m-3"
                  type="button"
                  onClick={() => handleSaveJumbleChanges(jumble.jumbleId, jumble)}
                >
                  <i className="fas fa-save"></i> Save Jumble
                </button>
                <button
                  type="button"
                  className="btn btn-warning mb-5 mb-md-2 m-3"
                  onClick={() => handleDeleteJumble(jumble.jumbleId)}
                >
                  <i className="fas fa-trash"></i> Delete Jumble
                </button>
              </>
            )}
            <button
              type="button"
              className="btn btn-outline-primary mb-5 mb-md-2 m-3"
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
