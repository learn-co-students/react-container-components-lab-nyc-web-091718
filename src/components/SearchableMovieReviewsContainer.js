import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '924dfa5fe05f42819c51aa0abdc03a20';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  fetchMovies = () => {
    fetch(URL + `&query=${this.state.searchTerm}`)
    .then(res => res.json())
    .then(reviews => this.setState({reviews: reviews.results}))
  }

  updateTerm = (event) => this.setState({searchTerm: event.target.value})

  render() {
    return(
      <div className="searchable-movie-reviews">
      <form onSubmit={this.fetchMovies}></form>
        <input type="text" onClick={this.fetchMovies} onChange={this.updateTerm} autofocus="true"></input>
        SEARCHABLE:<MovieReviews movies={this.state.reviews} />
      </div>
    )
  }
}
