import React from "react";

const Chair_card = () => {
  return (
    <div className="flex gap-3 md:w-[25rem] sm:w-full h-40">
      <div className=" bg-[#DCE5E4] w-32 h-28 rounded-3xl ">
        <img src="product-1.png" alt="chair" />
      </div>
      <div>
        <p className="font-semibold">Nordic chair</p>
        <p className="text-gray-500 ">
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
        </p>
        <p className=" cursor-pointer hover:text-gray-400 transition-all duration-100 ease-in">
          Read More
        </p>
      </div>
    </div>
  );
};

export default Chair_card;
