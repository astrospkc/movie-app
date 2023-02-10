import React from "react";

const Buttons = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center rounded-lg gap-3">
        <button className="bg-white font-semibold  m-2 p-2 border-r-red-200 rounded-lg shadow-lg shadow-slate-300 transition ease-in-out delay-150 hover:bg-cyan-500 hover:-translate-y-1">
          prev
        </button>
        <button className="bg-white font-semibold  m-2 p-2 border-r-red-200 rounded-lg transition shadow-lg shadow-slate-300 ease-in-out delay-150 hover:bg-cyan-500 hover:-translate-y-1">
          next
        </button>
      </div>
    </>
  );
};

export default Buttons;
