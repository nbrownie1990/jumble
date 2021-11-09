import TextField from './textField'
import TextArea from './textArea'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileForm({}) {
  return (
    <React.Fragment>
      <div className="col-md-4 border-right">
        <div className="p-3 py-md-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="text-right">Edit your profile</h2>
          </div>
          <div className="row mt-2">
            <div className="col-md-12">
              <label className="labels">Nutzername</label>
              <TextField
                name="username"
                value=""
                onChange=""
                title="Name"
                type="text"
                disabled=""
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-12">
              <label className="labels">E-Mail:</label>
              <TextField
                name="email"
                value=""
                onChange=""
                title="Email"
                type="text"
                placeholder="Email"
                disabled=""
              />
              <span id="mailHelpInline" class="form-text">
                Hier eine valide E-Mail-Adresse eintragen.
              </span>
            </div>

            <div className="col-md-12">
              <label className="labels">Passwort</label>
              <TextField type="text" placeholder="Passwort" value="*******" />
              <span id="passwordHelpInline" class="form-text">
                Muss zwischen 8 und 20 Zeichen haben.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 border-right">
        <div className="p-3 py-md-5">
          <div className="d-flex flex-column align-items-center text-center">
            <div className="form-group col-12">
              <label className="labels mb-2">Erzähl uns etwas von dir</label>
              <TextArea
                rows="10"
                placeholder="Erzähl etwas von dir!"
                value="Hallo Ihr Lieben! Ich mache regelmäßig Flohmärkte mit, also kommt vorbei! Pieces from all over the world - picked and cared with love for you. ♥️"
              ></TextArea>
              <div className="mt-5 text-center">
                <Link
                  to={`/home`}
                  className="btn btn-primary profile-button m-3"
                  type="button"
                >
                  <i class="fas fa-save"></i> Save Profile
                </Link>
                <Link
                  to={`/user/edit`}
                  className="btn btn-warning m-3"
                  type="button"
                  data-toggle="tooltip"
                  title="Delete Profile"
                >
                  <i class="fas fa-trash"></i> Delete Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
