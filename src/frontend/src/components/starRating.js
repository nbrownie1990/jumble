import React from 'react'
import { Rating } from 'react-simple-star-rating'

//https://github.com/awran5/react-simple-star-rating
export default function StarRating({
initialValue,
ratingValue,
    onClick,
    readonly,
tooltipArray,
    showToolTip
}){
    return (
        <div>
            <Rating
                initialValue="0"
                ratingValue={ratingValue}
                onClick={onClick}
                tooltipArray={tooltipArray}
                readonly={readonly}
                showTooltip={showToolTip}
            />
        </div>
    )
}