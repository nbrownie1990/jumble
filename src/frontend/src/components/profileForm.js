import TextField from './textField'
import TextArea from './textArea'
import React, {useState} from 'react'
import {Popup} from "react-easy-popup";
import 'react-easy-popup/dist/react-easy-popup.min.css';
import ImageDropzone from "./imageDropzone";


export default function ProfileForm({
user, setUser, url, setUrl, onDrop,
handleProfileInputChange,
handleSaveProfileChanges,
handleCancel,
handleDeleteUser,
readOnly,
})
{
  const [visible, setVisible] = useState(false);


  return (

      <form as="form" className="row">
      <div className="col-md-6">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <h2 className="text-right mt-5 mt-md-0">Bearbeite dein Profil</h2>
            <div className="img-wrapper">
              <ImageDropzone
                  onDrop={onDrop}
                  url={url}
                  setUrl={setUrl}
                  user={user}
                  setUser={setUser}
                  mode="user"
                  handleProfileInputChange={handleProfileInputChange}
              />
            </div>
            <span className="font-weight-bold h1">{user.username}</span>
          </div>
        </div>

        <div className="col-md-6 d-flex p-3 py-md-5">
              <div className="row mt-3">
                <div className="col-md-10 px-4 mt-md-5">
                  <label className="labels">E-Mail:</label>
                  <TextField
                      title="Email"
                      placeholder="Email-Addresse"
                      disabled={readOnly}
                      name="email"
                      type="text"
                      value={user.email}
                      onChange={handleProfileInputChange} />
                  <span id="mailHelpInline" className="form-text">
                  Hier eine valide E-Mail-Adresse eintragen.
                </span>
                </div>

{/* TODO: Passwort : Hier muss noch ein double-check o.ä. eingefügt werden*/}
                <div className="col-md-10 px-4">
                  <label className="labels text-warning">Hier entsteht noch die Möglichkeit ein Passwort zu ändern:</label>
                  <TextField
                      title="Passwort"
                      placeholder="Passwort"
                      name="password"
                      type="password"
                      value={user.password}
                      onChange={handleProfileInputChange} />
                  <span id="passwordHelpInline" className="form-text">
                  Muss zwischen 8 und 20 Zeichen haben.
                </span>
                </div>
              </div>
        </div>
          <div className="col-md-12">
            <div className="p-3">
              <div className="d-flex flex-column align-items-center text-center">
                <div className="form-group col-md-10">
                  <label className="labels mb-2">Erzähl uns etwas von dir</label>
                  <TextArea
                      rows="10"
                      disabled={readOnly}
                      placeholder="Erzähl uns in ein paar Sätzen etwas von dir"
                      title="Erzähl uns etwas von dir"
                      name="userText"
                      type="text"
                      value={user.userText}
                      onChange={handleProfileInputChange}/>
                  <div className="mt-5 text-center">
                          <button
                              className="btn btn-primary profile-button mb-5 m-3 mb-md-2"
                              type="button"
                              aria-label="save button"
                              onClick={() => handleSaveProfileChanges(user.id, user)}
                          >
                            <i className="fas fa-save"></i> Save Profile
                          </button>
                            <button className="btn btn-warning mb-5 mb-md-2 m-3"
                                    type="button"
                                    aria-label="delete button"
                                    onClick={() => setVisible(true)}>
                              <i className="fas fa-trash"></i> Delete Profile</button>
                            <Popup maskClosable visible={visible} position="center"
                                   onClose={() => setVisible(false)}>
                              <div className="m-5">
                                Wenn du wirklich dein Profil löschen möchtest,
                                wirst du mit dem Klick auf diesen Button automatisch
                                ausgeloggt und dein Profil wird unwideruflich gelöscht.
                                <div className="m-5">
                                <button
                                    className="btn btn-warning mb-5 m-3 mb-md-2"
                                    type="button"
                                    aria-label="delete button"
                                    onClick={() => handleDeleteUser(user.id)}
                                >
                                  <i className="fas fa-trash"></i>
                                  Delete Profile
                                </button>
                              </div>
                              </div>
                            </Popup>
                    <button
                        type="button"
                        aria-label="cancel button"
                        className="btn btn-outline-primary mb-5 m-3 mb-md-2"
                        onClick={() => handleCancel()}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </form>
    )
}

