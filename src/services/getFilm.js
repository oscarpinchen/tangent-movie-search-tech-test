export const getFilm = async (movie) => {
  const apiKey = process.env.REACT_APP_OMDB_API_KEY;

  const response = await fetch(
    "http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + movie
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  }
};
