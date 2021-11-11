import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import DateField from './dateField'
import TextField from './textField'
import TextArea from './textArea'
import Address from './address'
import Select from './select'

export default function JumbleForm({
  mode,
  jumble,
  handleEditJumble,
  handleSaveNewJumble,
  handleSaveJumbleChanges,
  handleTextInputChange,
  handleNameInputChange,
  handleCategoryInputChange,
  handleDateInputChange,
  handleTimeInputChange,
  handleCancel,
  handleDeleteJumble,
  readOnly,
}) {
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
            rows="5"
            placeholder=" Bitte beschreibe diesen Jumble"
            name="text"
            type="text"
            value={jumble.text}
            onChange={handleTextInputChange}
            disabled={readOnly}
          />
          <span id="dateHelpInline" className="form-text">
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
              <TextField
                placeholder="z.B. Flohschanze"
                name="name"
                type="text"
                value={jumble.jumble_name}
                onChange={handleNameInputChange}
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Jumble-Category</label>
              <Select
                placeholder=""
                name="category"
                type="select"
                value={jumble.jumble_category}
                onChange={handleCategoryInputChange}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-10 col-8 m-2">
              <label className="labels">Jumble-Adresse</label>
              <Address
                // address={address}
                // handleAddressInputChange={handleAddressInputChange}
                readOnly={false}
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Termin</label>
              <DateField
                placeholder="Termin"
                name="date"
                type="date"
                value={jumble.jumble_date}
                onChange={handleDateInputChange}
              />
              <span id="dateHelpInline" className="form-text">
                Wann findet das nächste Jumble statt?
              </span>
            </div>
            <div className="col-md-12">
              <label className="labels">Öffnungszeiten</label>
              <TextField
                type="text"
                placeholder=" z.B. 9-16 Uhr"
                name="time"
                value={jumble.jumble_time}
                onChange={handleTimeInputChange}
              />

              <span id="timeHelpInline" className="form-text">
                Wie sind die Öffnungszeiten des Jumbles?
              </span>
            </div>
            <div className="col-md-12">
              <label className="labels"> Website</label>
              <TextField
                type="url"
                placeholder="z.B. www.flohschanze.de"
                name="website"
                value={jumble.jumble_website}
                onChange={handleNameInputChange}
              />
            </div>
          </div>
        </div>
        <div className="mt-2 mt-md-5 text-center">
          {mode === 'new' && (
            <Link
              to={`/categories/category`}
              className="btn btn-primary profile-button mb-5 m-3"
              type="button"
              onClick={() => handleSaveNewJumble()}
            >
              <i className="fas fa-save"></i> Save Jumble
            </Link>
          )}
          {readOnly && (
            <Link
              to={`/categories/category`}
              className="btn btn-primary profile-button mb-5 m-3"
              type="button"
              onClick={() => handleEditJumble(jumble.id)}
            >
              <i className="fas fa-pen"></i> Edit Jumble
            </Link>
          )}
          {mode === 'edit' && (
            <>
              <Link
                to={`/categories/category`}
                className="btn btn-primary profile-button mb-5 m-3"
                type="button"
                onClick={() => handleSaveJumbleChanges()}
              >
                <i className="fas fa-save"></i> Save Jumble
              </Link>
              <Link
                to={`/categories/category`}
                className="btn btn-warning mb-5 m-3"
                type="button"
                onClick={() => handleDeleteJumble()}
              >
                <i className="fas fa-trash"></i> Delete Jumble
              </Link>
            </>
          )}
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}
