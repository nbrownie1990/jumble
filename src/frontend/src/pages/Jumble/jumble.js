import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router";
import { Link } from 'react-router-dom'
import {
    addReview,
    deleteReview,
    getJumbleById, getReviewListByJumbleId
} from "../../services/apiService";
import {getCurrentUser} from "../../services/authService";
import Navbar from '../../components/navbar'
import Reviews from "../../components/reviews";
import StarRating from "../../components/starRating";
import Loading from "../../components/loading";
import JumbleTeamMessage from "../../components/jumbleTeamMessage";
import YourReview from "../../components/yourReview";
import Error from "../../components/error";

export default function Jumble() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [jumble, setJumble] = useState([]);
  const [jumbleReviewList, setJumbleReviewList] = useState([]);
  const [review, setReview] = useState([]);
  const [ratingValue, setRatingValue] = useState() // initial rating value
  let {jumbleId} = useParams();
  const currentUser = getCurrentUser();

  useEffect(() => {
    getJumbleById(jumbleId)
        .then(jumble => setJumble(jumble))
        .catch(setError)

    getReviewListByJumbleId(jumbleId)
        .then(jumbleReviewList => setJumbleReviewList(jumbleReviewList))
        .catch(setError)
        .finally(() => setLoading(false))
  }, [jumbleId])




//----------------Review Section-----------

//TODO: --Add Review--Funktioniert aktuell nicht
    const handleAddReview = (review) => {
        setError();
        addReview(review, jumbleId)
            .catch(error => setError(error))
            .finally(() => {
                setLoading(false)
                //navigate('/jumble/${jumbleId}')
            })
    }
  //const handleAddReview = (jumbleId, review) => {
  // setError();
  // getJumbleById(jumbleId)
  // const allReviews = [...jumble.reviewList, review]
  // setJumble({...jumble, allReviews: allReviews})
  // addReview(jumbleId, review)
  //     .then(setJumble)
  //     .catch(setError)
  //     .finally(() => {
  //       setLoading(false)
  //   })
  // }

  const handleReviewInputChange = (event) => {
    setReview({...review, [event.target.name]: event.target.value});
  }

  const handleNewRating = (reviewRating) => {
    setRatingValue(reviewRating)
    // Some logic to update Rating Average reduce
  }

console.log(jumbleReviewList)
// const showAverageRating = (reviewList) => {
  //    if (reviewList && reviewList.reviewRating) {
  //        let reviewListArray = reviewList && reviewList.reviewRating;
  //        let total = [];
  //        let length = reviewListArray.length;
  //
  //        reviewListArray.map((r) => total.push(r.reviewRating));
  //        let totalReduced = total.reduce((p, n) => p + n, 0);
  //        let averageRating = totalReduced / length;
  //    }
  /// Alternative:?
  // function average(array) {
  //   return array.reduce((a, b) => (a + b)) / array.length;
  // }

  //TODO: --Delete Review--Funktioniert aktuell nicht
  const handleDeleteReviewFromList = (reviewId, jumbleReviewList, jumble) => {
    setLoading(true)
    // let newList = jumbleReviewList
    // newList.splice(reviewId,1)
    // setJumbleReviewList([...newList])
    deleteReview(reviewId)
        .then(() => getJumbleById(jumble.jumbleId))
        .then(dto => setJumble(dto))
     .catch(error => {setError(error)})
     .finally(() => {
          setLoading(false)
        let newList = jumbleReviewList
        newList.splice(reviewId,1)
        setJumbleReviewList([...newList])
        })
  }



///TODO: Bugfix "TypeError: Cannot read properties of undefined (reading 'some')"

  return (
          <React.Fragment>
            {loading && <Loading />}
            {error && !loading && <Error/>}
            <Navbar/>
            {!loading && (
                <main className="m-md-5 mt-5 mb-5">
                  <section className="container w-100 h-100 mt-5">
                    <div className="container">
                  <div key={jumble.jumbleId} className="row ">
                    <div className="col-sm-12">
                      <h1 className="display-1 fs-md-5 fs-lg-6 fs-xl-8 text-light">
                        {jumble.jumbleName}
                      </h1>
                      <div className="row ">
                        <div className="col-sm-6 align-self-center position-relative img-wrapper mt-2">

                          {!jumble.jumbleImage ?
                              <img
                                  className="rounded-circle jumble-img"
                                  src="https://images.unsplash.com/photo-1616010652065-2c22e19c92f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                  alt="This is a jumble-place"
                              /> && <p>Hier fehlt noch ein Bild der Location...</p>
                              :
                              <img
                                  className="rounded-circle jumble-img"
                                  src={jumble.jumbleImage}
                                  alt="This is a jumble place, very pretty"
                              />
                          }
                              <Link
                                  to={`/jumbles/edit/${jumbleId}`}
                                  className="btn edit-btn position-absolute top-40 start-50"
                                  type="button"
                                  data-toggle="tooltip"
                                  title="Bearbeiten"
                              >
                                <i className="fas fa-pen ps-2 pb-1"></i>
                              </Link>

                        </div>

                        <div className="col-sm-6">
                          Bewertung:
                          { jumble.reviewList?.length <=0?
                              <p className="lead mt-2">Dieser Jumble wartet noch auf ein Feedback!</p>
                              :
                          <StarRating
                              ratingValue={jumble.reviewList?.[0].reviewRating}
                              //ratingValue= {averageRating}
                              readOnly={true}
                          />
                          }
                          <p className="lead mt-2">
                            <strong>Beschreibung: </strong>
                            {jumble.jumbleText}
                          </p>

                          <div key={jumble.address?.addressId}>
                            <p className="lead mt-2">
                             {jumble.address?.addressStreet} {' '}
                             {jumble.address?.addressNumber}
                            </p>
                          <p className="lead">
                             {jumble.address?.addressZip}  {' '}
                             {jumble.address?.addressCity}
                          </p>
                          </div>
                        </div>
                    <div className="col-sm-12">
                      <h4 className="display-6 fw-bolder mt-2">Erfahrungsberichte</h4>
                      <p className="lead">
                        Hier geht es um eure Meinung zu diesem Jumble. Erzählt
                        uns von euren Erfahrungen!
                      </p>

                      {jumbleReviewList?.length <=0? <JumbleTeamMessage />:
                      <Reviews
                      jumbleReviewList = {jumbleReviewList}
                      currentUser={currentUser}
                      handleDeleteReviewFromList = {handleDeleteReviewFromList}
                      /> }
                      <YourReview
                          handleReviewInputChange={handleReviewInputChange}
                          handleNewRating={handleNewRating}
                          handleAddReview={handleAddReview}
                          jumbleId={jumbleId}
                      />
                    </div>
                      </div>
                    </div>
                </div>
                </div>
              </section>
            </main>
              )}
          </React.Fragment>
  )}

//console.log(jumble.address?.addressStreet)
//console.log(jumble.reviewList?.[0].reviewId)
// console.log(currentUser)
// console.log(jumble.user?.id)
