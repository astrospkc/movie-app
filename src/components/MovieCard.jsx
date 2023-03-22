import React, { useState } from "react";
import ModalContent from "./ModalContent";

const MovieCard = (props) => {
  let { title, release_date, imageurl, vote_average } = props;
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className=" justify-items-center my-6 mx-2 ">
        <div
          className=" hover:shadow-2xl   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 rounded-lg 
        hover:bg-gradient-to-tr from-zinc-900 to-blue-900 overflow-hidden"
        >
          <img className="" src={imageurl} alt="Movie Image" />
          <div className="">
            <h2
              onClick={() => setShowModal(true)}
              className="px-2 py-2 m-1 bg-black text-white rounded-full text-xs text-center transition ease-in-out delay-150 hover:-translate-y-0  hover:bg-gray-800 cursor-pointer"
            >
              {title}
            </h2>

            <div className="flex flex-row  items-center text-white">
              <h2 className="mx-1 font-bold ">Release Date:</h2>
              <h3 className="text-xs font-sans font-semibold">
                {release_date}
              </h3>
            </div>

            <h3 className="mx-1 my-1 text-sm p-2 w-9 h-9 bg-yellow-500 rounded-full font-bold">
              {vote_average}
            </h3>
          </div>
        </div>
      </div>
      {showModal && <ModalContent closeModal={closeModal} />}
    </>
  );
};

export default MovieCard;
