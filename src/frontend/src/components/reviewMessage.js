import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import StarRating from "./starRating";
import {Link} from "react-router-dom";

const ReviewMessage = ({jumbleId, result, currentUser, handleDeleteReview}) => {

  return (
        <div className="chat w-100">
            {result && result.map(list => (
        <div key={list.reviewId} className="mine messages">
            <div className="message last row">
              { list.user.id === currentUser.id &&
                  <div className="col-sm-12 m-0 text-end">
                    <button
                        type="button"
                        className="btn"
                        data-toggle="tooltip"
                        title="Bewertung löschen"
                        onClick={() => handleDeleteReview(jumbleId, list.reviewId)}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
              }
                <div className="row g-3 mt-0">
                    <div className="col-sm-2">
                       <Link
                           to={`/user/${list.user.id}`}>
                       <img
                        className="rounded-circle m-2"
                        src={list.user.userImage}
                        width="50"
                        alt="This is a user"
                        />
                       </Link>
                     </div>
                    <div className="col-sm-1 m-2">
                    </div>
                    <div className="col-sm-8">
                        Bewertung von {list.user.username}:
                        <StarRating
                         ratingValue= {list.reviewRating}
                        />
                    </div>
                </div>
                    <div className="col-12">
                        {list.reviewText}
                    </div>
            </div>
        </div>
        ))}
    </div>
  )
}
export default ReviewMessage