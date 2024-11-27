import React from "react";

const Footer = () => {
  const copy = String.fromCodePoint(0x00a9);
  return (
    <section className=" w-full mt-5 md:px-28 px-5 bg-white h-5/6 flex flex-col gap-5 justify-center  ">
      <div className="w-full md:flex md:flex-row flex flex-col-reverse justify-center">
        <div className="flex flex-col gap-5 pt-10">
          <div className="flex justify-start items-center gap-2">
            <img src="envelope-outline.svg" alt="msg icon" />
            <p className="text-xl font-semibold">Subscribe to Newsletter</p>
          </div>
          <form className="flex gap-5 flex-wrap">
            <input
              className="w-64 h-12 bg-transparent border border-gray-500 rounded-xl px-3"
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="w-64 h-12 bg-transparent border border-gray-500 rounded-xl px-3"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-[#3B5D50] w-20 h-12 flex items-center justify-center rounded-xl flex-shrink-0">
              <img className="w-5" src="paper-plane-solid.svg" alt="send" />
            </button>
          </form>
        </div>
        <div className="relative md:w-96 md:h-96  ">
          <img
            className=" absolute md:w-96 md:h-96 w-72 md:top-[-9rem] top-[-150px] right-[-150px]"
            src="sofa.png"
            alt="sofa"
          />
        </div>
      </div>
      <div className="flex justify-between flex-wrap mb-10 ">
        <div className="md:w-[30%] w-full flex flex-col gap-5">
          <span className="text-[#3B5D50] text-3xl font-bold">Furni.</span>
          <p className="text-gray-600">
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique. Pellentesque habitant
          </p>
          <div className=" flex justify-start gap-10 ">
            <div
              className="relative group before:content-[''] before:bg-[#EFF2F1]
           before:rounded-full before:w-10 before:h-10 before:absolute before:top-[-9px] before:left-[-9px] before:hover:bg-[#3B5D50] before:transition before:duration-200 before:ease-in cursor-pointer"
            >
              <img
                className="relative w-5 h-5 z-10 transition duration-200 ease-in group-hover:filter group-hover:invert"
                src="facebook.svg"
                alt="Facebook"
              />
            </div>
            <div
              className="relative group before:content-[''] before:bg-[#EFF2F1]
           before:rounded-full before:w-10 before:h-10 before:absolute before:top-[-9px] before:left-[-9px] before:hover:bg-[#3B5D50]  before:transition before:duration-200 before:ease-in cursor-pointer "
            >
              <img
                className="relative w-5 h-5 z-10 transition duration-200 ease-in group-hover:filter group-hover:invert"
                src="twitter.svg"
                alt="Twitter"
              />
            </div>
            <div
              className="relative group before:content-[''] before:bg-[#EFF2F1]
           before:rounded-full before:w-10 before:h-10 before:absolute before:top-[-9px] before:left-[-9px]  before:hover:bg-[#3B5D50] before:transition before:duration-200 before:ease-in cursor-pointer "
            >
              <img
                className="relative w-5 h-5 z-10 transition duration-200 ease-in group-hover:filter group-hover:invert"
                src="instagram.svg"
                alt="Instagram"
              />
            </div>
            <div
              className="relative group before:content-[''] before:bg-[#EFF2F1]
           before:rounded-full before:w-10 before:h-10 before:absolute before:top-[-9px] before:left-[-9px] before:hover:bg-[#3B5D50] before:transition before:duration-200 before:ease-in cursor-pointer"
            >
              <img
                className="relative w-5 h-5 z-10 transition duration-200 ease-in group-hover:filter group-hover:invert"
                src="linkedin.svg"
                alt="Linkdin"
              />
            </div>
          </div>
        </div>
        <ul className="flex flex-col md:gap-2 md:text-[16px] gap-1 text-sm  mt-12  ">
          <li className="cursor-pointer ">About us</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Contect us</li>
        </ul>
        <ul className="flex flex-col md:gap-2 md:text-[16px] gap-1 text-sm  mt-12 ">
          <li className="cursor-pointer">Support</li>
          <li className="cursor-pointer">Knowledge base</li>
          <li className="cursor-pointer">Live chat</li>
        </ul>
        <ul className="flex flex-col md:gap-2 md:text-[16px] gap-1 text-sm  mt-12 ">
          <li className="cursor-pointer">Jobs</li>
          <li className="cursor-pointer">Our teams</li>
          <li className="cursor-pointer">Leadership</li>
          <li className="cursor-pointer">Privacy Policy</li>
        </ul>
        <ul className="flex flex-col md:gap-2 md:text-[16px] gap-1 text-sm  mt-12 ">
          <li className="cursor-pointer">Nordic Chair</li>
          <li className="cursor-pointer">Kruzo Aero</li>
          <li className="cursor-pointer">Ergonomic Chair</li>
        </ul>
      </div>
      <hr className="border-gray-600" />
      <div className="md:flex md:flex-row flex-col justify-between w-full md:text-[16px] text-sm">
        <p >
          Copyright {copy} 2024. All Rights Reserved. — Designed with ❤️ by JP
        </p>
        <div className=" flex justify-center gap-3 md:mt-0 mt-10 ">
          <p>Terms & Conditions</p>
          <p> Privacy Policy</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
