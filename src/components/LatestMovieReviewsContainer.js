import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';
require('es6-promise').polyfill();

const NYT_API_KEY = '583154deea834d39a868575cf0ff3818';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  state = { reviews: [] }

  componentDidMount() {
    fetch(URL).then(res=>res.json()).then(reviewsData => {
      this.setState({ reviews: reviewsData.results})
    })
  }


  render() {
    return (
      <div
        className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

}

export default LatestMovieReviewsContainer;
