import React from 'react'
import Why_us_card from '../components/Why_us_card'
import Chair from '../components/Chair'
import Testimonials from '../components/Testimonials'
const Services = () => {
  return (
    <>
    <div className=' flex flex-wrap w-4/5 m-auto gap-3 justify-between items-center mt-40 gap-y-12'>
    <Why_us_card/>
    <Why_us_card/>
    <Why_us_card/>
    <Why_us_card/>
    <Why_us_card/>
    <Why_us_card/>
    <Why_us_card/>
    <Why_us_card/>
    </div>
    <Chair/>
    <Testimonials/>
    </>
  )
}

export default Services