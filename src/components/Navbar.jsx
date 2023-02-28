import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import genres from "./Genre";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GenreContext } from "../context/GenreData";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggle() {
    console.log("ToggleMenu");
    setToggleMenu((prev) => !prev);
  }

  const { handleChangeGenre } = useContext(GenreContext);
  function handleChange(e) {
    const selectedGenre = e.target.value;

    handleChangeGenre(selectedGenre);
  }

  return (
    <>
      <div className="flex justify-between items-center  mx-auto px-4 bg-white mb-10 h-fit w-full  z-10 ">
        <div className="md:flex md:justify-between md:items-center">
          <div
            className="m-3 p-2 font-extrabold text-xl text-cyan-600"
            style={{ fontFamily: "DynaPuff" }}
          >
            V-APP
          </div>
        </div>

        <div>
          <ul
            className={
              toggleMenu
                ? "absolute min-h-screen md:min-h-0 bg-white right-0 top-16 md:top-0 bottom-0 md:static md:flex md:flex-row  md:items-center md:gap-12 gap-6 px-2 "
                : "hidden " +
                  " min-h-[60vh] md:min-h-0 bg-white right-0 top-[4.5rem] md:top-0 bottom-0 md:static md:flex md:flex-row  md:items-center md:gap-12 gap-6 px-2 "
            }
          >
            <li className="hover:bg-slate-400 font-bold text-sm md:text-xl ">
              <NavLink to="/movie">Movie</NavLink>
            </li>
            <li className="hover:bg-slate-400 font-bold text-sm md:text-xl ">
              <NavLink to="/tv_series"> TV Series</NavLink>
            </li>

            <select
              className="seach__select outline-none bg-blue-300 font-bold overflow-scroll"
              size={1}
              // value={genres}
              onChange={handleChange}
            >
              {genres.map((elem, i) => (
                <option
                  key={elem.id}
                  value={elem.id}
                  className="hover:bg-red-300"
                >
                  {elem.name}
                </option>
              ))}
            </select>
          </ul>
        </div>
        <div className="md:flex md:items-center font-bold">
          <button className=" border-2 border-gray-300 bg-blue-500 rounded-md text-sm md:text-xl px-4 mx-2 hover:bg-blue-500 ">
            Sign in
          </button>
        </div>
        <div className="md:hidden justify-self-start" onClick={handleToggle}>
          {!toggleMenu && (
            <i className=" fa-solid fa-bars cursor-pointer md:hidden" />
          )}

          {toggleMenu && (
            <i className=" fa-solid fa-close cursor-pointer md:hidden " />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
