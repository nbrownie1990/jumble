import React from 'react'
import { Rating } from 'react-simple-star-rating'

//https://github.com/awran5/react-simple-star-rating
export default function StarRating({
handleRating,
ratingValue,
    onClick,
    readonly,
tooltipArray,
reviewList,
}){
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

    return (
        <div>
            <Rating
               // averageRating={averageRating}
                handleRating={handleRating}
                ratingValue={ratingValue}
                onClick={onClick}
                tooltipArray={tooltipArray}
                readonly={readonly}
            />
        </div>
    )
}