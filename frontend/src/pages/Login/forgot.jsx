import React from 'react'

const Forgot = () => {
  return (
    <main className="d-flex m-md-5 mt-5 mb-5 min-vh-100">
      <section className="container w-100 p-3 flex-column align-self-center">
        <div className="row justify-content-center h-100">
          <div className="card-wrapper align-self-center col-md-8 col-12">
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
          </div>
        </div>
      </section>
    </main>
  )
}

export default Forgot
