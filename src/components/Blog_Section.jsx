import React from 'react'
import Blog from './Blog'
const Blog_Section = () => {
  return (
    <div className='w-4/5 m-auto mb-40 '>
      <div className='flex justify-between w-full items-center mb-10'>
        <span className='text-2xl text-black'>Recent Blog</span>
        <p className='text-black underline decoration-solid text-base hover:no-underline'>View All Posts</p>
      </div>
      <div className='flex md:flex-row flex-col w-full justify-between items-center gap-2'>
        <Blog/>
        <Blog/>
        <Blog/>
      </div>
    </div>
  )
}

export default Blog_Section