import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_TMDB;

    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Hotstar Clone</h1>
      <h2 className="subtitle">Popular Movies</h2>

      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <p className="movie-title">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
