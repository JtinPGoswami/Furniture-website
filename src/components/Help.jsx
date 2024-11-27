import React from "react";

const Help = () => {
  return (
    <section className="help md:flex md:flex-row flex-col justify-center gap-[150px] h-[700px] m-auto w-4/5 mt-20">
      <div className=" relative imgGrid grid grid-cols-27 grid-rows-27 md:w-1/2 w-full h-[500px] md:mb-0 mb-72 before:content-[''] before:bg-[url('dots-green.svg')] before:absolute before:w-[255px] before:h-[217px] before:bg-no-repeat before:bg-center before:top-[-85px] before:left-[-100px]">
        <img
          className=" col-start-1 col-span-8 row-start-1 row-span-12 w-[400px] h-[500px] z-[1] rounded-[20px]"
          src="img-grid-1.jpg"
          alt="grid img 1"
        />
        <img
          className="col-start-8 col-span-4 row-start-1 row-span-4 w-[200px] h-[200px] z-[1] mb-[12px] ml-[80px] rounded-[20px]"
          src="img-grid-2.jpg"
          alt="grid img 2"
        />
        <img
          className="col-start-7 col-span-6 row-start-5 row-span-7 w-[340px] h-[460px] z-[2] rounded-[20px]"
          src="img-grid-3.jpg"
          alt="grid img 3"
        />
      </div>
      <div className="helpText flex flex-col md:w-[37%] w-full gap-[10px] justify-start">
        <span className="md:text-[30px] text-2xl font-semibold leading-[45px]">
          We Help You Make Modern Interior Design
        </span>
        <p className="text-gray-600">
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
          nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
          velit imperdiet dolor tempor tristique. Pellentesque habitant morbi
          tristique senectus et netus et malesuada
        </p>
        <ul className="flex items-center justify-center flex-wrap w-full list-disc gap-[30px]">
          <li className="w-[40%] text-gray-600">
            Donec vitae odio quis nisl dapibus malesuada
          </li>
          <li className="w-[40%] text-gray-600">
            Donec vitae odio quis nisl dapibus malesuada
          </li>
          <li className="w-[40%] text-gray-600">
            Donec vitae odio quis nisl dapibus malesuada
          </li>
          <li className="w-[40%] text-gray-600">
            Donec vitae odio quis nisl dapibus malesuada
          </li>
        </ul>
        <button className="px-[24px] py-[12px] mt-[20px] w-24 bg-black text-white rounded-full hover:bg-gray-800">
          Explore
        </button>
      </div>
    </section>
  );
};

export default Help;
