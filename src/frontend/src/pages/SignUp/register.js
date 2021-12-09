import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from '../../components/textField'
import {initialSignUpState} from "../../services/stateService";
import {useNavigate} from "react-router";
import {addNewUser} from "../../services/apiService";
import {useAuth} from "../../auth/AuthProvider";


export default function Register() {
 // const { login } = useAuth()
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState(initialSignUpState)
  const [passwordCheck, setPasswordCheck] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const [error, setError] = useState()

  const handleCredentials = e => {
    setCredentials({
      ...credentials,
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   setError()
  //   addNewUser(credentials)
  //     .then(() => login(credentials))
  //     .then(() => navigate('/user/new'))
  //     .catch(error => {
  //       setError(error)
  //     })
  // }

  const handlePasswordCheck = event => {
    setPasswordCheck(event.target.value)
  }

  const handleToLogin = () => {
    navigate('/login')
  }

  return (
    <main className="m-md-5 mt-5 mb-5 h-100">
      <section className="container w-100 h-100 px-4 px-lg-5 mt-5">
        <div className="container h-100">
          <div className="row justify-content-md-center h-100">
            <div className="card-wrapper align-self-center col-md-8 col-12 ">
              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">Sign Up</h4>
                  <form
                    as="form"
                    //onSubmit={() => handleSubmit()}
                    className="my-login-validation"
                  >
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <TextField
                        name="username"
                        title="Username"
                        placeholder="Nutzername"
                        value={credentials.username}
                        className="form-control"
                        onChange={handleCredentials}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">E-Mail Adresse</label>
                      <TextField
                        name="email"
                        title="Email (optional)*"
                        placeholder="Email"
                        value={credentials.email}
                        className="form-control"
                        onChange={handleCredentials}
                        required
                      />
                      <label className="text-info">
                        * um dein Passwort ggf. zurücksetzen zu können
                      </label>
                      {error && <p>Deine Emailadresse ist ungültig</p>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Passwort</label>
                      <TextField
                        name="password"
                        type="password"
                        title="Password"
                        placeholder="Passwort"
                        value={credentials.password}
                        className="form-control"
                        onChange={handleCredentials}
                        required
                        data-eye
                      />
                      <TextField
                        name="passwordCheck"
                        value={passwordCheck}
                        onChange={handlePasswordCheck}
                        placeholder="Passwort erneut eingeben"
                        title="Retype Password"
                        type="password"
                      />
                      {error && <p>Passwort ist erforderlich</p>}
                    </div>

                    <div className="form-group">
                      <div className="custom-checkbox custom-control">
                        <input
                          type="checkbox"
                          name="agree"
                          value={checkbox}
                          onChange={e => setCheckbox(e.currentTarget.checked)}
                          id="agree"
                          className="custom-control-input"
                          required={true}
                        />
                        <label htmlFor="agree" className="custom-control-label">
                          Ich stimme den {''}
                          <Link to="/impressum"> Nutzungsbedingungen</Link>
                          {''} zu
                        </label>
                        {error && (
                          <p>
                            Du musst unseren Nutzungsbedingungen zustimmen
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="form-group text-center m-0">
                      <br />
                      {credentials.username &&
                        credentials.password &&
                        passwordCheck === credentials.password && (
                          <button
                              type="submit"
                              name="submit"
                            className="btn btn-primary btn-block"
                          >
                            {' '}
                            Sign up
                          </button>
                        )}
                    </div>
                    <div className="mt-4 text-center">
                      Hast du bereits einen Account?
                      <div onClick={handleToLogin} className="nav-link">
                        {' '}
                        Login
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
