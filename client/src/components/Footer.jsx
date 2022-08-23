import React from 'react'
import {Link} from 'react-router-dom'
import Logo from './Assets/logo.png'


const Footer = () => {
  return (
    <div className='mt-40 h-64 bottom-0 bg-blue-500 '>
      <div className="p-1 flex justify-between items-center">
        <div className="text-white flex items-center space-x-2">
            <img src={Logo} alt="WELIVE Healthcare" className='rounded-lg w-32 ' />
            <h1 className='hidden md:block text uppercase text-2xl '>welive <span >health</span></h1>
        </div>
        <div className="hidden md:block text uppercase text-white">
            <h1 className='uppercase font-bold text-xl mb-5'>Quick Links</h1>
            <ul className=''>
                <li className='hover:underline text-blue500'><Link to='/'>Home</Link></li>
                <li className='hover:underline'><Link to='/doctor'>Doctor</Link></li>
                <li className='hover:underline'><Link to='/service'>Services</Link></li>
                <li className='hover:underline'><Link to='/about'>About Us</Link></li>
                <li className='hover:underline'><Link to='/contact'>Contact Us</Link></li>
        </ul>
        </div>
        <div className='text-white flex flex-col mt-5'>
            <h1 className='uppercase mb-5 text-xl font-bold'>Hours</h1>
            <p className='mr-20'>Monday: <span className=' ml-10'>9:00-18:00</span></p>
            <p>Tuesday: <span className=' ml-10'>9:00-18:00</span></p>
            <p>Wednessday: <span className=' ml-2'>9:00-18:00</span></p>
            <p>Thursday: <span className=' ml-8'>9:00-18:00</span></p>
            <p className='ml-2'>Friday: <span className=' ml-12'>9:00-18:00</span></p>
            <p>Saturday: <span className=' ml-9'>9:00-16:00</span></p>
            <p className='ml-2'>Sunday: <span className=' ml-10'>12:00-18:00</span></p>
        </div>
      </div>
    </div>
  )
}

export default Footer