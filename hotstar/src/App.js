import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";
import "./App.css";

function App() {
  const API_KEY = process.env.REACT_APP_TMDB;

  return (
    <div className="app">
      <Navbar />
      <Banner />

      <Row
        title="Popular Movies"
        fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`}
      />

      <Row
        title="Top Rated"
        fetchUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`}
      />

      <Row
        title="Upcoming Movies"
        fetchUrl={`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`}
      />
    </div>
  );
}

export default App;
