import React, { useContext, useEffect, useState } from "react";
import { GenreContext } from "../context/GenreData";
import Buttons from "./Buttons";
// import Modal from "./Modal";

import MovieCard from "./MovieCard";
import MovieSearch from "./MovieSearch";
import { API_KEY, base_url } from "./urls";

let genre_url = base_url + `/discover/movie?with_genres=28&` + API_KEY;
let url = base_url + "/discover/movie?" + API_KEY;

// https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=11fb2ad6e2a4150cef0c8ce69ff49879
const Movies = (props) => {
  const [data, setData] = useState([]);
  const [main_url, setUrl] = useState(url);

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
      <MovieSearch />

      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10  m-2 py-4">
          {data &&
            data.map((e, i) => {
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
      <Buttons />
    </div>
  );
};

export default Movies;
