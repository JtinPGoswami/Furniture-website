import React, { useState, useEffect } from "react";
import Cart_item from "../components/Cart_item";
import Coupon from "../components/Coupon";
import { useNavigate } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStor";
import { useAuth } from "../Context/AuthContext";


const Cart = () => {

  const{usersData,LoggedinUserData,userIndex}=useAuth()
  
  const users = usersData()
  
    const LoggedinUser = LoggedinUserData();
    
    const [cart, setCart] = useState(LoggedinUser?.cart || []);
    
    const updateCart = (updatedCart) => {
      
      setCart(updatedCart);
      
      const userIdx = userIndex()
      
      if (userIdx !== -1) {
        users[userIdx].cart = updatedCart;
        setLocalStorage("users", users);
      }
    };
    
    const [totl, setTotl] = useState(0);
    const navigate = useNavigate();
    
    
    
    const totalCal=()=>{
      const users = usersData()
  
    const LoggedinUser =LoggedinUserData();
    const cart=LoggedinUser?.cart || []
  let arr=[]
  let i=0
  cart.forEach(element=> {
    arr[i]=element.totalPrice
    i++
  });
  const tmp= arr.reduce((acc,item)=>acc+item,0)
  setTotl(tmp)
  
} 

  useEffect(() => {
    totalCal()  
  }, [cart])
  
 


const handleNavigate = () => {
  navigate("/checkout");
};


  return (
    <section className="w-4/5 m-auto my-24">
      <div className="scrollHide overflow-scroll">
        <table className="w-full overflow-x-scroll">
          <thead>
            <tr className="border-b-2 border-b-black pb-3 w-full flex justify-evenly gap-20 items-center">
              <th className="w-[15%] font-semibold text-black text-xl">Image</th>
              <th className="w-[15%] font-semibold text-black text-xl">Product</th>
              <th className="w-[15%] font-semibold text-black text-xl">Price</th>
              <th className="w-[15%] font-semibold text-black text-xl">Quantity</th>
              <th className="w-[15%] font-semibold text-black text-xl">Total</th>
              <th className="w-[15%] font-semibold text-black text-xl">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((items, index) => <Cart_item key={index} item={items} cart={cart} updateCart={updateCart} totalCal={totalCal} />)
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-10 text-gray-500">
                  Your cart is empty.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between my-20 gap-20">
        <div className="w-[40%] flex flex-col gap-y-14">
          <div className="flex gap-10">
            <button 
            onClick={totalCal}
           className="md:px-7 md:py-4 px-5 py-2 text-sm font-bold text-white bg-black rounded-full hover:bg-[#323232]">
              Update Cart
            </button>
            <button onClick={()=>{navigate("/shop")}} className="md:px-7 md:py-4 px-5 py-2 text-sm font-bold text-white bg-black rounded-full hover:bg-[#323232]">
              Continue shopping
            </button>
          </div>
          <Coupon />
        </div>
        <div className="w-[20%] flex justify-end flex-col">
          <span className="text-3xl font-semibold pb-4 border-b border-b-[#5a585878]">
            Cart Totals
          </span>
          <div className="flex justify-between w-full items-center my-6">
            <p>Subtotal</p>
            <p className="text-black font-semibold">${totl}</p>
          </div>
          <div className="flex justify-between w-full items-center my-6">
            <p>Total</p>
            <p className="text-black font-semibold">${totl}</p>
          </div>
          <button
            className="md:px-7 md:py-4 px-5 py-2 text-sm font-bold text-white bg-black rounded-full hover:bg-[#323232] w-48"
            onClick={handleNavigate}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
