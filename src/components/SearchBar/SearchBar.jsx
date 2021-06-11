import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getFilm } from "../../services/getFilm";
import React, { useState } from "react";
import "../SearchBar/searchBar.css";

const searchIcon = <FontAwesomeIcon icon={faSearch} />;

export default function SearchBar(props) {
  const [movie, setMovie] = useState("");

  function handleChange(event) {
    setMovie(event.target.value);
  }

  const handleClick = async (event) => {
    event.preventDefault();
    const filmResult = await getFilm(movie);
    props.setResult(filmResult);
  };

  return (
    <form>
      <input
        placeholder="Enter your film here"
        onChange={handleChange}
        type="text"
        value={movie}
      />
      <button className="search-btn" onClick={handleClick} type="submit">
        {searchIcon} Search
      </button>
    </form>
  );
}
