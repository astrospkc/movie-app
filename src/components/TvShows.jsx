import React, { useState, useContext, useEffect } from "react";
import { GenreContext } from "../context/GenreData";
import Buttons from "./Buttons";
import MovieSearch from "./MovieSearch";
import TvCard from "./TvCard";
import { API_KEY, base_url } from "./urls";

let tv_url = base_url + "/discover/tv?&" + API_KEY;

const TvShows = (props) => {
  const [tv_data, setTv_data] = useState([]);
  const [main_url, setMain_url] = useState(tv_url);
  const [query, setQuery] = useState("");

  const getData = async (tv_url) => {
    try {
      const res = await fetch(tv_url);
      const data = await res.json();
      setTv_data(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const imageUrl = `https://image.tmdb.org/t/p/w500/`;
  // const tv_url_ep = `https://api.themoviedb.org/3/tv/`;

  const { genre } = useContext(GenreContext);
  useEffect(() => {
    if (genre) {
      console.log(genre);
      if (genre === "All") {
        getData(tv_url);
      } else {
        getData(`${base_url}/discover/tv?with_genres=${genre}&${API_KEY}`);
      }
    }
  }, [main_url, genre]);
  return (
    <>
      <>
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
            {tv_data &&
              tv_data
                .filter((data) => data.name.toLowerCase().includes(query))
                .map((e) => {
                  const {
                    name,
                    first_air_date,
                    id,
                    vote_average,
                    poster_path,
                  } = e;

                  return (
                    <div className="col-md-3" key={id}>
                      <TvCard
                        name={name}
                        first_air_date={first_air_date}
                        vote_average={vote_average}
                        imageurl={imageUrl + poster_path}
                        id={id}
                        // number_of_episodes={tv_url_ep + id + `?` + API_KEY}
                      />
                    </div>
                  );
                })}
          </div>
        </div>
        <Buttons />
      </>
    </>
  );
};

export default TvShows;

// backdrop_path
// :
// "/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg"
// first_air_date
// :
// "2023-01-15"
// genre_ids
// :
// (3) [18, 10765, 10759]
// id
// :
// 100088
// name
// :
// "The Last of Us"
// origin_country
// :
// ['US']
// original_language
// :
// "en"
// original_name
// :
// "The Last of Us"
// overview
// :
// "Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival."
// popularity
// :
// 5082.279
// poster_path
// :
// "/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg"
// vote_average
// :
// 8.9
// vote_count
// :
// 1265

// https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg
