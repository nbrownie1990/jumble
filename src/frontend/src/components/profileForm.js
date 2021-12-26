import TextField from './textField'
import TextArea from './textArea'
import React, {useState} from 'react'
import {Popup} from "react-easy-popup";
import 'react-easy-popup/dist/react-easy-popup.min.css';
import {Link} from "react-router-dom";
import Dropzone from "./dropzone";


export default function ProfileForm({
user,
handleProfileInputChange,
handleEditProfile,
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
            <div className="img-wrapper">
              <Dropzone/>
              {user.userImage ?
                  <img
                      className="rounded-circle p-md-3 profile-img"
                      name="userImage"
                      src={user.userImage}
                      alt="This is a profile"
                  /> :
                  <img
                      className="rounded-circle user-img "
                      src="https://images.unsplash.com/photo-1608155686393-8fdd966d784d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="Profile"
                  />
              }
              {/*<Link*/}
              {/*    to={`/user/edit`}*/}
              {/*    className="btn edit-btn"*/}
              {/*    type="button"*/}
              {/*    data-toggle="tooltip"*/}
              {/*    title="Edit"*/}
              {/*>*/}
              {/*  <i className="fas fa-pen ps-2 pb-1"></i>*/}
              {/*</Link>*/}
            </div>
            <span className="font-weight-bold h1">{user.username}</span>
          </div>
        </div>

        <div className="col-md-6 d-flex flex-column p-3 py-5">
        <h2 className="text-right px-4">Edit your profile</h2>

        {/*<div className="row mt-2">*/}
              {/*  <div className="col-md-12">*/}
              {/*    <label className="labels">Nutzername:</label>*/}
              {/*    <TextField*/}
              {/*        class="font-weight-bold h1"*/}
              {/*        disabled={readOnly}*/}
              {/*        title="Nutzername"*/}
              {/*        name="username"*/}
              {/*        type="text"*/}
              {/*        value={user.username}*/}
              {/*        onChange={handleProfileInputChange}*/}
              {/*    />*/}
              {/*  </div>*/}
              {/*</div>*/}
              <div className="row mt-3">
                <div className="col-md-10 px-4">
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
                <div className="col-md-10 px-4">
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
          <div className="col-md-12">
            <div className="p-3">
              <div className="d-flex flex-column align-items-center text-center">
                <div className="form-group col-md-10">
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
                          <button
                              className="btn btn-primary profile-button mb-5 m-3 mb-md-2"
                              type="button"
                              onClick={() => handleSaveProfileChanges(user.id, user)}
                          >
                            <i className="fas fa-save"></i> Save Profile
                          </button>
                            <button className="btn btn-warning mb-5 mb-md-2 m-3"
                                    type="button"
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

