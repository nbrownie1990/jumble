import React, {useState} from 'react'
import DateField from './dateField'
import TextField from './textField'
import TextArea from './textArea'
import AddressForm from './addressForm'
import SelectField from './selectField'
import ImageDropzone from "./imageDropzone";
import {Popup} from "react-easy-popup";
import 'react-easy-popup/dist/react-easy-popup.min.css';

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
  const [visible, setVisible] = useState(false);

  return (
    <>
      <form as="form" className="row">
        <div className="col-md-6">
          <div className="d-flex flex-column align-items-center text-center p-3">
                {mode === 'new' && (
                <h2 className="text-right mt-5 mt-md-0">Erstelle ein Jumble</h2>
                )}
                {mode === 'edit' && (
                    <h2 className="text-right mt-5 mt-md-0">Bearbeite das Jumble</h2>
                )}
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
              placeholder="Bitte beschreibe diesen Jumble"
              type="text"
              rows="5"
              value={jumble.jumbleText}
              onChange={handleJumbleInputChange}
              disabled={readOnly}
              rules={[{required: true, message: 'Please enter a description'}]}
            />
            <span id="dateHelpInline" className="form-text">
              Jumbles sind Orte f??r dein Ausrangiertes! Es geht um:
              Food-Sharing, Flea Markets, Clothing Donations & Second-Hand in
              deiner N??he!
            </span>
          </div>
        </div>

        <div className="col-md-6 px-4">
          <div className="p-md-3 py-5">
            <div className="row mt-2">
              <div className="col-11 m-2">
                <label className="labels">Jumble-Name</label>
                <TextField
                  name="jumbleName"
                  placeholder="Name des Jumbles"
                  title="Name"
                  type="text"
                  value={jumble.jumbleName}
                  onChange={handleJumbleInputChange}
                  disabled={readOnly}
                  rules={[{required: true, message: 'Please enter jumble name'}]}
                />
              </div>
              <div className="col-11 m-2">
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
              <div className="col-11 m-2">
                <label className="labels">Jumble-Adresse</label>
                <AddressForm
                  name="address"
                  jumble={jumble}
                  handleJumbleInputChange={handleJumbleInputChange}
                  readOnly={false}
                />
              </div>
{/*TODO: implement Datepicker and configure Backend Date-Format: toLocalDateString()*/}
              <div className="col-11 m-2">
                <label className="labels">Termin</label>
                <DateField
                  name="jumbleDate"
                  placeholder="z.B. jeden Sonntag oder 01.04.22"
                  title="Termin"
                  type="text"
                  value={jumble.jumbleDate}
                  onChange={handleJumbleInputChange}
                  disabled={readOnly}
                />
                <span id="dateHelpInline" className="form-text">
                  Wann findet das n??chste Jumble statt?
                </span>
              </div>
              <div className="col-11 m-2">
                <label className="labels">??ffnungszeiten</label>
                <TextField
                  name="jumbleTime"
                  placeholder="z.B. 9-16 Uhr"
                  title="z.B. 9-16 Uhr"
                  type="text"
                  value={jumble.jumbleTime}
                  onChange={handleJumbleInputChange}
                  disabled={readOnly}
                />
                <span id="timeHelpInline" className="form-text">
                  Wie sind die ??ffnungszeiten des Jumbles?
                </span>
              </div>
              <div className="col-11 m-2">
                <label className="labels"> Website</label>
                <TextField
                  name="jumbleWebsite"
                  placeholder="Jumble-Website"
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
                aria-label="save button"
                onClick={() => handleSaveNewJumble(jumble)}
              >
                <i className="fas fa-save"></i> Save Jumble
              </button>
            )}
            {mode === 'edit' && (
              <>
                <button
                  className="btn btn-primary profile-button mb-5 mb-md-2 m-3"
                  type="button"
                  aria-label="save changes button"
                  onClick={() => handleSaveJumbleChanges(jumble.jumbleId, jumble)}
                >
                  <i className="fas fa-save"></i> Save Jumble
                </button>
                <button className="btn btn-warning mb-5 mb-md-2 m-3"
                        type="button"
                        aria-label="delete button"
                        onClick={() => setVisible(true)}>
                  <i className="fas fa-trash"></i> Delete Jumble</button>
                <Popup maskClosable visible={visible} position="center"
                       onClose={() => setVisible(false)}>
                  <div className="m-5">
                   M??chtest du diesen Jumble wirklich unwideruflich l??schen?
                    <div className="m-5">
                      <button
                          className="btn btn-warning mb-5 m-3 mb-md-2"
                          type="button"
                          aria-label="really delete button"
                          onClick={() => handleDeleteJumble(jumble.jumbleId)}
                      >
                        <i className="fas fa-trash"></i>
                        Delete Jumble
                      </button>
                    </div>
                  </div>
                </Popup>
              </>
            )}
            <button
              type="button"
              aria-label="cancel button"
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
