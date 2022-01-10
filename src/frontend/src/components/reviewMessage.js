import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import StarRating from "./starRating";
import {Link} from "react-router-dom";

const ReviewMessage = ({currentUser, jumbleReviewList, handleDeleteReviewFromList}) => {

  return (
        <div className="chat w-100">
            {jumbleReviewList && jumbleReviewList.map(({reviewId, reviewRating, reviewText, user}) => (
        <div key={reviewId} className="mine messages">
            <div className="message last row">
              { user.id === currentUser.id &&
                  <div className="col-sm-12 m-0 text-end">
                    <button
                        type="button"
                        className="btn"
                        data-toggle="tooltip"
                        title="Bewertung löschen"
                        onClick={() => handleDeleteReviewFromList(reviewId)}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
              }
                <div className="row g-3 mt-0">
                    <div className="col-sm-2">
                       <Link
                           to={`/user/${user.id}`}>
                       <img
                        className="rounded-circle m-2"
                        src={user.userImage}
                        width="50"
                        alt="This is a user"
                        />
                       </Link>
                     </div>
                    <div className="col-sm-1 m-2">
                    </div>
                    <div className="col-sm-8">
                        Bewertung von {user.username}:
                        <StarRating
                            readonly={true}
                            ratingValue= {reviewRating}
                        />
                    </div>
                </div>
                    <div className="col-12">
                        {reviewText}
                    </div>
            </div>
        </div>
        ))}
    </div>
  )
}
export default ReviewMessage