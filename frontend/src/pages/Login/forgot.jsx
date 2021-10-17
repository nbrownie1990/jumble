import React from 'react'
import { Link } from 'react-router-dom'

const Forgot = () => {
  return (
    <section classNameName="h-100">
      <div className="container h-100">
        <div className="row justify-content-md-center align-items-center h-100">
          <div className="card-wrapper">
            <div className="card fat">
              <div className="card-body">
                <h4 className="card-title">Passwort vergessen?</h4>
                <form
                  method="POST"
                  className="my-login-validation"
                  novalidate=""
                >
                  <div className="form-group">
                    <label for="email">E-Mail Adresse</label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      name="email"
                      value=""
                      required
                      autofocus
                    />
                    <div className="invalid-feedback">Email ist ungültig</div>
                    <div className="form-text text-muted">
                      Wenn du auf "Passwort zurücksetzen" klickst, senden wir
                      dir einen Reset-Link per Mail zu.
                    </div>
                  </div>

                  <div className="form-group m-0">
                    <button type="submit" className="btn btn-primary btn-block">
                      Passwort zurücksetzen
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer">Copyright &copy; 2021 &mdash; Jumble </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Forgot