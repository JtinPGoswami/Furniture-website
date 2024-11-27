import React from "react";
import Why_us_card from "./why_us_card";
const why_us = () => {
  return (
    <section className="md:flex md:flex-row flex-col w-4/5 m-auto mt-20 justify-center items-center gap-16">
      <div className="flex flex-col justify-between items-start md:w-1/2 gap-14">
        <div className="w-full ">
          <span className="md:text-3xl   text-2xl font-semibold">Why choose us</span>
          <p className=" mt-6">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
        </div>
        <div className="flex justify-between flex-wrap items-start gap-5">
          <Why_us_card />
          <Why_us_card />
          <Why_us_card />
          <Why_us_card />
        </div>
        <div></div>
      </div>
      <div className="relative md:w-1/2 w-full flex justify-center items-center before:content-[''] before:bg-[url('dots-yellow.svg')] before:top-[-4.75rem] before:left-[-1.75rem] before:w-[255px] before:h-[217px] before:absolute">
        <img
          className=" relative w-[451px] h-[516px] rounded-xl z-10 "
          src="why-us-img.jpg"
          alt="furniture img"
        />
      </div>
    </section>
  );
};

export default why_us;
