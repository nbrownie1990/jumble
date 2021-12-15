import React, {useRef, useState} from 'react'
import {Link } from 'react-router-dom'
import TextField from '../../components/textField'
import {initialSignUpState} from "../../services/stateService";
import {useNavigate} from "react-router";
import {signup} from "../../services/authService";

const Signup = (props) => {
  const navigate = useNavigate();
  const form = useRef();

  //const [credentials, setCredentials] = useState(initialSignUpState)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState('')
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [checkbox, setCheckbox] = useState(false)
  const [error, setError] = useState()


  // const handleCredentials = e => {
  //   setCredentials({
  //     ...credentials,
  //     [e.currentTarget.name]: e.currentTarget.value,
  //   })
  // }

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    signup(username, email, password)
          .then(
              (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
              },
              (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
              })
          .finally(
              () => {
                //props.history.push("/user/new");
                navigate("/login")
                window.location.reload();
              })
    };



  const handlePasswordCheck = event => {
    setPasswordCheck(event.target.value)
  }

  const handleToLogin = () => {
    navigate('/login')
  }


  return (
    <main className="m-md-5 mt-5 mb-5 h-100">
      <section className="container w-100 h-100 px-4 px-lg-5 mt-5">
        <div className="container h-100">
          <div className="row justify-content-md-center h-100">
            <div className="card-wrapper align-self-center col-md-8 col-12 ">
              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">Sign Up</h4>
                  <form
                   // as="form"
                    ref={form}
                    onSubmit={handleSignup}
                    className="my-login-validation"
                  >
                    {!successful && (
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <TextField
                        name="username"
                        title="Username"
                        placeholder="Nutzername"
                        value={username}
                        className="form-control"
                        onChange={onChangeUsername}
                        required={true}
                      />
                    </div>)}
                    {!successful && (
                      <div className="form-group">
                      <label htmlFor="email">E-Mail Adresse</label>
                        <TextField
                        name="email"
                        title="Email*"
                        placeholder="Email"
                        value={email}
                        className="form-control"
                        onChange={onChangeEmail}
                        required={true}
                      />
                      <label className="text-info">
                        * um dein Passwort ggf. zurücksetzen zu können
                      </label>
                    </div>)}
                    {!successful && (
                    <div className="form-group">
                      <label htmlFor="password">Passwort</label>
                      <TextField
                        name="password"
                        type="password"
                        title="Password"
                        placeholder="Passwort"
                        value={password}
                        className="form-control"
                        onChange={onChangePassword}
                        required={true}
                        data-eye
                      />
                      <TextField
                        name="passwordCheck"
                        value={passwordCheck}
                        onChange={handlePasswordCheck}
                        placeholder="Passwort erneut eingeben"
                        title="Retype Password"
                        type="password"
                        required={true}
                      />
                    </div>)}
                    {!successful && (
                    <div className="form-group">
                      <div className="custom-checkbox custom-control">
                        <input
                          type="checkbox"
                          name="agree"
                          value={checkbox}
                          onChange={e => setCheckbox(e.currentTarget.checked)}
                          id="agree"
                          className="custom-control-input"
                          required={true}
                        />
                        <label htmlFor="agree" className="custom-control-label">
                          Ich stimme den {''}
                          <Link to="/impressum"> Nutzungsbedingungen</Link>
                          {''} zu
                        </label>
                      </div>
                    </div>
                      )}

                    {message && (
                        <div className="form-group">
                          <div
                              className={ successful ? "alert alert-success" : "alert alert-danger" }
                              role="alert"
                          >
                            {message}
                          </div>
                        </div>
                    )}

                    <div className="form-group text-center m-0">
                      <br />
                      {username &&
                        password &&
                        passwordCheck === password && (
                          <button
                              type="submit"
                              name="submit"
                            className="btn btn-primary btn-block"
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
  )
}

export default Signup;
