import React, { useState } from 'react' 
import {Link} from 'react-router-dom'
const Signup = () => {
  const [email, setEmail] = useState('');
  const [wrongMail, setWrongMail] = useState('');

  const [password, setPassword] =useState ('');
  const [wrongPassword, setWrongPassword] = useState('');


  const handleEmailChange = (e) => {
    setWrongMail('');
    setEmail (e.target.value);
  }

  const handlePasswordChange = (e) => {
    setWrongPassword('');
    setPassword (e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //check if email is empty
    
    if (email!==''){
      // check other conditions
      const emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (emailRegex.test(email)){
        setWrongMail('');

        // if(email==='admin@demo.com'){
        //   setWrongMail('');
        //   if(password==='demo'){
        //   }
        //   else{
        //     setWrongPassword('password does not with the email address ');
        //   }
        // }
        // else{
        //   setWrongMail('email does not exist in our database');
        // }


      }
      setWrongMail('please enter a valid email address');

    }
    else{
      setWrongMail('Email is required');
    }

    // check if password is empty

    if (password!==''){


    }
    else{
      setWrongPassword('Password is required');
    }

  }

  return (
    <div className='h-screen'> 
     
      <div>
        
        <form onSubmit={handleFormSubmit}  autoComplete="off" className='sm:bg-[#CFE8F9] lg:w-full sm:flex sm:flex-col sm:ml-28 sm:justify-center sm:left-88 sm:top-388 sm:items-center sm:py-12 sm:relative sm:isolate sm:gap-8 bg-cover lg:bg-[url("./components/Assets/loginMobile.jpg")]  sm:w-96 sm:h-180 lg:pl-16   py-16 align-middle my-32 mx-80 '>
          <div className='Mobile-login sm:bg-cover lg:bg-none sm:bg-center  sm:top-12 sm:grow-0 sm:z-0 sm:order-none sm:left-20 sm:right-20 sm:flex-none sm:bg-[url("./components/Assets/loginMobile.jpg")] sm:w-60 sm:h-60'>

          </div>
          <div className='grid lg:grid-cols-1 sm:ml-28 divide-y-2  sm:divide-y-96  sm:top-12  sm:divide-[#D4D4D4] sm:divide-solid sm:flex-none sm:order-1 sm:grow-0  lg:divide-[#AFD8F6] '>
            <div>
            <p className='lg:text-[#AFD8F6] lg:font-sans lg:font-semibold lg:text-3xl lg:leading-10 lg:top-3  lg:text-justify lg:h-10 lg:w-28 lg:ml-8 lg:left-3 sm:w-16 sm:h-8  sm:left-40 sm:flex-none sm:font-sans sm:font-medium sm:not-italic sm:text-2xl sm:leading-7 sm:text-center sm:order-none sm:grow-0 sm:text-[#2A2A2A]   sm:ml-64 sm:mb-4'>Signup</p>
            </div>
            
            <div>
              <div className='sm:ml-36 lg:ml-8'> 
               <div className='lg: mb-8 lg:pr-32 '>
                  <input type="text" placeholder='Enter Your Full Name:' onChange={handleEmailChange} value={email}  className='pr-32 pl-4 py-2 mt-8 sm:placeholder-[#717171] rounded-lg lg:bg-[#FFFFFF] sm:w-80 sm:h-12 sm:p-3  sm:gap-2 sm:flex sm:items-center sm:order-none sm:grow-0 sm:mr-64 sm:flex-none lg:placeholder-black  lg:w-full '   />
                  {wrongMail&&<div className='wrongMail text-sm w-full text-red-500'>{wrongMail}</div>}
                </div>
                <div className='lg: mb-8 lg:pr-32 '>
                  <input type="email" placeholder='Enter Your Email Address:' onChange={handleEmailChange} value={email}  className='pr-32 pl-4 py-2 mt-8 sm:placeholder-[#717171] rounded-lg lg:bg-[#FFFFFF] sm:w-80 sm:h-12 sm:p-3  sm:gap-2 sm:flex sm:items-center sm:order-none sm:grow-0 sm:mr-64 sm:flex-none lg:placeholder-black  lg:w-full '   />
                  {wrongMail&&<div className='wrongMail text-sm w-full text-red-500'>{wrongMail}</div>}
                </div>
                <div className=' lg:mb-3 lg:pr-32 lg:leading-10'>
                  <input autoComplete="off" type="password" placeholder='Enter your Password:' onChange={handlePasswordChange} value={password} className='pr-32 h-10 pl-4 py-2 rounded-lg sm:placeholder-[#717171] sm:w-80 sm:h-12 sm:top-16 sm:gap-1 lg:bg-[#FFFFFF]  lg:placeholder-black lg:w-full'  />
                  {wrongPassword&&<div className='wrongPassword text-sm w-full text-red-500'>{wrongPassword}</div>}
                </div>
                <p className='flex flex-row align-middle gap-2 my-4 text-[#AFD8F6] lg:text-[#FFFFFF] sm:w-40 sm:flex sm:flex-row sm:items-center sm:p-0 sm:text-[#2A2A2A] sm:font-sans sm:top-12 sm:gap-2 sm:h-4 sm:font-light sm:text-xs sm:leading-4' ><input type="checkbox" />Keep me Logged in</p>
              </div>
              <div>
                

                <button className='flex flex-row bg-[#CFE8F9] text-[#0F8AE3] lg:bg-transparent lg:ml-4 sm:bg-[#0A5C97] sm:w-23 sm:top-40 sm:rounded-lg sm:py-2 sm:px-5 sm:h-10 rounded p-2 px-6 sm:justify-center sm:items-center sm:flex-row sm:flex sm:font-normal  sm:font-sans sm:text-[#FFFFFF] sm:leading-6 sm:ml-64 '>Signup</button>
                <div className='sm:w-60 sm:h-4 sm:top-164 sm:left-20 sm:gap-3 sm:flex sm:flex-row sm:items-center s sm:p-0 sm:ml-48 lg:w-184 lg:ml-8'>
                  <p className='mt-12  text-[#CFE8F9] sm:text-[#2A2A2A]  lg:text-[#FFFFFF] sm:font-sans sm:font-normal sm:not-italic sm:text-base sm:leading-4 sm:h-5'>Don't have an Account?</p>
                  <Link to={'/login' } className='text-[#CFE8F9] sm:text-[#2A2A2A] lg:text-[#FFFFFF]  sm:w-12 sm:h-5 sm:mt-10 sm:top '>
                   Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
            
        </form>
      </div>
    </div>
  )
}

export default Signup