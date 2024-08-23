import React from "react";

const Header = ({ onRun }) => {
  return (
    // <div className="flex items-center justify-between p-2 bg-[#1a1a29] border-b border-gray-700">
    //   <div className="w-1/2 text-xl text-white font-bold">CallChain</div>
    //   <button
    //     onClick={onRun}
    //     className="bg-white  text-black font-bold py-1 px-4 mx-auto rounded"
    //   >
    //     Run
    //   </button>
    // </div>

    <div className="flex items-center justify-between p-2 bg-[#272738] border-b border-gray-700">
      <div className="w-1/3 text-xl text-white font-bold">CallChain</div>
      <div className="w-1/3 flex justify-center flex-grow">
        <button
          onClick={onRun}
          className="bg-white hover:bg-blue-700 text-black font-bold py-1 px-4 rounded"
        >
          Run
        </button>
      </div>
      <div className="w-1/3 flex justify-end flex-grow">
        {/* <button
          onClick={onRun}
          className="bg-white hover:bg-blue-700 text-black font-bold py-1 px-4 rounded"
        >
          Login
        </button> */}
      </div>
    </div>
  );
};

export default Header;
