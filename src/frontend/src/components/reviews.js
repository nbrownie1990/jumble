import React from 'react'
import '../assets/css/style.css'
import TextArea from "./textArea";
import ReviewMessage from "./reviewMessage";
import JumbleTeamMessage from "./jumbleTeamMessage";
import StarRating from "./starRating";

export default function Reviews({
    handleRating,
    handleAddRating,
    jumbleId,
    currentUser,
    handleDeleteReview,
    result
}){

    return (
        <>{result &&
        <div className="rez container">
            <ReviewMessage
                result={result}
                currentUser={currentUser}
                handleDeleteReview = {handleDeleteReview}
                jumbleId={jumbleId}
            />
          </div>}
            <JumbleTeamMessage />
           </>
     )
 }



