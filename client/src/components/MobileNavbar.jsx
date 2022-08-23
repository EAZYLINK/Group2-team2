import {Link} from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'


const MobileNavbar = ({mobileMenu, active}) => {
  return (
    <div>
     <nav>
       
        <div >
        <ul className={active ? 'flex-col flex items-center fixed inset-0 justify-center p-8 bg-[#6c5ce7] backdrop-blur-lg  gap-8 text-lg p-4 bg-white/10  md:hidden' : 'hidden'}>
        <AiOutlineClose onClick={mobileMenu} className="scale-150 text-red-500 cursor-pointer"/>
          <li className='hover:underline text-blue500'><Link to='/'>Home</Link></li>
          <li className='hover:underline'><Link to='/doctor'>Doctor</Link></li>
          <li className='hover:underline'><Link to='/service'>Services</Link></li>
          <li className='hover:underline'><Link to='/about'>About Us</Link></li>
          <li className='hover:underline'><Link to='/contact'>Contact Us</Link></li>

        </ul>
        </div>
     </nav>
    </div>
  )
}

export default MobileNavbar