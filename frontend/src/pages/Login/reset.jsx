import React from 'react'

const Reset = () => {
  return (
    <React.Fragment>
      <main className="d-flex m-md-5 mt-5 mb-5 min-vh-100">
        <section className="container w-100 p-3 flex-column align-self-center">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper align-self-center col-md-8 col-12 ">
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
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
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
      </main>
    </React.Fragment>
  )
}

export default Reset
