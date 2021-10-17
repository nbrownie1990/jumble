import React from 'react'

const Login = () => {
  return (
    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-md-center h-100">
          <div className="card-wrapper">
            <div className="card fat">
              <div className="card-body">
                <h4 className="card-title">Login</h4>
                <form
                  method="POST"
                  className="my-login-validation"
                  novalidate=""
                >
                  <div className="form-group">
                    <label for="email">E-Mail Addresse</label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      name="email"
                      value=""
                      required
                      autofocus
                    />
                    <div className="invalid-feedback">Email is invalid</div>
                  </div>

                  <div className="form-group">
                    <label for="password">
                      Passwort
                      <a href="forgot.html" className="float-right">
                        Passwort vergessen?
                      </a>
                    </label>
                    <input
                      id="password"
                      type="password"
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
                      <label for="remember" className="custom-control-label">
                        Remember Me
                      </label>
                    </div>
                  </div>

                  <div className="form-group m-0">
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                  </div>
                  <div className="mt-4 text-center">
                    Noch keinen Account?
                    <a href="register.html">Create One</a>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer">
              Copyright &copy; 2021 &mdash; Nina Braunger
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
