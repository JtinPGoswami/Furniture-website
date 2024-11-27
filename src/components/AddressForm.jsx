import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";

const AddressFrom = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [company, setCompany] = useState("");
  const [address1, setAddress1] = useState("");
  const [state, setState] = useState("");
  const [post, setPost] = useState("");

  const { LoggedinUserData } = useAuth();
  const handelCheckbox = () => {
    const userDetails = LoggedinUserData();

    setFname(userDetails.fname);
    setLname(userDetails.lname);
    setCompany(userDetails.company);
    setAddress1(userDetails.address1);
    setState(userDetails.state);
    setPost(userDetails.post);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "fname") {
      setFname(value);
    } else if (name === "lname") {
      setLname(value);
    } else if (name === "company") {
      setCompany(value);
    } else if (name === "address1") {
      setAddress1(value);
    } else if (name === "state") {
      setState(value);
    } else if (name === "post") {
      setPost(value);
    }
  };

  return (
    <div className=" w-full flex flex-col gap-y-10 mt-10">
      <form className="w-fukll px-10 py-10 flex flex-wrap gap-y-3 justify-between items-center bg-white rounded-lg">
        <h4 className="text-black text-3xl font-semibold">Billing Details</h4>
        <div className="flex w-full flex-col justify-start gap-y-5">
          <label>
            <input type="checkbox" onClick={handelCheckbox} /> Ship To Same
            Address?
          </label>
        </div>

        <div className="flex flex-col justify-start w-[48%]">
          <label
            className="after:content-['*'] after:text-red-500 after:ml-1"
            htmlFor="fname"
          >
            First Name
          </label>
          <input
            required
            value={fname}
            onChange={handleChange}
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
          <input
            required
            value={lname}
            onChange={handleChange}
            className="pl-2 h-14 rounded-md border border-[#80808088]"
            type="text"
            name="lname"
          />
        </div>

        <div className="flex flex-col justify-start w-full">
          <label htmlFor="company">Company name</label>
          <input
            value={company}
            onChange={handleChange}
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
          <input
            required
            value={address1}
            onChange={handleChange}
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
          <input
            required
            value={state}
            onChange={handleChange}
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
          <input
            required
            value={post}
            onChange={handleChange}
            className="pl-2 h-14 rounded-md border border-[#80808088]"
            type="text"
            name="post"
          />
        </div>
      </form>
    </div>
  );
};

export default AddressFrom;
