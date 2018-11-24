import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
require('es6-promise').polyfill();
require('isomorphic-fetch');

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'+ `api-key=${NYT_API_KEY}`;



class LatestMovieReviewsContainer extends Component {
  NYT_API_KEY = 'f98593a095b44546bf4073744b540da0'
  URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'+ `api-key=${NYT_API_KEY}`

  state = {
    movies: []
  }

  getInfo = () => {
    fetch(URL)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      console.log(myJson.results);
      this.setState({
        movies: myJson.results
      })
    });
  }

  movieInfo = () => {
    return this.state.movies.map(movieObj => {
      return <MovieReviews key={movieObj.display_title} movieObj={movieObj} />
    })
  }

  componentDidMount() {
    this.getInfo()
  }


  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>The Latest Reviews:</h2>
        {this.movieInfo()}
      </div>
    );
  }
}

export default LatestMovieReviewsContainer
