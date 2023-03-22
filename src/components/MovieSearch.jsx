import React from "react";

const MovieSearch = () => {
  return (
    <div className="flex flex-row justify-center items-center rounded-lg">
      <input
        className="px-4 py-3 rounded-lg mx-2 bg-slate-700"
        type="text"
        placeholder="Search movie , series "
      />
      <button className="bg-black text-white px-4 py-3 hover:bg-slate-500 rounded-lg">
        Search
      </button>
    </div>
  );
};

export default MovieSearch;
