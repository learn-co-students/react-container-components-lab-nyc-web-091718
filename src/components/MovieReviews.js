import React from 'react'// Code MovieReviews Here

export default function MovieReviews(props) {
  return (
    <div className="review">
      <header>
        <a className="review-link" /*href={link.url}*/>
          {/*headline*/}
        </a>
        <br/>
        <span className="author">{/*byline*/}</span>
      </header>
      <blockquote>{/*summary_short*/}</blockquote>
    </div>
  );
}
