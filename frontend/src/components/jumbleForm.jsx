import DateField from './dateField'
import TextField from './textField'
import TextArea from './textArea'
import React from 'react'

export default function JumbleForm({}) {
  return (
    <React.Fragment>
      <div className="row mt-2">
        <div className="col-md-12">
          <label className="labels">Jumble-Name</label>
          <TextField type="text" placeholder="Jumblename" value="Flohschanze" />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12">
          <label className="labels">Adresse</label>
          <TextField
            type="text"
            placeholder="Adresse"
            value=" Neuer Kamp 30, 20357 Hamburg"
          />
          <span id="placeHelpInline" class="form-text">
            Wo befindet sich das Jumble?
          </span>
        </div>

        <div className="col-md-12">
          <label className="labels">Termine</label>
          <DateField placeholder="Termine" />
          <span id="dateHelpInline" class="form-text">
            Wann findet das nächste Jumble statt?
          </span>
        </div>
        <div className="col-md-12">
          <label className="labels">Öffnungszeiten</label>
          <TextField
            type="time"
            placeholder="Öffnungszeiten"
            value="10-16 Uhr"
          />
          <span id="timeHelpInline" class="form-text">
            Wie sind die Öffnungszeiten des Jumbles?
          </span>
        </div>
        <div className="col-md-12">
          <label className="labels"> Website</label>
          <TextField
            type="url"
            placeholder="Website"
            value="www.flohschanze.de"
          />
        </div>
      </div>
    </React.Fragment>
  )
}
