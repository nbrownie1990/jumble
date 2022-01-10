import React from 'react'
import '../assets/css/style.css'
import ReviewMessage from "./reviewMessage";
import JumbleTeamMessage from "./jumbleTeamMessage";

export default function Reviews({
    currentUser,
    handleDeleteReviewFromList,
    jumbleReviewList
}){

    return (
        <>{jumbleReviewList &&
        <div className="rez container">
            <ReviewMessage
                jumbleReviewList={jumbleReviewList}
                currentUser={currentUser}
                handleDeleteReviewFromList = {handleDeleteReviewFromList}
            />
          </div>}
            <JumbleTeamMessage />
           </>
     )
 }



