import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import TextField from '../../components/textField'
import {initialLoginState} from "../../services/stateService";
import {useNavigate} from "react-router";
import {login} from "../../services/authService";

const Login = (props) => {
  const form = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState()
  const navigate = useNavigate()

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  // const handleCredentials = e => {
  //   setCredentials({
  //     ...credentials,
  //     [e.currentTarget.name]: e.currentTarget.value
  //   })
  // }

  // const handleSubmit = event => {
  //   event.preventDefault()
  //   setError()
  //   addNewUser(credentials)
  //     //  .then(() => login(credentials))
  //       .then(() => navigate('/home'))
  //       .catch(error => {
  //         setError(error)
  //       })
  // }
  ///////////////
  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    login(username, password)
         .then(() => navigate('/home'))
          .catch(error => {
            const resMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            setLoading(false);
            setMessage(resMessage);
          })
         .finally(() => window.location.reload);
  };

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
                    className="form-signin my-login-validation" method="post" action="/login"
                    //onSubmit={() => handleSubmit()}
                    onSubmit={handleLogin}
                    ref={form}
                  >
                    <div className="form-group">
                      <label htmlFor="username" className="sr-only">Nutzername</label>
                      <TextField
                        id="username"
                        placeholder="Nutzername"
                        value={username}
                        onChange={onChangeUsername}
                        name="username"
                        type="text"
                        className="form-control"
                        required=""
                        autoFocus=""
                      />
                      {error && <p>Email ungültig</p>}
                    </div>

                    <div className="form-group mt-3">
                      <label htmlFor="password" className="sr-only">Passwort </label>
                      <TextField
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={onChangePassword}
                        type="password"
                        name="password"
                        className="form-control"
                        required=""
                        data-eye
                      />
                      <div className="invalid-feedback">
                        Password ist erforderlich
                      </div>
                    </div>

                    <div className="form-group mt-2">
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
                        name="submit"
                        className="btn btn-primary btn-block"
                      >
                        Login
                      </button>
                    </div>
                    {message && (
                        <div className="form-group">
                          <div className="alert alert-danger lead" role="alert">
                            {message}
                          </div>
                        </div>
                    )}
                  </form>
                    <div className="mt-4 text-center">
                      Noch keinen Account?
                      <div
                          onClick={handleToSignUp}
                          className="nav-link">
                        {' '}
                        Sign up
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default Login;


// <body cz-shortcut-listen="true">
// <div className="container">
//   <form className="form-signin" method="post" action="/login">
//     <h2 className="form-signin-heading">Please sign in</h2>
//     <p>
//       <label htmlFor="username" className="sr-only">Username</label>
//       <input type="text" id="username" name="username" className="form-control" placeholder="Username" required=""
//              autoFocus="">
//     </p>
//     <p>
//       <label htmlFor="password" className="sr-only">Password</label>
//       <input type="password" id="password" name="password" className="form-control" placeholder="Password" required="">
//     </p>
//     <input name="_csrf" type="hidden" value="559b2031-7a1f-4fa5-810a-da808d01d84b">
//       <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
//   </form>
// </div>
// </body>
