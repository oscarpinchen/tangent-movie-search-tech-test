import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";
import "../../styles/styles.css";
import TopFilm from "../TopFilm/TopFilm";
import topMovies from "../topMoviesList/topMovies";

const filmIcon = <FontAwesomeIcon icon={faFilm} />;

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="container">
      <div className="search">
        <h1 className="page-title">
          {filmIcon} Movie Search {filmIcon}
        </h1>
        <SearchBar setResult={setResult} />
        <SearchResult result={result} />
      </div>
      <div>
        <h2 className="top-movies-heading">Top Movies</h2>
        <div className="top-movie-container">
          {topMovies.map((movie, i) => {
            return (
              <TopFilm
                key={i}
                director={movie.filmDirector}
                source={movie.filmPoster}
                title={movie.filmTitle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
