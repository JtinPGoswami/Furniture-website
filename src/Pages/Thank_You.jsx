import React from 'react'
import { useNavigate } from 'react-router-dom'

const Thank_You = () => {
  const navigate=useNavigate();

  const handelNavigate =()=>{
    navigate("/shop")
  }
  return (
    <section className='flex flex-col justify-center items-center w-1/2 gap-y-5'>
      <div className="relative before:absolute before:w-12 before:h-12 before:content-['']  before:top-1 before:left-1 before:rounded-full before:bg-[#CBD5D1]"> 
        <img className='w-20 h-20 relative z-10' src="cart2.svg" alt="cart" />
      </div>
      <span className='md:text-6xl sm:text-4xl text-2xl text-black font-semibold'>
      Thank you!
      </span>
      <p className='text-[#3B5D50] sm:text-base text-sm'>You order was successfuly completed.</p>
      <button onClick={handelNavigate} className="md:px-7 md:py-4 px-5 py-2 text-sm font-bold text-white bg-black rounded-full hover:bg-[#323232]"> Back To Shop</button>
    </section>
  )
}

export default Thank_You