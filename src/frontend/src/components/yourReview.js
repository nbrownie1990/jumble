import React from 'react'
import '../assets/css/style.css'
import TextArea from "./textArea";
import StarRating from "./starRating";

export default function YourReview({
    handleNewRating,
    handleAddReview,
    ratingValue,
    handleReviewInputChange,
    jumbleId,
    review,
}){
    return (
            <form as="form" className="row">
           <div className="form-group col-md-12 mt-5">
      <h5>Bewerte diesen Jumble:</h5>
                   <StarRating
                       name="reviewRating"
                       value={review.reviewRating}
                       ratingValue={ratingValue}
                       readonly={ratingValue > 0}
                       onClick={() => handleNewRating(ratingValue)}
                   />
     <TextArea
      className="form-control rounded-3"
      rows="5"
      title="Wie sind deine Erfahrungen mit diesem Jumble?"
      placeholder="Wie sind deine Erfahrungen mit diesem Jumble?"
      name="reviewText"
      type="text"
      value={review.reviewText}
      onChange={handleReviewInputChange}
       />
        </div>
        <div className="mt-5 text-center">
        <button
              onClick={() =>handleAddReview(jumbleId, review)}
              className="btn btn-primary profile-button"
              type="button"
             >
          Hinzufügen
        </button>
         </div>
            </form>
     )
 }



