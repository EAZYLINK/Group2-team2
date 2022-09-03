import {Link} from 'react-router-dom'
import Hero from './Assets/hero.png'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className="">
      <Navbar/>
        {/* ====HERO SECTION ====== */}
        <div className="h-[70vh] lg:h-[60vh] md:h-[70] w-full  ">
          <div className='max-w-screen-lg mx-auto w-full h-full px-4  p-4 flex flex-col justify-center'>
          <div>
            <h1 className='w-[443px] h-[76px] font-semibold text-2xl leading-9'>For Private clinics and medical centers</h1>
            <p className="w-[443px] h-[48px] font-normal text-sm leading-6 mt-4">Good health is a state of mental,physical and social well being.</p>
            <button className='w-[231px] h-[46px] bg-[#1920DA] rounded-xl text-white cursor-pointer hover:scale-105 duration-200 mt-[48px]'>Book An Appointment</button>
          </div>
          <div></div>
        </div>
        {/* ==== Services Section ===== */}

        <div className="bg-[#e5e7eb]">
          <div className="flex flex-col items-center justify-center">
            <h1 className='w-[203px] h-[39px] font-bold text-2xl leading-10'>Our Services</h1>
            <p className='w-[364px] h-[45px] font-sm leading-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum eligendi odio harum ab tempore nobis?</p>
          </div>
          <div className='bg-[#D9D9D9] w-[429px] h-[192px] p-6 flex'>
            <div className='flex flex-col items-center justify-center'>
              <h2 className='w-[149px] h-[29px] font-bold text-2xl'>Consultancy</h2>
              <p className='w-[216px] h-[45px] text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </div>
              <div>
                <img src="" alt="" />
                <p>More Info</p>
              </div>
          </div>
        </div>

        {/* ==== Articles Sections ===== */}
        <div>
        <div className="flex flex-col items-center justify-center">
            <h1 className='w-[286px] h-[39px] font-bold text-2xl leading-10'>Our Latest Articles</h1>
            <p className='w-[364px] h-[45px] font-sm leading-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum eligendi odio harum ab tempore nobis?</p>
          </div>
        </div>
      </div>
    {/* <section className="pt-16">
    <h1 className="text-2xl sm:text-3xl text-blue-600 uppercase lg:ml-32">Welcome to Welive HealthCare</h1>
    <div className='mt-16  md:flex  lg:flex justify-between lg:mr-32 md:items-center '>
      <div className="md:mx-w-xl lg:mx-w-full mx-auto  md:pt-16 lg:mr-72">
        <h1 className="text-4xl leading-relaxed font-bold ">For Private clinics and medical centers</h1>
        <p className='text-2xl pt-6 leading-loose'>Good health is a state of mental,physical and social well being</p>
      <div className='mt-10 '>
      <button className="bg-blue-500 w-56 inline-block hover:bg-[#867ab2] text-white font-bold py-4 px-8 uppercase rounded-full mr-4"><Link to='/register'>Get In Touch</Link></button>
      <button className=" w-56 my-4 uppercase hover:bg-blue-700  font-bold py-4 px-8 rounded-full"><Link to='/about'>see more</Link></button>
      </div>
      </div>
      <div className='bg-blue-500 w-96 h-96 rounded-lg text-white '>
        <img src={Hero} alt="" className='border-none'/>
        <h1 className='text-2xl'>Dr. Elizabeth (NIS)</h1>
        <p className='text-xl mt-4 font-bold'>Lakeview private Hospital</p>
      </div>
    </div>
    </section> */}
    </div>
  )
}

export default Home