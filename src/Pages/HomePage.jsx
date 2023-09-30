import React from 'react'
import SearchBar from '../Components/SearchBar'

const HomePage = () => {
  return (
    <div className=' flex flex-col items-center'>
    <div className='backdrop-blur-lg w-72 h-80 border rounded-md mt-24'>
     <SearchBar />
     </div> 
    </div>
  )
}

export default HomePage