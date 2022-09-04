import React from 'react'
import Navbar from './Navbar'


const Faq = () => {
  return (
    <div>
     <Navbar/>
      <div className="h-[70vh] lg:h-[60vh] md:h-[70] w-full ">
        <div className='max-w-screen-lg mx-auto w-full h-full px-4  p-4 flex flex-col justify-center'>
          <div className="pb-8">
            <h1 className='text-4xl font-bold inline border-b-4 border-gray-500 '>FAQ</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq