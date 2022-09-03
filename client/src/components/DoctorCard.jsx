import React from 'react'

const DoctorCard = ({contactList}) => {
  return (
    <>
      {contactList?.map((contact, index) => (
        <figure key={index} className='bg-white h-90 pt-7 rounded-lg shadow-md '>
            <img 
              src={contact.picture.large}
              alt="doctor"
              className='h-32 w-32 rounded-full mx-auto' />
            <figcaption className='text-center mt-5 space-y-3'>
                <p className='text-gray-700 font-semibold text-xl mb-2'>Dr. {contact.name.first} {contact.name.last} </p>
                <p className='text-gray-500'><span className='font-semibold'>Email:</span> {contact.email}</p>
                <p className='text-gray-500'><span className='font-semibold'>phone:</span> {contact.phone}</p>
                <p className='text-gray-700 font-semibold text-sm'>Specialization: Neurosurgeon</p>
                <p className='text-gray-500'><span className='font-semibold'>City: </span>{contact.location.city}</p>
            </figcaption>
        </figure>
      ))

      }

       
    </>
  )
}

export default DoctorCard