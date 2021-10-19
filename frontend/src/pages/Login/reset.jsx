import React from 'react'
import { Link } from 'react-router-dom'

const Reset = () => {
  return (
    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-md-center align-items-center h-100">
          <div className="card-wrapper">
            <div className="card fat">
              <div className="card-body">
                <h4 className="card-title"> Passwort zurücksetzen</h4>
                <form
                  method="POST"
                  className="my-login-validation"
                  novalidate=""
                >
                  <div className="form-group">
                    <label for="new-password">Neues Passwort</label>
                    <input
                      id="new-password"
                      type="password"
                      className="form-control"
                      name="password"
                      required
                      autofocus
                      data-eye
                    />
                    <div className="invalid-feedback">
                      Passwort ist erforderlich
                    </div>
                    <div className="form-text text-muted">
                      Stelle sicher, dass du ein starkes Passwort eingegeben
                      hast.
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reset
