import React, { useContext, useEffect, useState } from "react";
import { GenreContext } from "../context/GenreData";
// import Buttons from "./Buttons";
// import Modal from "./Modal";

import MovieCard from "./MovieCard";
import MovieSearch from "./MovieSearch";
import { API_KEY, base_url } from "./urls";

let genre_url = base_url + `/discover/movie?with_genres=28&` + API_KEY;
let url = base_url + "/discover/movie?" + API_KEY;

// https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=apikey
const Movies = (props) => {
  const [data, setData] = useState([]);
  const [main_url, setUrl] = useState(url);
  const [query, setQuery] = useState("");
  const getData = async (url) => {
    try {
      const res = await fetch(url);
      const datas = await res.json();
      console.log(datas);
      setData(datas.results);
    } catch (error) {
      console.log(error);
    }
  };
  const imageUrl = `https://image.tmdb.org/t/p/w500/`;

  const { genre } = useContext(GenreContext);
  useEffect(() => {
    if (genre) {
      console.log(genre);
      if (genre === "All") {
        getData(url);
        console.log(url);
      } else {
        // let genre_url = base_url + `/discover/movie?with_genres=28&` + API_KEY;
        getData(`${base_url}/discover/movie?with_genres=${genre}&${API_KEY}`);
      }
    }
  }, [main_url, genre]);

  return (
    <div>
      {/* search feature */}
      <div className="flex flex-row justify-center items-center rounded-lg">
        <input
          className="px-4 py-3 rounded-lg mx-2 bg-slate-700"
          type="text"
          placeholder="Search movie , series "
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-black text-white px-4 py-3 hover:bg-slate-500 rounded-lg">
          Search
        </button>
      </div>

      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10  m-2 py-4">
          {data &&
            data
              .filter((movie) => movie.title.toLowerCase().includes(query))
              .map((e, i) => {
                const { title, release_date, imdb, vote_average, poster_path } =
                  e;

                return (
                  <div className="col-md-3 " key={i}>
                    <MovieCard
                      title={title}
                      release_date={release_date}
                      vote_average={vote_average}
                      imdb={imdb}
                      imageurl={imageUrl + poster_path}
                    />
                  </div>
                );
              })}
        </div>
      </div>
      {/* <Buttons /> */}
    </div>
  );
};

export default Movies;
