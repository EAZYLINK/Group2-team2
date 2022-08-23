import { useState } from 'react'
import {Link} from 'react-router-dom'
import MobileNavbar from './MobileNavbar'
import {AiOutlineMenu} from 'react-icons/ai'
import Logo from './Assets/logo.png'

const Navbar = () => {
    const [active, setActive] = useState(false);

    const showMenu = () => {
    setActive(!active)
  }

  return (
    <div className="px-9 py-7 lg:pt-16">
    <header className='fixed inset-0 h-16 flex justify-between items-center px-5 lg:pt-16'>
      <div className='flex items-center'>
      <img src={Logo} alt="WELIVE Healthcare" className='rounded-lg w-32 ' />
      <h1 className='hidden md:block text uppercase text-2xl '>welive <span >health</span></h1>
      </div>  
      <nav>
      <AiOutlineMenu onClick={showMenu} className="md:hidden scale-150 cursor-pointer  border border-black rounded-md text-4xl"/>

      <ul className=' md:inline-flex space-x-4 text-2xl font-bold p-4 sm:hidden lg:text-base lg:text-3xl lg:space-x-8'>
          <li className='hover:underline text-blue500'><Link to='/'>Home</Link></li>
          <li className='hover:underline'><Link to='/doctor'>Doctor</Link></li>
          <li className='hover:underline'><Link to='/service'>Services</Link></li>
          <li className='hover:underline'><Link to='/about'>About Us</Link></li>
          <li className='hover:underline'><Link to='/contact'>Contact Us</Link></li>
        </ul>
      </nav>
      <MobileNavbar mobileMenu={showMenu} active={active}/>
    </header>
    </div>
  )
}

export default Navbar