import React, {useEffect, useState} from 'react'
import Navbar from '../../components/navbar'
import { Link } from 'react-router-dom'
import {useNavigate, useParams} from "react-router";
import {getUserById} from "../../services/apiService";

function Profile () {
  const navigate = useNavigate()
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  let { userId } = useParams();

  useEffect(() => {
    setLoading(true);
    getUserById(userId)
        .then(user => setUser(user))
        .catch(error => setError(error))
        .finally(() => setLoading(false))
  },[userId])

  return (
    <React.Fragment>
      <Navbar />
      <main className="m-md-5 mt-5 mb-5">
        <section className="container w-100 h-100">
          { loading &&  <p>Data is loading...</p>}
          { error && <p>There was an error loading your data!</p> }
          <div className="container">
            <div className="row">
              <div className="d-flex flex-column align-items-center text-center">
                <div key={user.userId} className="col-12 mt-5 ">
                  <img
                    className="rounded-circle user-img "
                    src={user.userImage}
                    alt="Profile"
                  />
                </div>
                <h1 className="card-title text-center pt-3 ">{user.userName}</h1>
                <div className="col-sm-8 align-self-center ">
                  <div className="card ">
                    <div className="card-body">
                      <p className="m-0 py-2 text-muted ">
                        {user.userText}
                      </p>
                      <Link
                        to={`/user/edit/${userId}`}
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

export default Profile
