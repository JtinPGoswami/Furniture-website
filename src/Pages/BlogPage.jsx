import React from 'react'
import Blog from '../components/Blog'
import Testimonials from '../components/Testimonials'
const BlogPage = () => {
  return (
    <>
    <div className='flex flex-wrap w-4/5 m-auto justify-between items-center mt-40 gap-y-10'>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
    </div>
    <Testimonials/>
    
    </>
  )
}

export default BlogPage