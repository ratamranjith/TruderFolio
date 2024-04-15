import React from "react";

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center inset-0 bg-primary z-[100]">
      <div class="w-full mt-3">
        <div class="max-w-3xl h-40 mx-auto flex flex-row justify-center items-center  rounded-lg text-gray-500">
          <div class="w-7 h-7 rounded-full animate-spin relative">
            <div class="w-full h-full absolute rounded-full bg-gradient-to-br from-purple-400 to-pink-500"></div>
            <div class="w-2/3 h-2/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full"></div>
          </div>
          <div class="px-4">Loading Truder ...</div>
        </div>
      </div>
      {/* <svg
        width="100%"
        height="100%"
        viewBox="0 0 72 72"
        id="emoji"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="color"></g>
        <g id="line">
          <polyline
            fill="none"
            stroke="#03da27"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            points="11 36.873 20.227 36.873 25.713 29.641 30.95 43.107 36.686 27.397 42.047 44.603 48.157 36.873 61 36.873"
            class="svg-elem-1"
          >
            <animate
              attributeName="points"
              dur="2s"
              repeatCount="indefinite"
              values="
          11 36.873 20.227 36.873 25.713 29.641 30.95 43.107 36.686 27.397 42.047 44.603 48.157 36.873 61 36.873;
          11 40 20.227 40 25.713 25 30.95 45 36.686 23 42.047 47 48.157 40 61 40;
          11 36.873 20.227 36.873 25.713 29.641 30.95 43.107 36.686 27.397 42.047 44.603 48.157 36.873 61 36.873
        "
            ></animate>
          </polyline>
        </g>
      </svg> */}
    </div>
  );
}

export default Loader;
