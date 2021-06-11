import React from "react";
import "../SearchResult/searchResult.css";

export default function SearchResult(props) {
  if (!props.result?.Title) {
    return null;
  }
  return (
    <div className="result-container">
      <img
        alt={`${props.result?.Title} poster`}
        className="main-poster"
        src={props.result?.Poster}
      />
      <div className="movie-info">
        <h2 className="movie-title">{props.result?.Title}</h2>
        <h3 className="director">{props.result?.Director}</h3>
        <p className="info-heading">Plot:</p>
        <p className="movie-plot">{props.result?.Plot}</p>
        <p className="info-heading">Released:</p>
        <p>{props.result?.Released}</p>
      </div>
    </div>
  );
}
