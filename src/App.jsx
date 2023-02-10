import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import GenreProvider from "./context/GenreData";

function App() {
  return (
    <>
      <GenreProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Movies />
                </>
              }
            />
            <Route path="/movie" element={<Movies />} />
            <Route path="/tv_series" element={<TvShows />} />
          </Routes>
        </Router>
      </GenreProvider>
    </>
  );
}

export default App;
