import React from 'react'

const MovieReviews = props => <div className="review-list">{props.movies.map( (movie, index) => Review(movie, index))}</div>

const Review = (movie, key) => <div className="review" key={key}>{movie.summary_short}</div>

export default MovieReviews
