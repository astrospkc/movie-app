// import React from 'react'
import { API_KEY, base_url } from "./urls";

let genre_url = base_url + `/discover/movie?with_genres=28&` + API_KEY;
// let genre_url_id = base_url + `/genre/movie/list?` + API_KEY;

let genre_url_id = base_url + `/genre/movie/list?` + API_KEY;

const [genreId, setGenreId] = useState(genre_url_id);
const getGenreData = async () => {
  const res = await fetch(genre_url_id);
  const jsonData = await res.json();
  console.log(jsonData);
  setGenreId(jsonData);
};

export default setGenreId;
