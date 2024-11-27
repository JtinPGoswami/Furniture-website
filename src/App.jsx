import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Contect from "./Pages/Contect"
import BlogPage from "./Pages/BlogPage"
import Cart from "./Pages/Cart"
import Shop from "./Pages/Shop"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Profile from "./Pages/Profile"
import { Routes,Route } from "react-router-dom";
import Checkout from "./Pages/Checkout";
import Thank_You from "./Pages/Thank_You";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import PrivateRoute from "./Pages/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import PrivateRouteLogOut from "./Pages/PrivateRouteLogOut";
import UserDetails from "./Pages/UserDetails";


const App = () => {

  
  return (
    <>
        <main className="bg-[#EFF2F1] flex flex-col gap-40 justify-center items-center overflow-x-hidden ">
        <Header/>
        <AuthProvider>

        <Routes>
         
          <Route  path='/shop' element={<Shop/>}/>
          <Route  path='/about' element={<About/>}/>
          <Route  path='/blog' element={<BlogPage/>}/>
          <Route  path='/contect' element={<Contect/>}/>
          <Route  path='/services' element={<Services/>}/>
          <Route  path='/' element={<Home/>}/>

          <Route  path='/login' element={<PrivateRouteLogOut element={<Login/>}/>}/>
          <Route  path='/signup' element={<PrivateRouteLogOut element ={<SignUp/>}/>}/>
          <Route  path='/details' element={<PrivateRouteLogOut element ={<UserDetails/>}/>}/>

          <Route  path='/thanks' element={<PrivateRoute element={<Thank_You/>}/>}/>
          <Route  path='/cart' element={<PrivateRoute element={<Cart/>}/>}/>
          <Route  path='/checkout' element={<PrivateRoute element={<Checkout/>}/>}/>
          <Route  path='/profile' element={<PrivateRoute element={<Profile/>}/>}/>
        </Routes>
        </AuthProvider>
        <Footer/>
        </main>
    </>
  );
};

export default App;
