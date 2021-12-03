import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from '../../components/textField'
//import { useAuth } from '../../auth/AuthProvider'
import {initialLoginState} from "../../services/stateService";
import {useNavigate} from "react-router";

export default function Login() {
  //const { user, login } = useAuth()
  const [credentials, setCredentials] = useState(initialLoginState)
  const [error, setError] = useState()
  const navigate = useNavigate()

  const handleCredentials = e => {
    setCredentials({
      ...credentials,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   setError()
  //   login(credentials)
  //     .then(() => navigate('/home'))
  //     .catch(error => {
  //       setError(error);
  //     })
  // }

  const handleToSignUp = () => {
    navigate('/signup');
  }

  return (
    <main className="d-flex m-md-5 mt-5 mb-5">
      <section className="container w-100 h-100 p-3 flex-column ">
        <div className="container h-100">
          <div className="row justify-content-center h-100">
            <div className="card-wrapper align-self-center col-md-8 col-12 ">
              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">Login</h4>
                  <form
                    //onSubmit={handleSubmit}
                    method="POST"
                    className="my-login-validation"
                    noValidate=""
                  >
                    <div className="form-group">
                      <label htmlFor="text">Nutzername</label>
                      <TextField
                        value={credentials.username}
                        onChange={handleCredentials}
                        name="username"
                        type="text"
                        className="form-control"
                        required
                        autoFocus
                      />
                      {error && <p>Email ungültig</p>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Passwort </label>
                      <TextField
                        value={credentials.password}
                        onChange={handleCredentials}
                        type="password"
                        name="password"
                        className="form-control"
                        name="password"
                        required
                        data-eye
                      />
                      <div className="invalid-feedback">
                        Password ist erforderlich
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="custom-checkbox custom-control">
                        <input
                          type="checkbox"
                          name="remember"
                          id="remember"
                          className="custom-control-input"
                        />
                        <label
                          htmlFor="remember"
                          className="custom-control-label"
                        >
                          Remember Me
                        </label>
                        <Link className="nav-link" to="/forgot">
                          Passwort vergessen?
                        </Link>
                      </div>
                    </div>

                    <div className="form-group text-center m-0">
                      <br />
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Login
                      </button>
                    </div>
                    <div className="mt-4 text-center">
                      Noch keinen Account?
                      <div onClick={handleToSignUp} className="nav-link">
                        {' '}
                        Sign up
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
