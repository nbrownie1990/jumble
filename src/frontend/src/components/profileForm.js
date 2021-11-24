import TextField from './textField'
import TextArea from './textArea'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProfileForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      text: ''
    }

    this.changeNameHandler = this.changeNameHandler.bind(this)
    this.changeEmailHandler = this.changeEmailHandler.bind(this)
    this.changePasswordHandler = this.changePasswordHandler.bind(this)
    this.changeTextHandler = this.changeTextHandler.bind(this)
  }

  changeNameHandler = e => {
    this.setState({ name: e.target.value })
  }

  changeEmailHandler = e => {
    this.setState({ email: e.target.value })
  }

  changePasswordHandler = e => {
    this.setState({ password: e.target.value })
  }
  changeTextHandler = e => {
    this.setState({ text: e.target.value })
  }

  render() {
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
                  placeholder="Nutzername"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.changeNameHandler}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">E-Mail:</label>
                <TextField
                  placeholder="Email"
                  name="email"
                  type="text"
                  value={this.state.email}
                  onChange={this.changeEmailHandler}
                />
                <span id="mailHelpInline" className="form-text">
                  Hier eine valide E-Mail-Adresse eintragen.
                </span>
              </div>

              <div className="col-md-12">
                <label className="labels">Passwort</label>
                <TextField
                  placeholder="Passwort"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.changePasswordHandler}
                />
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
                  placeholder="Erzähl etwas von dir"
                  name="text"
                  type="text"
                  value={this.state.text}
                  onChange={this.changeTextHandler}
                ></TextArea>
                <div className="mt-5 text-center">
                  <Link
                    to={`/user`}
                    className="btn btn-primary profile-button m-3"
                    type="button"
                  >
                    <i className="fas fa-save"></i> Save Profile
                  </Link>
                  {/* <Link
                  to={`/home`}
                  className="btn btn-warning m-3"
                  type="button"
                  data-toggle="tooltip"
                  title="Delete Profile"
                >
                  <i class="fas fa-trash"></i> Delete Profile
                </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ProfileForm
