import React, { useEffect, useState } from "react";
// import { createLogger } from "vite";

// https://api.themoviedb.org/3/tv/100088?api_key=API_KEY
const TvCard = (props) => {
  const [eps, setEps] = useState([]);
  const [season, setSeason] = useState([]);
  let {
    tv_url,
    first_air_date,
    id,

    name,
    number_of_seasons,
    number_of_episodes,
    imageurl,
    vote_average,
  } = props;

  async function fetchDetails(url) {
    const data = await fetch(url);
    const jsonData = await data.json();

    setEps(jsonData.number_of_episodes);
    setSeason(jsonData.number_of_seasons);

    console.log(jsonData.number_of_episodes, jsonData.number_of_seasons);
    return jsonData.number_of_episodes, jsonData.number_of_seasons;
  }

  useEffect(() => {
    // console.log({ id });

    if (id) {
      const res = fetchDetails(
        `https://api.themoviedb.org/3/tv/${id}?api_key=11fb2ad6e2a4150cef0c8ce69ff49879`
      );
      // console.log(res);
    }
  }, [id]);

  // console.log(imageurl);
  return (
    <>
      <div className="grid justify-items-center my-6 mx-2  ">
        <div
          className=" hover:shadow-2xl   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 rounded-lg 
        hover:bg-gradient-to-tr from-zinc-900 to-blue-900 overflow-hidden"
        >
          <img className="" src={imageurl} alt="" />
          <div className="">
            <h2 className="px-2 py-2 m-1 bg-black text-white rounded-full text-xs text-center transition ease-in-out delay-150 hover:-translate-y-0  hover:bg-gray-800 cursor-pointer">
              {name}
            </h2>
            <div className="flex flex-row  items-center">
              <h2 className="mx-1 font-bold text-sm text-white">
                First air date:
              </h2>
              <h3 className="text-xs font-sans font-semibold text-amber-50">
                {first_air_date}
              </h3>
            </div>
            <div className="flex flex-row justify-items-center align-baseline">
              <h3 className=" text-emerald-50 mx-2 my-2 justify-end text-sm font-sans font-semibold">
                Ep: {eps}
              </h3>
              <h3 className="mx-2 my-1 text-sm p-2 w-9 h-9 bg-gray-500 text-white rounded-full font-bold">
                S{season}
              </h3>
              <h3 className="mx-1 my-1 text-sm p-2 w-9 h-9 bg-yellow-500 rounded-full font-bold">
                {vote_average}
              </h3>
            </div>

            {/* <a rel="noreferrer" href={tv_url}></a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TvCard;
