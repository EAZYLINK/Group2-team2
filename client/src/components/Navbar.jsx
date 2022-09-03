import { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from './Assets/welive.png'

const Navbar = () => {

  const links =  [
    {
      id: 1,
      link: 'Home',
      to: "/"
    },
    {
      id: 2,
      link: 'About us',
      to: "/about"
    },
    {
      id: 3,
      link: 'Doctor',
      to: "/doctor"
    },
    {
      id: 4,
      link: 'Services',
      to: "/service"
    },
    {
      id: 5,
      link: 'FAQ',
      to: "/faq"
    },
  ]



    const [active, setActive] = useState(false);

    const showMenu = () => {
    setActive(!active)
  }

  return (
    <div className='fixed w-full flex items-center justify-between px-4'>
        <div>
          <Link to='/'>
            <img src={Logo} alt="WELIVE Healthcare" className=' w-20 py-2' /> 
          </Link>
        </div>
        <nav>
           <ul className='hidden md:flex'>
              {
                 links.map(({ id, link, to }) => (
                  <li key={id} className='px-4 hover:underline hover:scale-105 duration-200 cursor-pointer font-medium'><Link to={to}>{link}</Link></li>
                ))
              }
          </ul>
        </nav>
        <div className='hidden md:flex '>
          <p className='px-8'><Link to='/register'>Signup</Link></p>
          <p><Link to='/login'>Login</Link></p>
        </div>

        <div onClick={showMenu} className="md:hidden cursor-pointer pr-4 z-10 ">
          {active ? <FaTimes size={40}/> : <FaBars size={40}/>}  
        </div>

        {
          active && (
            <ul className='flex flex-col justify-center items-center absolute left-0 top-0 w-full h-screen md:hidden'>
              {
                links.map(({ id, link, to }) => (
                  <li key={id} className=' px-4 hover:underline hover:scale-105 duration-200 cursor-pointer py-6 text-3xl'><Link to={to}>{link}</Link></li>
              
                ))
              }
                <div className='flex flex-col justify-center items-center text-xl '>
                  <p className='py-8'><Link to='/register'>Signup</Link></p>
                   <p><Link to='/login'>Login</Link></p>
                </div>
            </ul>
          )
        }
    </div>
  )
}

export default Navbar