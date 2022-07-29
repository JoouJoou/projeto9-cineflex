import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Top/Header.js";
import Start from "./components/Main/Start.js";
import Movie from "./components/Main/Movie.js";
import Section from "./components/Main/Section.js";

export default function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v7/cineflex/movies")
      .then((response) => {
        setMovies(response.data);
      });
  }, []);

  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start movies={movies} />} />
          <Route path="/filme/:idMovie" element={<Movie />} />
          <Route path="/sessao/:idSection" element={<Section />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
