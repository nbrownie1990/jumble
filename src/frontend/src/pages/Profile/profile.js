import React, {useEffect, useState} from 'react'
import Navbar from '../../components/navbar'
import {useParams} from "react-router";
import {getUserById} from "../../services/apiService";
import {Link} from "react-router-dom";
import {getCurrentUser} from "../../services/authService";
import Loading from "../../components/loading";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  let { id } = useParams();
  let currentUser = getCurrentUser()

  useEffect(() => {
    getUserById(id)
        .then(user => setUser(user))
        .catch(error => setError(error))
        .finally(() => setLoading(false))
  },[id])

  console.log(user)
  return (
      <React.Fragment>
        {loading && <Loading />}
        <Navbar />
        {!loading && (
      <main className="m-md-5 mt-5 mb-5">
        <section className="container w-100 h-100">
          { loading &&  <p>Data is loading...</p>}
          { error && <p>There was an error loading your data!</p> }
          <div className="container">
            <div className="row">
              <div className="d-flex flex-column align-items-center text-center">
                <div key={user.id} className="col-12 mt-5 ">

                  {user.userImage ?
                  <img
                    className="rounded-circle user-img "
                    src={user.userImage}
                    alt="This is a pretty Profile"
                  />
                  :
                  <img
                    className="rounded-circle user-img "
                    src="https://images.unsplash.com/photo-1585664811087-47f65abbad64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                    alt="This is a pretty Profile"
                />
                  }
                </div>
                <h1 className="card-title text-center pt-3 ">{user.username}</h1>
                <div className="col-sm-8 align-self-center ">
                  <div className="card ">
                    <div className="card-body">
                       {user.userText?
                        <p className="m-0 py-2 text-muted ">{user.userText}</p>
                       :  <p className="m-0 py-2 text-muted ">Dieses Profil hat noch keine Beschreibung.</p>
                       }
                      {user.id === currentUser.id &&
                          <Link
                              to={`/user/edit/${user.id}`}
                              className="btn btn-outline-light edit-btn m-2"
                              type="button"
                              data-toggle="tooltip"
                              title="Bearbeiten"
                          >
                            <i className="fas fa-pen ps-2 pb-1"></i>
                          </Link>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>)}
    </React.Fragment>
  )
}

export default Profile
