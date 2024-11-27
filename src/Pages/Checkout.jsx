import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Coupon from "../components/Coupon";
import AddressForm from "../components/AddressForm";
import { getLocalStorage } from "../utils/LocalStor";


const Checkout = () => {
  const navigate = useNavigate();

  
  const handelNavigate = () => {
    navigate("/thanks");
  };
  
  
  
  const Loggedin = getLocalStorage("LogedinUser") || {};

  const users = Array.isArray(getLocalStorage("users"))
  ? getLocalStorage("users")
    : [];
    
    const userDetails = users.find((user) => user.username === Loggedin.username);
    const cart=userDetails.cart
    let arr=[]
    let i=0
    
    cart.forEach(element=> {
      arr[i]=element.totalPrice
      i++
    });
    
    const tmp= arr.reduce((acc,item)=>acc+item,0)
    return (
      <section className="w-4/5 m-auto">
      <div className="border border-[#2222227f] h-16 p-5">
        <p className="text-gray-700">
          Returning customer?
          <Link className="text-black underline hover:no-underline" to="/">
            Click here
          </Link>
          to login
        </p>
      </div>
      <div className="w-full flex md:flex-nowrap flex-wrap flex-row justify-between gap-6">
        <div className=" w-full flex flex-col gap-y-6">
          <AddressForm />
          <div className=" bg-white p-10 rounded-md">
            <Coupon />
          </div>
        </div>
        <div className="w-full bg-white  p-10 rounded-md  mt-10">
          <div>
            <h4 className="text-black text-3xl font-semibold">Your Order</h4>
            <div className="flex justify-between items-center mt-5 pb-5  border-b-4  border-black ">
              <p>Product</p>
              <p>Total</p>
            </div>
            {cart.map((item, idx) => (
              <div key={idx}className="flex justify-between items-center mt-5 pb-5  border-b border-[#36363679] ">
                <p>{item.name}X{item.quntity}</p>
                <p>${item.totalPrice}</p>
              </div>
            ))}

            <div className="flex justify-between items-center mt-5 pb-5 border-b border-[#36363679] ">
              <p>Cart Subtotal</p>
              <p>${tmp}</p>
            </div>
            <div className="flex justify-between items-center mt-5 pb-5 border-b border-[#36363679] ">
              <p>Total</p>
              <p>${tmp}</p>
            </div>
          </div>
          <div>
            <div className=" mt-20 flex flex-col gap-y-5 mb-5">
              <div className=" py-5 px-3  border border-[#2e2e2e97] ">
                <p className="underline hover:no-underline">
                  Direct Bank Transfer
                </p>
              </div>
              <div className=" py-5 px-3  border border-[#2e2e2e97] ">
                <p className="underline hover:no-underline">Chaque Payment</p>
              </div>
              <div className=" py-5 px-3  border border-[#2e2e2e97] ">
                <p className="underline hover:no-underline">Paypal</p>
              </div>
            </div>
            <button
              onClick={handelNavigate}
              className="md:px-7 md:py-4 px-5 py-2 text-sm font-bold text-white bg-black rounded-full hover:bg-[#323232]"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
