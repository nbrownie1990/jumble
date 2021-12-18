import React, {useCallback, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar'
import {addReview, getJumbleById, getReviewList} from "../../services/apiService";
import {useParams} from "react-router";
import Reviews from "../../components/reviews";
import StarRating from "../../components/star";
import Loading from "../../components/loading";
import MessageTeam from "../../components/messageTeam";
import YourReview from "../../components/yourReview";

function Jumble() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [jumble, setJumble]= useState([]);
  const [reviewList, setReviewList]= useState([]);
  const [review, setReview]= useState([]);
  const [rating, setRating] = useState(3) // initial rating value
  let { jumbleId } = useParams();


  const loadDataOnlyOnce = useCallback(() => {
    setLoading(true)
    setError();
    getJumbleById(jumbleId)
        .then(jumble => setJumble(jumble))
        .catch(setError)
        .finally(() => setLoading(false))
  },[jumbleId])

  useEffect(() => {
    loadDataOnlyOnce()
  }, [loadDataOnlyOnce])

  useEffect(() => {
    setLoading(true);
    setError();
    getReviewList()
        .then(reviewList => setReviewList(reviewList))
        .catch(setError)
        .finally(() => setLoading(false))
  },[])


  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }

  // Catch Rating value
  const handleAddReview= () => {
    const reviewList = [...jumble.reviewList, review]
    setJumble({ ...jumble, reviewList: reviewList})
      addReview(jumbleId, review)
          .then(setJumble)
          .catch(setError)
          .finally(() => {
            setLoading(false)
          })
  }

  // const handleDeleteReview = () => {
  //   setLoading(true)
  //   setError()
  //   deleteReview(jumbleId, reviewId)
  //       .then(() => getJumbleById(jumbleId))
  //       .then(dto => setJumble(dto))
  //       .catch(setError)
  //       .finally(() => {
  //         setLoading(false)
  //         resetReviewList()
  //       })
  // }

  //console.log(jumble.address?.addressStreet)
  // console.log(jumble.reviewList?.[0].reviewId)

  console.log(jumble)
  console.log(reviewList)


  let array1 = jumble.reviewList
  let array2 = reviewList
  let result = array2.filter(o1 => {
    return array1.some
    (o2 => o1.reviewId === o2.reviewId)
  });
  console.log(result)


  return (
          <React.Fragment>
            {loading && <Loading />}
            <Navbar/>
            {!loading && (
                <main className="m-md-5 mt-5 mb-5">
                  <section className="container w-100 h-100 mt-5">
                    {error &&  <span className="error badge bg-primary text-white" data-aos="fade-right"> {error.response.data.message}</span>}
                    <div className="container">
                  <div key={jumble.jumbleId} className="row ">
                    <div className="col-sm-12">
                      <h1 className="display-1 fs-md-5 fs-lg-6 fs-xl-8 text-light">
                        {jumble.jumbleName}
                      </h1>
                      <div className="row ">
                        <div className="col-sm-6 align-self-center position-relative img-wrapper mt-2">
                          <img
                              className="rounded-circle jumble-img"
                              src={jumble.jumbleImage}
                              alt="This is a jumble"
                          />
                          <Link
                              to={`/jumbles/edit/${jumbleId}`}
                              className="btn edit-btn position-absolute top-40 start-50"
                              type="button"
                              data-toggle="tooltip"
                              title="Edit"
                          >
                            <i className="fas fa-pen ps-2 pb-1"></i>
                          </Link>
                        </div>

                        {/*<div className="col-sm-6 mt-2">*/}
                        {/*  <Map/>*/}
                        {/*</div>*/}

                        <div className="col-sm-6">
                          Bewertung:

                          {jumble.reviewList?.length <=0? <p className="lead mt-2">Dieser Jumble wartet noch auf ein Feedback!</p> :
                          <StarRating
                              ratingValue={jumble.reviewList?.[0].reviewRating}
                              //ratingValue= {averageRating}
                          />}

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

                      {result?.length <=0? <MessageTeam />:
                      <Reviews
                      result = {result}
                      /> }

                      <YourReview
                          handleRating={handleRating}
                          handleAddReview={handleAddReview}
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
export default Jumble
