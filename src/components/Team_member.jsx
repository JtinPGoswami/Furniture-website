import React from 'react'

const Team_member = () => {
  return (
    <div className='flex flex-col justify-start gap-6 w-[23%]  mb-40'>
      <img className="w-[306px] h-[306px] "src="person_4.jpg" alt="person" />
      <span className='text-3xl font-bold text-black underline hover:no-underline'>Kathryn Ryan</span>
      <p className='text-gray-700 '>CEO, Founder, Atty.</p>
      <p className='text-gray-700 '>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    </div>
  )
}

export default Team_member