import React, {useEffect, useState} from 'react'
import Navbar from '../../components/navbar'
import { Link } from 'react-router-dom'
import {useNavigate, useParams} from "react-router";
import {getCurrentUser} from "../../services/authService";

const MyProfile = () => {
  const currentUser = getCurrentUser()
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState();
  // const [currentUser, setCurrentUser] = useState(undefined);

  // useEffect(() => {
  //   const user = getCurrentUser();
  //   if (user) {
  //     setCurrentUser(user);
  //   }
  // }, []);


  return (
    <React.Fragment>
      <Navbar />
      <main className="m-md-5 mt-5 mb-5">
        <section className="container w-100 h-100">
          {/*{ loading &&  <p>Data is loading...</p>}*/}
          {/*{ error && <p>There was an error loading your data!</p> }*/}
          <div className="container">
            <div className="row">
              <div className="d-flex flex-column align-items-center text-center">
                <div key={currentUser.id} className="col-12 mt-5 ">

                  {/*{currentUser.userImage ? */}
                  {/*  <img*/}
                  {/*  className="rounded-circle user-img "*/}
                  {/*  src={currentUser.userImage}*/}
                  {/*  alt="Profile"*/}
                  {/*  />*/}
                  {/*  :*/}
                    <img
                    className="rounded-circle user-img "
                    src="https://images.unsplash.com/photo-1608155686393-8fdd966d784d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Profile"
                    />
                  {/*}*/}
                </div>
                <h1 className="card-title text-center pt-3 ">{currentUser.username}</h1>
                <div className="col-sm-8 align-self-center ">
                  <div className="card ">
                    <div className="card-body">

                      <p className="m-0 py-2 text-muted ">
                        {/*{currentUser.userText}*/}
                        Here comes your text.............

                      </p>
                      <Link
                        to={`/user/edit/${currentUser.id}`}
                        className="btn btn-outline-dark m-3 float-end"
                        type="button"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        <i className="fa fa-user-edit"></i>
                      </Link>
                    </div>
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

export default MyProfile
