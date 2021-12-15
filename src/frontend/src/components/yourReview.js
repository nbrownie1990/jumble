import React from 'react'
import '../assets/css/style.css'
import TextArea from "./textArea";
import StarRating from "./star";

export default function YourReview({
    handleRating,
    handleAddReview,
    review,
    result
}){

    return (
        <>
           <div className="form-group col-md-12 mt-5">
      <h5>Bewerte diesen Jumble:</h5>
               <StarRating
                  // onClick={() =>handleRating(rating)}
               />
     <TextArea
      className="form-control rounded-3"
       rows="5"
      title="Wie sind deine Erfahrungen mit diesem Jumble?"
       name="reviewText"
       />
        </div>
        <div className="mt-5 text-center">
        <button
              onClick={() =>handleAddReview(review)}
              className="btn btn-primary profile-button"
              type="button"
             >
          Hinzufügen
        </button>
         </div>
           </>
     )
 }



