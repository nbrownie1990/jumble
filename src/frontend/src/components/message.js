import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import StarRating from "./star";

const Message = props => {
    const { result } = props
  return (
        <div className="chat w-100">
            {result && result.map(list => (
        <div key={list.reviewId} className="mine messages">
            <div className="message last row">
                <div className="col-xs-6 col-12">
                    <img
                        className="rounded-circle mt-5"
                        src={list.user.userImage}
                        width="50"
                        alt="This is a user"
                    />
                </div>
                <div className="col-12">
                    Bewertung von {list.user.username}:

                    <StarRating
                        ratingValue= {list.reviewRating}
                    />
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
export default Message