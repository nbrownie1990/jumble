import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TextField from '../../components/textField'
import Error from '../../components/error'

import { useAuth } from '../../auth/AuthProvider'
import { postUser } from '../../services/apiService'

const initialState = {
  username: '',
  email: '',
  password: '',
}
export default function SignUp() {
  const { login } = useAuth()
  const [credentials, setCredentials] = useState(initialState)
  const [passwordCheck, setPasswordCheck] = useState('')
  const [error, setError] = useState()
  const navigate = useNavigate()

  const handleCredentials = e => {
    setCredentials({
      ...credentials,
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setError()
    postUser(credentials)
      .then(() => login(credentials))
      .then(() => navigate('/user/edit'))
      .catch(error => {
        setError(error)
      })
  }

  const handlePasswordCheck = event => {
    setPasswordCheck(event.target.value)
  }

  const handleToProfile = () => {
    navigate('/user/edit')
  }

  const handleToLogin = () => {
    navigate('/login')
  }

  return (
    <React.Fragment>
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
                      onSubmit={handleSubmit}
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
                        {error && (
                          <Error>Deine Emailadresse ist ungültig</Error>
                        )}
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
                        {error && <Error>Passwort ist erforderlich</Error>}
                      </div>

                      <div className="form-group">
                        <div className="custom-checkbox custom-control">
                          <input
                            type="checkbox"
                            name="agree"
                            id="agree"
                            className="custom-control-input"
                            required=""
                          />
                          <label
                            htmlFor="agree"
                            className="custom-control-label"
                          >
                            Ich stimme den {''}
                            <Link to="/impressum"> Nutzungsbedingungen</Link>
                            {''} zu
                          </label>
                          {error && (
                            <Error>
                              Du musst unseren Nutzungsbedingungen zustimmen
                            </Error>
                          )}
                        </div>
                      </div>

                      <div className="form-group text-center m-0">
                        <br />
                        {credentials.username &&
                          credentials.password &&
                          passwordCheck === credentials.password && (
                            <button
                              className="btn btn-primary btn-block"
                              onClick={handleToProfile}
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
    </React.Fragment>
  )
}
