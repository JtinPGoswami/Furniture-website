import React from 'react'
import Why_us from '../components/Why_us'
import Team_member from '../components/Team_member'

const About = () => {
  return (
    <>
      <Why_us/>
      <div className='flex flex-col justify-center items-center w-4/5 m-auto gap-y-20'>
    <h4 className='text-4xl text-black font-semibold'>Our Team</h4>
      <div className=' flex flex-wrap gap-4 '>
          <Team_member/> 
          <Team_member/> 
          <Team_member/> 
          <Team_member/> 
      </div>
      </div>
    </>
  )
}

export default About