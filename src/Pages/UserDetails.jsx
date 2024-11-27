import { useState } from "react";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "../utils/LocalStor";
import {  useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useAuth } from "../Context/AuthContext";

const AddressFrom = () => {
const {usersData,userIndex}=useAuth();
  const navigate=useNavigate()

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [company, setCompany] = useState("");
  const [address1, setAddress1] = useState("");
  const [img, setImg] = useState(null);
  const [state, setState] = useState("");
  const [post, setPost] = useState("");
  const [phone, setPhone] = useState("");
    

const handleChange=(e)=>{
  const name=e.target.name
  const value =e.target.value
  if(name==="fname"){
    setFname(value)
  }
  else if(name==="lname"){
    setLname(value)
  }
  else if(name==="company"){
    setCompany(value)
  }
  else if(name==="address1"){
    setAddress1(value)
  }
  else if(name==="state"){
    setState(value)
  }
  else if(name==="post"){
    setPost(value)
  }
  else if(name==="phone"){
    setPhone(value)
  }
}


  const handleImgChange = (e) => {
setImg(e.target.files[0]);
  
};

const imgSrc = img ? URL.createObjectURL(img) : null;
const handleSubmit = (e) => {
  e.preventDefault();

const users=usersData()
  console.log(users);
  
  const tmpUser = getLocalStorage("tmp") || null;

  if (!tmpUser) {
    console.error("No temporary user found");
    return;
  }

  const useridx=userIndex(tmpUser)
console.log(useridx,userIndex ,tmpUser);

  if (useridx === -1) {
    console.error("User not found");
    return;
  }

  const userDetails = { fname, lname, company, address1, state, post, phone, imgSrc };
  users[useridx] = { ...users[useridx], ...userDetails };

  setLocalStorage("users", users);
  removeLocalStorage("tmp");
  toast.success("Sign UP Successfull");
  navigate("/login")
};




  return (

    <form  onSubmit={handleSubmit} className="lg:w-3/5 md:w-4/5 sm:[90%] w-[98%] border border-[#3B5D50] m-auto px-10 py-10 flex flex-wrap gap-y-3 justify-between items-center bg-white rounded-lg">
  
      <div className="flex flex-col justify-start w-[48%]">
        <label
          className="after:content-['*'] after:text-red-500 after:ml-1"
          htmlFor="fname"
        >
          First Name
        </label>
        <input required value={fname} onChange={handleChange}
          className="pl-2 h-14 rounded-md border border-[#80808088]"
          type="text"
          name="fname"
        />
      </div>

      <div className="flex flex-col justify-start w-[48%] ">
        <label
          className="after:content-['*'] after:text-red-500 after:ml-1"
          htmlFor="lname"
        >
          Last Name
        </label>
        <input required value={lname} onChange={handleChange}
          className="pl-2 h-14 rounded-md border border-[#80808088]"
          type="text"
          name="lname"
        />
      </div>

      <div className="flex flex-col justify-start w-full">
        <label htmlFor="company">Company name</label>
        <input value={company} onChange={handleChange}
          className="pl-2 h-14 rounded-md border border-[#80808088]"
          type="text"
          name="company"
        />
      </div>

      <div className="flex flex-col justify-start w-full">
        <label
          className="after:content-['*'] after:text-red-500 after:ml-1"
          htmlFor="address"
        >
          Address
        </label>
        <input required value={address1} onChange={handleChange}
          className="pl-2 h-14 rounded-md border border-[#80808088]"
          type="text"
          name="address1"
          placeholder="Address line 1"
        />
      </div>

      <div className="flex flex-col justify-start w-[48%]">
        <label
          className="after:content-['*'] after:text-red-500 after:ml-1"
          htmlFor="state"
        >
          State
        </label>
        <input required value={state} onChange={handleChange}
          className="pl-2 h-14 rounded-md border border-[#80808088]"
          type="text"
          name="state"
        />
      </div>

      <div className="flex flex-col justify-start w-[48%]">
        <label
          className="after:content-['*'] after:text-red-500 after:ml-1"
          htmlFor="post"
        >
          Post/Zip
        </label>
        <input required value={post} onChange={handleChange}
          className="pl-2 h-14 rounded-md border border-[#80808088]"
          type="text"
          name="post"
        />
      </div>

      <div className="flex flex-col justify-start w-[48%]">
        <label htmlFor="file">Upload Picture</label>
        <input
          onChange={handleImgChange}
          className="content-center pl-2 h-14 rounded-md border border-[#80808088]"
          type="file"
          name="file"
        />
      </div>

      <div className="flex flex-col justify-start w-[48%]">
        <label
          className="after:content-['*'] after:text-red-500 after:ml-1"
          htmlFor="phone"
        >
          Phone
        </label>
        <input required value={phone} onChange={handleChange}
          className="pl-2 h-14 rounded-md border border-[#80808088]"
          type="number"
          name="phone"
          placeholder="Phone"
        />
      </div>

      <button className="w-32 text-white text-lg h-12 mt-5 bg-[#3B5D50] rounded-lg">Save Details</button>
    </form>
  );
};

export default AddressFrom;
