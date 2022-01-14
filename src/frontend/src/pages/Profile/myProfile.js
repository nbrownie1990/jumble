import React, {useEffect, useState} from 'react'
import Navbar from '../../components/navbar'
import { Link } from 'react-router-dom'
import {getCurrentUser} from "../../services/authService";
import {getUserById} from "../../services/apiService";
import Loading from "../../components/loading";

const MyProfile = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [user, setUser] = useState([]);

  useEffect(() => {
    let currentUser = getCurrentUser();
    let id = currentUser.id
    getUserById(id)
        .then(user => {setUser(user)})
        .catch(error => setError(error))
        .finally(() => setLoading(false))
  },[])


  return (
      <React.Fragment>
        {loading && <Loading />}
        <Navbar />
        {!loading && (
      <main className="m-md-5 mt-5 mb-5">
        <section className="container w-100 h-100">
          <div className="container">
            <div className="row">
              <div className="d-flex flex-column align-items-center text-center">
                <div key={user.id} className="col-12 mt-5 ">
                  {user.userImage ?
                      <img
                          className="rounded-circle user-img "
                          src={user.userImage}
                          alt="This is my pretty Profile"
                      />
                      :
                      <img
                          className="rounded-circle user-img "
                          src="https://firebasestorage.googleapis.com/v0/b/jumble-113b5.appspot.com/o/footer%2Fuseravatar.webp?alt=media&token=f9760d16-9cd6-46e9-9f20-38712da2f4ab"
                          alt="This is my pretty Profile"
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
                      <Link
                        to={`/user/edit/${user.id}`}
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
      </main>)}
    </React.Fragment>
  )
}

export default MyProfile
