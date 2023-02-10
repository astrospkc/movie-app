import React, { createContext, useContext, useState } from "react";

export const GenreContext = createContext(null);

const GenreProvider = (props) => {
  const [genre, setGenre] = useState("All");

  function handleChangeGenre(name) {
    setGenre(name);
  }

  return (
    <GenreContext.Provider value={{ genre, handleChangeGenre }}>
      {props.children}
    </GenreContext.Provider>
  );
};
export default GenreProvider;
