import React from "react";
import Chair_hover from "./Chair_hover";
const Chair = () => {
  return (
    <section className="md:flex md:flex-row flex-col justify-center items-center gap-5 py-20 w-4/5 m-auto">
      <div className="md:w-1/3 w-full">
        <h4 className="md:text-3xl text-2xl font-semibold mb-4">
          Crafted with excellent material.
        </h4>
        <p className=" text-gray-600 mb-4">
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <button className="md:px-7 md:py-4 px-5 py-2 text-sm font-bold text-white bg-black rounded-full hover:bg-[#323232]">
          Explore
        </button>
      </div>
      <Chair_hover img={"product-1.png"} name={"Gaming Chair"} price={250} />
      <Chair_hover img={"product-2.png"} name={"Relaxing Chair"} price={378}/>
      <Chair_hover img={"product-3.png"} name={"Office Chair"} price={342}/>
    </section>
  );
};

export default Chair;
