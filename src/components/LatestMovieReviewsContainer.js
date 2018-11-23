import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '924dfa5fe05f42819c51aa0abdc03a20';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(results => this.setState({reviews: results.results}))
  }

  render() {
    return(
      <div className="latest-movie-reviews">LATEST:<MovieReviews movies={this.state.reviews}/></div>
    )
  }
}
