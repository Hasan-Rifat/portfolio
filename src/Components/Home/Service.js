import React from "react";

const Service = ({ s }) => {
  const { heading, text, icon, shadow, color } = s;
  return (
    <div
      class={`p-8 shadow-2xl rounded-xl ${shadow} ${color} hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] hover:text-white `}
    >
      <div class="w-20 mx-auto  rounded-full mb-5 flex-shrink-0 ">
        <span className="text-7xl ">{icon}</span>
      </div>
      <div class="flex-grow text-center">
        <h2 class=" text-xl font-medium mb-3">{heading}</h2>
        <p class=" ">{text}</p>
      </div>
    </div>
  );
};

export default Service;
