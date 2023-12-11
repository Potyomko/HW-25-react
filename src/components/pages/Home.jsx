import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../service/FetchMovies";

export function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    api.FetchHomeApi()
      .then((data) => setMovies(data.results));
  }, []);
  return (
    <>
      <h1>Tranding Today</h1>
        {movies && <ul className="moviesList">
              {movies.map((movie) => (
                  <li key={movie.id}>
                      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                  </li>
              ))}
          </ul>}
    </>
  );
}