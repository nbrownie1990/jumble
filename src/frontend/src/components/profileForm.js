import TextField from './textField'
import TextArea from './textArea'
import React from 'react'


export default function ProfileForm({
mode,
user,
handleProfileInputChange,
handleEditProfile,
handleSaveProfileChanges,
handleCancel,
handleDeleteUser,
readOnly,
}) {

    return (
        <React.Fragment>
          <div className="col-md-4 border-right">
            <div className="p-3 py-md-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="text-right">Edit your profile</h2>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">Nutzername:</label>
                  <TextField
                      disabled={readOnly}
                      title="Nutzername"
                      name="username"
                      type="text"
                      value={user.username}
                      onChange={handleProfileInputChange}
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">E-Mail:</label>
                  <TextField
                      title="Email"
                      disabled={readOnly}
                      name="email"
                      type="text"
                      value={user.email}
                      onChange={handleProfileInputChange} />
                  <span id="mailHelpInline" className="form-text">
                  Hier eine valide E-Mail-Adresse eintragen.
                </span>
                </div>

                {/*Passwort : Hier muss noch ein double-check o.ä. eingefügt werden*/}
                <div className="col-md-12">
                  <label className="labels">Passwort:</label>
                  <TextField
                      title="Passwort"
                      disabled={readOnly}
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
          </div>

          <div className="col-md-4 border-right">
            <div className="p-3 py-md-5">
              <div className="d-flex flex-column align-items-center text-center">
                <div className="form-group col-12">
                  <label className="labels mb-2">Erzähl uns etwas von dir</label>
                  <TextArea
                      rows="10"
                      disabled={readOnly}
                      title="Erzähl etwas von dir"
                      name="userText"
                      type="text"
                      value={user.userText}
                      onChange={handleProfileInputChange}/>
                  <div className="mt-5 text-center">
                    {/*{mode === 'new' && (*/}
                    {/*    <button*/}
                    {/*        className="btn btn-primary profile-button mb-5 m-3"*/}
                    {/*        type="button"*/}
                    {/*       // onClick={() => handleSaveProfile(user.username)}*/}
                    {/*    >*/}
                    {/*      <i className="fas fa-save"></i> Save Profile*/}
                    {/*    </button>*/}
                    {/*)}*/}
                    {/*{readOnly && (*/}
                    {/*    <button*/}
                    {/*        className="btn btn-primary profile-button mb-5 m-3"*/}
                    {/*        type="button"*/}
                    {/*        onClick={() => handleEditProfile(user)}*/}
                    {/*    >*/}
                    {/*      <i className="fas fa-pen"></i> Edit Profile*/}
                    {/*    </button>*/}
                    {/*)}*/}
                    {/*{mode === 'edit' && (*/}
                        <>
                          <button
                              className="btn btn-primary profile-button mb-5 m-3"
                              type="button"
                              onClick={() => handleSaveProfileChanges(user)}
                          >
                            <i className="fas fa-save"></i> Save Profile
                          </button>
                          <button
                              className="btn btn-warning mb-5 m-3"
                              type="button"
                              onClick={() => handleDeleteUser(user)}
                          >
                            <i className="fas fa-trash"></i> Delete Profile
                          </button>
                        </>
                    {/*)}*/}
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => handleCancel()}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
    )
}

