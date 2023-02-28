import React, { useState } from "react";

// import ModalContent from "./ModalContent";

const Buttons = () => {
  // const [showModal, setShowModal] = useState(false);

  // const closeModal = () => setShowModal(false);
  // function handleClick() {
  //   <Modal />;
  // }
  return (
    <>
      <div className="flex flex-row justify-center items-center rounded-lg gap-3">
        <button className="bg-white font-semibold  m-2 p-2 border-r-red-200 rounded-lg shadow-lg shadow-slate-300 transition ease-in-out delay-150 hover:bg-cyan-500 hover:-translate-y-1">
          prev
        </button>
        <button
          // onClick={() => setShowModal(true)}
          className="bg-white font-semibold  m-2 p-2 border-r-red-200 rounded-lg transition shadow-lg shadow-slate-300 ease-in-out delay-150 hover:bg-cyan-500 hover:-translate-y-1"
        >
          next
        </button>
        {/* {showModal && <ModalContent closeModal={closeModal} />} */}
      </div>
    </>
  );
};

export default Buttons;
