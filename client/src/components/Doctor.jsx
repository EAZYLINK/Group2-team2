import { useEffect } from 'react'
import { useState } from 'react'
import useFetch from 'react-fetch-hook'
import DoctorCard from './DoctorCard'
import Navbar from './Navbar'

const Doctor = () => {
  const url = "https://randomuser.me/api?results=10"
  const { isLoading, data, error } = useFetch(url)
  const [contactList, setContactList] = useState(null)
  const [filterQuery, setFilterQuery] = useState(null)

  useEffect(() => {
    if(filterQuery) {
      const filterString = filterQuery.toLowerCase()
      const filteredData = data?.results?.filter(contact => {
        const fullName = `${contact.name.first} ${contact.name.last}`

        if (filterString.length === 1) {
          const firstLetter = fullName.charAt(0).toLowerCase()
          return firstLetter === filterString
        }
        else {
          return fullName.toLowerCase().includes(filterString)
        }
      })
      setContactList(filteredData)
    }
    else{
      setContactList(data?.results)
    }
  }, [data, filterQuery])


  return (
  <>
      <Navbar/>

    <div className="bg-blue-500 mt-20">
      <section>
        <form action="">
          <input type= 'text'placeholder='Search here for your Doctor'
           className='ml-20 mt-64 rounded-md p-2  focus:outline-none'
           onChange={ e => setFilterQuery(e.target.value)} />
        </form>
      </section>
      <section className="p-20 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactList?.length < 1 && (
          <h1 className='text-white text-xl'>No data matches your search</h1>
        )}
        <DoctorCard contactList={contactList} />
      </section>
      
    </div>
  </>
  )
}

export default Doctor