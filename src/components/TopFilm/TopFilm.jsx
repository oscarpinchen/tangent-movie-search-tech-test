import React from "react";
import "../TopFilm/topFilm.css";

export default function TopFilm(props) {
  return (
    <div className="top-movie">
      <img
        alt={`${props.title} poster`}
        className="top-movie-poster"
        src={props.source}
      />
      <div className="top-movie-info">
        <h4>{props.title}</h4>
        <p>{props.director}</p>
      </div>
    </div>
  );
}
