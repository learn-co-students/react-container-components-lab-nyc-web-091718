// Code MovieReviews Here
import React from 'react';


const review = ({ headline, byline, link, summary_short}) => {
  return (
    <div className="review" key={headline}>
      <a href={link.url}>{headline}</a>
      <p>{byline}</p>
      <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(review)}
    </div>
  )
}

export default MovieReviews;
