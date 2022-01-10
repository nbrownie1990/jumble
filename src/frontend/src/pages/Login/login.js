import React, {useEffect, useState} from 'react'
import TextField from '../../components/textField'
import {useNavigate} from "react-router";
import {login} from "../../services/authService";

const Login = (props) => {
  const initialLoginState = {
    username: '',
    password: '',
  }
  const navigate = useNavigate()
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [formValue, setFormValue] = useState(initialLoginState)
  const [formError, setFormError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValue({ ...formValue, [name]: value})
  }

  useEffect(()=>{
    console.log(formError)
    if(Object.keys(formError).length === 0 && isSubmit){
      console.log(formValue)
    }
  }, [formError])

  const validate = (values) => {
    const error = {};
    if (!values.username){
      error.username = "Nutzername ist erforderlich!";
    }
    if (!values.password){
      error.password = "Passwort ist erforderlich!";
    }
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setFormError(validate(formValue));
      login(formValue.username, formValue.password)
        .then(response => {
            console.log(response)
        })
          .then(() => {
            setIsSubmit(true);
            navigate('/home')
          })
        .catch((error) => {
          console.log(error.response.data.status)
          if(error.response.data.status === 400 || error.response.data.status === 401){
            return setMessage(error.response.data.message)
          }
          setIsSubmit(false);
        })
  }

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
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group">
                      <label htmlFor="username" className="sr-only">Nutzername</label>
                      <TextField
                        id="username"
                        placeholder="Nutzername"
                        value={formValue.username}
                        onChange={handleChange}
                        name="username"
                        type="text"
                        className="form-control"
                        required=""
                        autoFocus=""
                      />
                      <p className="text-warning">{formError.username}</p>
                    </div>

                    <div className="form-group mt-3">
                      <label htmlFor="password" className="sr-only">Passwort </label>
                      <TextField
                        id="password"
                        placeholder="Password"
                        value={formValue.password}
                        onChange={handleChange}
                        type="password"
                        name="password"
                        className="form-control"
                        required=""
                        data-eye
                      />
                      <p className="text-warning">{formError.password}</p>
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
                        {/*Todo: Passwort vergessen*/}
                        {/*<Link className="nav-link" to="/forgot">*/}
                        {/*  Passwort vergessen?*/}
                        {/*</Link>*/}
                      </div>
                    </div>

                    {Object.keys(formError).length !== 0 && message && (
                        <div className="form-group">
                          <div role="alert" className="alert alert-danger">
                            <h4 className="alert-heading">Oh no!</h4>
                            Das hat leider nicht geklappt.
                            Bitte beachte die Hinweise.
                            {message}
                          </div>
                        </div>
                    )}


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

