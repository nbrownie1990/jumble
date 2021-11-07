import React from 'react'
import { Link } from 'react-router-dom'
// import { useAuth } from '../../auth/AuthProvider'
// import {postNewUser} from "../../services/authService";

// const initialState = {
//   username: '',
//   email: '',
//   password: '',
// }

export default function SignUp() {
  // const { login, user } = useAuth()
  // const [credentials, setCredentials] = useState(initialState)
  // const [passwordCheck, setPasswordCheck] = useState('')
  // const [error, setError] = useState()
  // const [loading, setLoading] = useState(false)
  // const history = useHistory()

  // const handleCredentials = event => {
  //     setCredentials({
  //         ...credentials,
  //         [event.target.name]: event.target.value,
  //     })
  // }

  // const handlePasswordCheck = event => {
  //     setPasswordCheck(event.target.value)
  // }

  // const handleSubmit = event => {
  //     event.preventDefault()
  //     setLoading(true)
  //     setError()
  //     postNewUser(credentials)
  //         .then(() => login(credentials))
  //         .then(() => history.push('/profile/view'))
  //         .catch(error => {
  //             setError(error)
  //             setLoading(false)
  //         })
  // }

  return (
    <React.Fragment>
      <main className="m-5 mb-5 h-100">
        <section className="container w-100 h-100 px-4 px-lg-5 mt-5">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper align-self-center col-md-8 col-12 ">
                <div className="card fat">
                  <div className="card-body">
                    <h4 className="card-title">Sign Up</h4>
                    <form
                      // as="form" onSubmit={handleSubmit}
                      className="my-login-validation"
                    >
                      <div className="form-group">
                        <label for="name">Name</label>
                        <input
                          name="username"
                          // value={credentials.username}
                          className="form-control"
                          // onChange={handleCredentials}
                          title="Username"
                          required
                          autofocus
                        />
                        <div className="invalid-feedback">
                          Wie ist dein Name?
                        </div>
                      </div>

                      <div className="form-group">
                        <label for="email">E-Mail Adresse</label>
                        <input
                          name="email"
                          //  value={credentials.email}
                          className="form-control"
                          //  onChange={handleCredentials}
                          title="Email"
                          required
                        />
                        <div className="invalid-feedback">
                          Deine Emailadresse ist ungültig
                        </div>
                      </div>

                      <div className="form-group">
                        <label for="password">Passwort</label>
                        <input
                          name="password"
                          type="password"
                          // value={credentials.password}
                          className="form-control"
                          // onChange={handleCredentials}
                          title="Password"
                          required
                          data-eye
                        />
                        {/* <TextField
                        name="passwordCheck"
                        value={passwordCheck}
                        onChange={handlePasswordCheck}
                        title="Retype Password"
                        type="password"
                      /> */}
                        <div className="invalid-feedback">
                          Passwort ist erforderlich
                        </div>
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
                          <label for="agree" className="custom-control-label">
                            Ich stimme den {''}
                            <Link to="/impressum">Nutzungsbedingungen</Link>
                            {''} zu
                          </label>
                          <div className="invalid-feedback">
                            Du musst unseren Nutzungsbedingungen zustimmen
                          </div>
                        </div>
                      </div>

                      <div className="form-group m-0">
                        <br />
                        {/* {credentials.username && credentials.password
                        && passwordCheck === credentials.password && ( */}
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Sign up
                        </button>
                        {/* )} */}
                      </div>
                      <div className="mt-4 text-center">
                        Hast du bereits einen Account?
                        <Link className="nav-link" to="/login">
                          Login
                        </Link>
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
