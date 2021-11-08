import React from 'react'
import NavBar from '../../components/navbar'
import { Link } from 'react-router-dom'
import TextField from '../../components/textField'
import TextArea from '../../components/textArea'

const EditProfile = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className="m-md-5 m-3 mt-5 mb-5">
        <section className="container w-100 h-100 p-0 mt-5">
          <div className="container rounded bg-white">
            <div className="row">
              <div className="col-md-2 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img
                    className="rounded-circle p-md-3"
                    src="https://i.imgur.com/O1RmJXT.jpg"
                    width="110"
                    alt="This is a profile"
                  />
                  <Link
                    to={`/profileedit`}
                    className="btn"
                    type="button"
                    data-toggle="tooltip"
                    title="Edit"
                  >
                    <i class="fas fa-pen"></i>
                  </Link>
                  <span className="font-weight-bold">John Doe</span>
                </div>
              </div>
              <div className="col-md-5 border-right">
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
                      <TextField
                        type="text"
                        placeholder="Passwort"
                        value="*******"
                      />
                      <span id="passwordHelpInline" class="form-text">
                        Muss zwischen 8 und 20 Zeichen haben.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-5 border-right">
                <div className="p-3 py-md-5">
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="form-group col-12">
                      <label className="labels">Erzähl uns etwas von dir</label>
                      <TextArea
                        rows="10"
                        placeholder="Erzähl etwas von dir!"
                        value="Hallo Ihr Lieben! Ich mache regelmäßig Flohmärkte mit, also kommt vorbei! Pieces from all over the world - picked and cared with love for you. ♥️"
                      ></TextArea>
                    </div>
                    <div className="mt-5 text-center">
                      <button
                        className="btn btn-primary profile-button"
                        type="button"
                      >
                        Save Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}

export default EditProfile
