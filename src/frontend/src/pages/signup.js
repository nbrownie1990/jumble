import React, {useEffect, useRef, useState} from 'react'
import {Link } from 'react-router-dom'
import TextField from '../components/textField'
import {useNavigate} from "react-router";
import {signup} from "../services/authService";

const Signup = () => {
  const initialSignUpState = {
    username: '',
    email: '',
    password: '',
    passwordCheck:'',
  }
  const navigate = useNavigate();
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [checkbox, setCheckbox] = useState(false)
  const [formValue, setFormValue] = useState(initialSignUpState)
  const [formError, setFormError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    setFormError(validate(formValue));
    signup(formValue.username, formValue.email, formValue.password)
        .then((response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          setIsSubmit(true)
        })
        .catch((error) => {
          const resMessage =(error.response && error.response.data &&
                  error.response.data.message)
              || error.message || error.toString();

          setMessage(resMessage);
          setSuccessful(false);
          setIsSubmit(false);
        })
  }

  const validate = (values) => {
    const error = {};
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username){
      error.username = "Nutzername ist erforderlich!";
    } else if(values.username.length > 10) {
      error.username = "Nutzername kann maximal 10 Zeichen enthalten!";
    }
    if (!values.email){
      error.email = "Email ist erforderlich!";
    } else if(!regex.test(values.email)) {
      error.email = "Das ist keine valide Email-Adresse!";
    }
    //Todo: EMAIL BEREITS VERGEBEN Validation einfügen
    if (!values.password){
      error.password = "Password ist erforderlich!";
    }else if(values.password.length <4) {
      error.password = "Passwort muss mehr als 4 Zeichen enthalten!";
    }
    if (!values.passwordCheck){
      error.passwordCheck = "Passwort-Check ist erforderlich!";
    }else if(values.passwordCheck.length <4) {
      error.passwordCheck = "Passwort-Check muss mehr als 4 Zeichen enthalten!";
    }else if(values.passwordCheck !== values.password) {
      error.passwordCheck = "Passwort-Check und Password passen nicht zusammen!";
    }
    return error;
  };

  useEffect(()=>{
    console.log(formError)
    if(Object.keys(formError).length === 0 && isSubmit){
      console.log(formValue)
    }
  }, [formError])


  const handleChange =  (e) => {
    const {name, value} = e.target;
    setFormValue({ ...formValue, [name]: value})
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
                    onSubmit={handleSubmit}
                    className="my-login-validation"
                  >
                    {!successful && (
                    <div className="form-group">
                      <label htmlFor="username">Name</label>
                      <TextField
                        name="username"
                        title="Username"
                        placeholder="Nutzername"
                        value={formValue.username}
                        className="form-control"
                        onChange={handleChange}
                      />
                      <p className="text-warning">{formError.username}</p>
                    </div>
                        )}
                    {!successful && (
                      <div className="form-group">
                      <label htmlFor="email">E-Mail Adresse</label>
                        <TextField
                        name="email"
                        title="Email*"
                        placeholder="Email"
                        value={formValue.email}
                        className="form-control"
                        onChange={handleChange}
                      />
                      <label className="text-info">
                        * um dein Passwort ggf. zurücksetzen zu können
                      </label>
                        <p className="text-warning">{formError.email}</p>
                      </div>
                        )}
                    {!successful && (
                    <div className="form-group">
                      <label htmlFor="password">Passwort</label>
                      <TextField
                        name="password"
                        type="password"
                        title="Password"
                        placeholder="Passwort"
                        value={formValue.password}
                        className="form-control"
                        onChange={handleChange}
                        data-eye
                      />
                      <p className="text-warning">{formError.password}</p>
                      <TextField
                        name="passwordCheck"
                        value={formValue.passwordCheck}
                        onChange={handleChange}
                        placeholder="Passwort erneut eingeben"
                        title="Retype Password"
                        type="password"
                      />
                      <p className="text-warning">{formError.passwordCheck}</p>
                    </div>
                    )}
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

                    {Object.keys(formError).length !== 0 && message && !successful && (
                            <div className="form-group">
                              <div role="alert" className="alert alert-danger">
                                <h4 className="alert-heading">Oh no!</h4>
                                Das hat leider nicht geklappt.
                                Bitte beachte die Hinweise.
                              </div>
                            </div>
                        )}

                    {Object.keys(formError).length === 0 && message && successful && isSubmit && (
                          <div role="alert" className="alert alert-success">
                            <h4 className="alert-heading"> Well done!</h4>
                            {message} :)
                            <br/>
                          <button onClick={handleToLogin} className="btn btn-primary btn-block">
                            Go to Login
                          </button>
                          </div>
                    )}
                    {!successful && (
                    <div className="form-group text-center m-0">
                      <br />
                          <button
                              type="submit"
                              name="submit"
                            className="btn btn-primary btn-block"
                          >
                            {' '}
                            Sign up
                          </button>
                    </div>
                    )}
                    {!successful && (
                    <div className="mt-4 text-center">
                      Hast du bereits einen Account?
                      <div onClick={handleToLogin} className="nav-link">
                        {' '}
                        Login
                      </div>
                    </div>
                    )}
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
