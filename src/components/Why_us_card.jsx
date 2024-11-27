import React from "react";

const Why_us_card = () => {
  return (
    <div className="md:w-64 w-[40%] flex flex-col justify-start gap-4 ">
      <div className=" relative before:content-[''] before:bg-[#CBD5D1] before:top-2 before:left-2 before:absolute before:rounded-full before:w-10 before:h-10">
        <img className="w-10 relative z-10 " src="truck.svg" alt="truck" />
      </div>
      <p className="font-semibold text-gray-800">Fast & free shipping</p>
      <p>
        Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
        Aliquam vulputate
      </p>
    </div>
  );
};

export default Why_us_card;
