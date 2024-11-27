import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getLocalStorage } from "../utils/LocalStor";
import { useAuth } from "../Context/AuthContext";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { Logedout } = useAuth();
  const chkLogedIn = getLocalStorage("LogedinUser");

  const logoutHandler = () => {
    Logedout();
    navigate("/login");
  };
  const handelNavigate = (e) => {
    if (e.target.innerText === "Shop Now") {
      navigate("/shop");
    } else {
      navigate("/blog");
    }
  };

  const getPath = () => {
    switch (location.pathname) {
      case "/":
        return "Modern Interior Design Studio";
      case "/shop":
        return "Shop";
      case "/about":
        return "About us";
      case "/services":
        return "Services";
      case "/blog":
        return "Blog";
      case "/contect":
        return "Contact us";
      case "/profile":
        return "Profile";
      case "/cart":
        return "Cart";
      default:
        return "Modern Interior Design Studio";
    }
  };

  return (
    <section className="text-[#899E96] bg-[#3B5D50] w-full h-[39rem] pt-5 md:px-24 px-5">
      <nav className="w-full flex justify-between items-center h-25">
        <div className="text-2xl md:text-3xl font-bold md:min-w-96">
          <h3 className="text-white">Furni</h3>
        </div>
        <div className="w-1/2 md:flex hidden whitespace-nowrap lg:gap-10 gap-3 justify-end text-sm items-center">
          {[
            { to: "/", label: "Home" },
            { to: "/shop", label: "Shop" },
            { to: "/about", label: "About us" },
            { to: "/services", label: "Services" },
            { to: "/blog", label: "Blog" },
            { to: "/contect", label: "Contact us" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm pb-4 border-b-4 transition-all ease-in ${
                location.pathname === link.to
                  ? "border-orange-500 text-white"
                  : "border-transparent hover:border-orange-500 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/profile"
            className={`pb-4 border-b-4 transition-all ease-in ${
              location.pathname === "/profile"
                ? "border-orange-500 text-white"
                : "border-transparent hover:border-orange-500 hover:text-white"
            }`}
          >
            <img className="min-w-4" src="user.svg" alt="User Profile" />
          </Link>
          <Link
            to="/cart"
            className={`pb-4 border-b-4 transition-all ease-in ${
              location.pathname === "/cart"
                ? "border-orange-500 text-white"
                : "border-transparent hover:border-orange-500 hover:text-white"
            }`}
          >
            <img className="min-w-4" src="cart.svg" alt="Cart" />
          </Link>
          <button
            onClick={logoutHandler}
            className={`py-2 px-3 bg-red-600  hover:bg-red-800 rounded-3xl mb-2 text-white ${
              chkLogedIn.length <= 0 ? "hidden" : "block"
            }`}
          >
            Log out
          </button>
        </div>
        <div className="md:hidden cursor-pointer flex justify-center items-center h-6 w-6 flex-shrink-0">
          <img src="hamburger.svg" alt="hamburger" />
        </div>
      </nav>
      <div className="md:flex-row gap-9 flex flex-col justify-between items-center w-full mt-14">
        <div className="md:w-96 flex flex-col gap-5 w-full">
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug">
            {getPath()}
          </h2>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div className="buttons flex gap-3">
            <button
              onClick={handelNavigate}
              className="md:px-7 md:text-[16px] text-sm px-5 md:h-14 h-10 font-bold text-black bg-[#F8B810] rounded-full"
            >
              Shop Now
            </button>
            <button
              onClick={handelNavigate}
              className="md:px-7 md:py-4 text-sm px-5 md:h-14 h-10 font-bold text-white border border-[#899E96] rounded-full hover:border-white"
            >
              Explore
            </button>
          </div>
        </div>
        <div className="relative before:content-[''] md:before:w-[225px] md:before:h-[217px] before:w-28 before:h-28 before:bg-[url('dots-light.svg')] before:bg-cover before:absolute md:before:top-[50px] md:before:right-[-65px] before:right-[-50px] before:top-[15px]">
          <img className="relative z-10" src="couch.png" alt="Couch" />
        </div>
      </div>
    </section>
  );
};

export default Header;
