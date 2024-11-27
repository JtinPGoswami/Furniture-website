import React from 'react'

const Coupon = () => {
  return (
    <div className='w-full flex flex-col gap-y-3'>
    <span className='text-2xl font-semibold text-black'>Coupon</span>
    <p className=' text-sm text-gray-500 '>Enter your coupon code if you have one.</p>
    <div className=' w-full flex justify-center items-center gap-4'>
      <input  className="w-4/5 h-12 pl-3  border border-[#80808088] rounded-lg"type="text" placeholder='coupon code' />
      <button className="md:px-7 md:py-4 px-5 py-2 text-sm font-bold text-white bg-black rounded-full hover:bg-[#323232] w-44">
    Apply coupon</button>
    </div>
    </div>
  )
}

export default Coupon