import React from "react";
import "./FilmApp.css";
import Header from "./Header/Header";
import MovieShowcase from "./MovieShowcase/MovieShowcase";
import Footer from "./Footer/Footer";

function FilmApp() {
  return (
    <div>
      <Header></Header>
      <MovieShowcase></MovieShowcase>
      <Footer></Footer>
    </div>
  );
}

export default FilmApp;
