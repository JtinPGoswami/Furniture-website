import { useAuth } from "../Context/AuthContext";
import { setLocalStorage } from "../utils/LocalStor";
import { toast } from 'react-toastify';


const Chair_hover = ({ img, name, price }) => {
  const {LoggedinUserData,usersData}=useAuth()
  const userData = LoggedinUserData()
  const handleAfterClick = (e) => {
    toast.success("Added to cart");
    const cart = { img, name, price };
    const users =usersData()

    if (!userData.hasOwnProperty("cart")) {
      userData.cart = [];
    }
    const isInCart = userData.cart.findIndex((item) => item.img === cart.img);

    if (isInCart !== -1) {
      userData.cart[isInCart] = { ...userData.cart[isInCart], ...cart };
    } else {
      userData.cart.push(cart);
    }

    setLocalStorage("users", users);
  };

  return (
    <div
      className={` group md:mt-0 mt-20 relative flex flex-col justify-center items-center gap-3 group
    before:content-[''] before:bg-[#DCE5E4] before:absolute before:w-full before:h-0 
    before:transition-all before:duration-500 before:ease-in-out before:bottom-[-30px] 
    before:left-0 before:rounded-lg before:hover:h-64 before:z-0`}
    >
      <img
        className="relative z-10 h-80 w-80  transition-transform duration-500 ease-in-out group-hover:-translate-y-6"
        src={img}
        alt="chair"
      />
      <p className="relative z-10">{name}</p>
      <p className="font-bold relative z-10">${price}</p>

      <div
        onClick={handleAfterClick}
        className="absolute w-8 h-8 bottom-0  bg-black bg-center bg-no-repeat rounded-full p-2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:bottom-[-45px] cursor-pointer z-20"
        style={{ backgroundImage: "url('cross.svg')" }}
      ></div>
    </div>
  );
};

export default Chair_hover;
