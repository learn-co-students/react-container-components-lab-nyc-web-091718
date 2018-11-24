import React from 'react'


const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(review =>
        <div className="review" key={review.display_title}>
          {review.display_title}
        </div>)}
    </div>
  )
}

export default MovieReviews
