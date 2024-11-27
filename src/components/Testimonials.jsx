import React from 'react'

const Testimonials = () => {
  return (
    <section className='flex flex-col w-1/2 m-auto justify-center items-center gap-5 mb-40'>
      <span className=' md:text-3xl text-2xl font-bold '>Testimonials</span>
      <p className='text-gray-700 text-center md:text-lg text-base '>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
      <div className=' flex flex-col justify-center items-center'>
        <img className="w-20 h-20 rounded-full "src="person-1.png" alt="Maria Jones" />
      <p className='font-bold text-black'>Maria Jones</p>
      <p>CEO, Co-Founder, XYZ Inc.</p>
        </div>
    </section>
  )
}

export default Testimonials