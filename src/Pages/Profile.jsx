import React from "react";
import { getLocalStorage } from "../utils/LocalStor";
import { useNavigate } from "react-router-dom";

const Profile = () => {
const navigate=useNavigate()
  const handelBtnClick =(e)=>{
if(e.target.innerText=="Go to Cart"){
      navigate("/cart")
}

  }

const userDetails=  getLocalStorage("LogedinUser")
console.log(userDetails);

const imgsrc=userDetails.imgsrc;

  return (
    <section className="w-2/3 border border-[#3B5D50] rounded-xl p-10 m-auto flex flex-col justify-center items-center h-auto bg-gray-200 gap-y-8">
      
      <div className="flex flex-col justify-center items-center gap-y-3">
        
        {imgsrc? <img className="w-24 h-24 rounded-full border-4 border-[#3B5D50]"
          src={imgsrc} 
          alt="Profile"/>:<img className="w-24 h-24 rounded-full border-4 border-[#3B5D50]"
          src="placeholder.png" 
          alt="Profile"/> }
        
        <h2 className="text-2xl font-bold text-[#3B5D50]">{userDetails.fname} {userDetails.lname}</h2>
        <p className="text-gray-600">{userDetails.email}</p>
      </div>

      
      <div className="flex flex-col w-4/5 m-auto gap-y-5 justify-center items-center">
        <div className="flex justify-between items-center w-full">
          <span className="w-[20%]  xl:text-lg md:text-base sm:text-sm text-sm font-medium text-gray-700">Username: </span>
          <span className="w-[20%]  xl:text-lg md:text-base sm:text-sm text-sm text-[#3B5D50]  ">{userDetails.username}</span>
        </div>
        <div className="flex justify-between items-center w-full">
          <span className="w-[20%]  xl:text-lg md:text-base sm:text-sm text-sm font-medium text-gray-700">Membership:</span>
          <span className="w-[20%]  xl:text-lg md:text-base sm:text-sm text-sm text-[#3B5D50]  ">Premium</span>
        </div>
        <div className="flex justify-between items-center w-full">
          <span className="w-[20%] xl:text-lg md:text-base sm:text-sm text-sm font-medium text-gray-700">Joined:</span>
          <span className="w-[20%]  xl:text-lg md:text-base sm:text-sm text-sm text-[#3B5D50]   ">June 2022</span>
        </div>
        <div className="flex justify-between items-center w-full">
          <span className="w-[20%]   font-medium text-gray-700 xl:text-lg md:text-base sm:text-sm text-sm">Address:</span>
          <span className="w-[20%]   text-[#3B5D50] xl:text-lg md:text-base sm:text-sm text-sm break-words   ">
           {userDetails.address1}
          </span>
        </div>
      </div>
      
      <div className="flex justify-between gap-5 w-4/5 m-auto mt-5">
        <button className="w-40 text-white text-lg h-12 bg-[#3B5D50] rounded-lg">
          Edit Profile 
        </button>
        <button onClick={handelBtnClick} className="w-40 text-white text-lg h-12 bg-[#3B5D50] rounded-lg">
          Go to Cart
        </button>
      </div>
    </section>
  );
};
export default Profile;
