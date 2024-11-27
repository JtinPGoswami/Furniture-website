import React, { useEffect, useState } from "react";
import { setLocalStorage } from "../utils/LocalStor";
import { useAuth } from "../Context/AuthContext";

const Cart_item = ({ item, cart, updateCart, totalCal }) => {
  const { img, name, price } = item;
  const [quntity, setQuntity] = useState(item.quntity || 1);
  const [totalPrice, setTotalPrice] = useState(
    item.quntity * item.price || price
  );

  const { LoggedinUserData, userIndex, usersData } = useAuth();
  const Loggedin = LoggedinUserData();
  const users = usersData();

  const userIdx = userIndex(Loggedin.username);

  const handleRemove = (e) => {
    const imgurl =
      e.target.parentElement.parentElement.children[0].childNodes[0].src.slice(
        22
      );

    if (userIdx !== -1) {
      const updatedCart = cart.filter((cartItem) => cartItem.img !== imgurl);
      updateCart(updatedCart);
    }
  };

  const Increment = () => {
    setQuntity((prev) => prev + 1);
  };

  const Decrement = () => {
    setQuntity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  useEffect(() => {
    updateCart(cart);
    setTotalPrice(price * quntity);

    if (userIdx !== -1) {
      const updatedCart = users[userIdx].cart.map((cartItem) =>
        cartItem.img === img
          ? { ...cartItem, quntity, totalPrice: price * quntity }
          : cartItem
      );

      users[userIdx] = { ...users[userIdx], cart: updatedCart };

      setLocalStorage("users", users);
    }
  }, [quntity, img, price]);

  return (
    <tr className="border-b border-b-[#80808094] pb-3 w-full flex items-center lg:gap-[50px] gap-20 text-center">
      <td className=" w-[15%] flex justify-center items-center flex-shrink-0">
        <img className="xl:w-36 lg:w-30 md:w-24 w-20" src={img} alt="chair" />
      </td>
      <td className=" w-[15%] ">{name}</td>
      <td className=" w-[15%] ">${price}</td>
      <td className=" w-[15%] flex gap-2">
        <img
          onClick={Decrement}
          className="w-3 cursor-pointer"
          src="minus.svg"
          alt="decrease"
        />
        <input
          className="w-10 h-10 text-center border border-gray-500"
          type="number"
          value={quntity}
          readOnly
        />
        <img
          onClick={Increment}
          className="w-3 cursor-pointer"
          src="pluse.svg"
          alt="increase"
        />
      </td>
      <td className=" w-[15%] ">${totalPrice.toFixed(2)}</td>
      <td className=" w-[15%] flex justify-center items-center">
        <img
          onClick={handleRemove}
          className="rotate-45 w-5 cursor-pointer active:bg-slate-300 rounded-full"
          src="pluse.svg"
          alt="remove item"
        />
      </td>
    </tr>
  );
};

export default Cart_item;
