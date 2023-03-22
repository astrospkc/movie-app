const ModalContent = ({ closeModal }) => {
  return (
    <>
      <div className="top-0 left-0 right-0 bottom-0 fixed bg-black"></div>
      <div className="fixed top-60 left-24 right-24  -tanslate-[50%] bg-white border-lg border-slate-100">
        <div className="m-8">
          <h1> it your modal</h1>
          <p>Videos are not there/</p>
          <button onClick={closeModal} className="text-white bg-slate-700">
            I accept it
          </button>
        </div>
      </div>
    </>
  );
};
export default ModalContent;
