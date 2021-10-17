import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-md-center h-100">
          <div className="card-wrapper">
            <div className="card fat">
              <div className="card-body">
                <h4 className="card-title">Sign Up</h4>
                <form
                  method="POST"
                  className="my-login-validation"
                  novalidate=""
                >
                  <div className="form-group">
                    <label for="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      name="name"
                      required
                      autofocus
                    />
                    <div className="invalid-feedback">Wie ist dein Name?</div>
                  </div>

                  <div className="form-group">
                    <label for="email">E-Mail Adresse</label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      name="email"
                      required
                    />
                    <div className="invalid-feedback">
                      Deine Emailadresse ist ungültig
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="password">Passwort</label>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      required
                      data-eye
                    />
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
                        <Link to="/about">Nutzungsbedingungen</Link>
                        {''} zu
                      </label>
                      <div className="invalid-feedback">
                        Du musst unseren Nutzungsbedingungen zustimmen
                      </div>
                    </div>
                  </div>

                  <div className="form-group m-0">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign up
                    </button>
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
            <div className="footer">Copyright &copy; 2021 &mdash; Jumble</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp
