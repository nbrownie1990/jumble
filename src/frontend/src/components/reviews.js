import React from 'react'
import '../assets/css/style.css'
import ReviewMessage from "./reviewMessage";
import JumbleTeamMessage from "./jumbleTeamMessage";

export default function Reviews({
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



