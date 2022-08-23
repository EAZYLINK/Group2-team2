import {Link} from 'react-router-dom'
import Hero from './Assets/hero.png'

const Home = () => {
  return (
    <div className="px-9 py-7 lg:pt-16">
        {/* ====HERO SECTION ====== */}
    <section className="pt-16">
    <h1 className="text-2xl sm:text-3xl text-blue-600 uppercase lg:ml-32">Welcome to Welive HealthCare</h1>
    <div className='mt-16  md:flex  lg:flex justify-between lg:mr-32 md:items-center '>
      <div className="md:mx-w-xl lg:mx-w-full mx-auto  md:pt-16 lg:mr-72">
        <h1 className="text-4xl leading-relaxed font-bold ">For Private clinics and medical centers</h1>
        <p className='text-2xl pt-6 leading-loose'>Good health is a state of mental,physical and social well being</p>
      <div className='mt-10 '>
      <button className="bg-blue-500 w-56 inline-block hover:bg-[#867ab2] text-white font-bold py-4 px-8 uppercase rounded-full mr-4"><Link to='/contact'>Get In Touch</Link></button>
      <button className=" w-56 my-4 uppercase hover:bg-blue-700  font-bold py-4 px-8 rounded-full"><Link to='/about'>see more</Link></button>
      </div>
      </div>
      <div className='bg-blue-500 w-96 h-96 rounded-lg text-white '>
        <img src={Hero} alt="" className='border-none'/>
        <h1 className='text-2xl'>Dr. Elizabeth (NIS)</h1>
        <p className='text-xl mt-4 font-bold'>Lakeview private Hospital</p>
      </div>
    </div>
    </section>
    </div>
  )
}

export default Home