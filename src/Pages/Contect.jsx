import React from "react";

const Contect = () => {
  return (
    <section className="w-[60%] m-auto my-24 flex flex-col gap-y-14">
      <div className=" flex md:flex-row flex-col justify-between w-full md:items-center items-start gap-y-9">
        <div className="flex  items-center  gap-5 md:w-[30%] ">
          <div className="w-12 h-12 bg-[#3B5D50] rounded-md flex items-center justify-center">
            <img className="w-5 " src="location.svg" alt="location icon" />
          </div>
          <p className="w-52">43 Raymouth Rd. Baltemoer, London 3910</p>
        </div>
        <div className="flex  items-center  gap-5 md:w-[30%]">
          <div className="w-12 h-12 bg-[#3B5D50] rounded-md flex items-center justify-center">
            <img className="w-5" src="massage.svg" alt="massage icon" />
          </div>
          <p>example123@abc.com</p>
        </div>
        <div className="flex  items-center  gap-5 md:w-[30%]">
          <div className="w-12 h-12 bg-[#3B5D50] rounded-md flex items-center justify-center">
            <img className="w-5" src="call.svg" alt="call icon" />
          </div>
          <p>+91 1234567899</p>
        </div>
      </div>
      <form className=" flex flex-wrap w-full justify-between gap-y-5 items-center">
         <div className="lg:w-[48%] md:w-[45%] w-full">
          <label htmlFor="Fname">First Name</label>
        <input type="text" name="Fname" className="w-full h-12 border border-[#3b5d5075] rounded-md text-black " />
          </div>
         <div className="lg:w-[48%] md:w-[45%] w-full">
          <label htmlFor="Lname">Last Name</label>
        <input type="text" name="Lname" className="w-full h-12 border border-[#3B5D5075] rounded-md text-black " />
          </div>
          <div className="w-full">
         <label htmlFor="email">Email</label>
        <input type="text" name="email" className="w-full  h-12 border border-[#3B5D5075] rounded-lg  text-black "/>
          </div>
          <div className="w-full">
        <label htmlFor="massage">Massage</label>
        <textarea  name="massage"className="w-full h-36 rounded-xl resize-none border border-[#3B5D5075]"></textarea>
          </div>
        <button className="md:px-7 md:py-4 px-5 py-2 text-sm font-bold text-white bg-black rounded-full hover:bg-[#323232]">
          Send Massage
        </button>
      </form>
    </section>
  );
};

export default Contect;
