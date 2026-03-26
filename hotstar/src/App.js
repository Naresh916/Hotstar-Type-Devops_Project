import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";
import SearchBar from "./components/SearchBar";
import MovieModal from "./components/MovieModal";
import "./App.css";

function App() {
  const API_KEY = process.env.REACT_APP_TMDB;

  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Handle search from SearchBar
  const handleSearch = async (query) => {
    if (!query) return;

    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    const data = await res.json();
    setSearchResults(data.results || []);
  };

  return (
    <div className="app">
      <Navbar />
      <Banner />
      <SearchBar onSearch={handleSearch} />

      {/* Search Results Section */}
      {searchResults.length > 0 && (
        <Row
          title="Search Results"
          fetchUrl=""
          moviesOverride={searchResults}
          onMovieClick={setSelectedMovie}
        />
      )}

      {/* Categories (Genre Rows) */}
      <Row
        title="Popular Movies"
        fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`}
        onMovieClick={setSelectedMovie}
      />

      <Row
        title="Action"
        fetchUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`}
        onMovieClick={setSelectedMovie}
      />

      <Row
        title="Comedy"
        fetchUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`}
        onMovieClick={setSelectedMovie}
      />

      <Row
        title="Thriller"
        fetchUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=53`}
        onMovieClick={setSelectedMovie}
      />

      <Row
        title="Animation"
        fetchUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`}
        onMovieClick={setSelectedMovie}
      />

      <Row
        title="Adventure"
        fetchUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12`}
        onMovieClick={setSelectedMovie}
      />

      {/* Movie Details Popup */}
      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
}

export default App;
