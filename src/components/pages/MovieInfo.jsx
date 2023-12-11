import { NavLink, useNavigate, useParams, Outlet, useLoaderData } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import api  from "../service/FetchMovies";

export function MovieInfo() {
    const { title, genre, overview, image, vote_average } = useLoaderData();
    console.log(image);
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const goBack = useNavigate();
  console.log(movie);
  useEffect(() => {
    api.FetchMovieInfo(movieId)
      .then(setMovie)
  }, [movieId]);

  return (
    <>
      <button onClick={() => goBack(-1)}>Go Back</button>
      {movie &&
      <div>
      <div>
        <img
          src={image}
          alt={title}/>
      </div>
      <div>
        <h1>{title}</h1>
        <p>User Score: {vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
           
           <ul>
             {movie.length >= 1 && movie.genres.map(genre =>
                 <li>{genre.name}</li>
          )} 
         </ul>
         
      </div>
    </div>}
      <div>
        <p>Additional Information</p>
        <ul>
          <li>
            <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Outlet />

      </div>
    </>
  );
}