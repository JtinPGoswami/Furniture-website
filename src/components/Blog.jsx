import React from 'react'

const Blog = () => {
  return (
    <div className=' flex flex-col justify-center items-start gap-2'>
      <img className='xl:w-[380px] xl:h-72 lg:w-80 md:w-72 rounded-xl hover:opacity-50' src="post-1.jpg" alt="" />
      <p className='font-bold'>First Time Home Owner Ideas</p>
      <p>by <span className='font-bold'>Kristin Watson</span> on<span className='font-bold'> Dec 19, 2021</span></p>
    </div>
  )
}

export default Blog
