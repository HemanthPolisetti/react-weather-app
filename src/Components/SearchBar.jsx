import React, { useState } from 'react'
import axios from 'axios';
import Results from './Results';

const SearchBar = () => {
  const [cityName,setCityName]=useState('')
  const [geocode,setGeoCode]=useState({
    lon:'',
    lat:''
  })
  const[weather,setWeather]=useState()
  const locationHandler=async()=>{
    const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=e3b5510e0f72250aadde1584270d6381`)
    const data=res.data[0]
    setGeoCode({
      lon:data.lon,
      lat:data.lat
    })
  }
  const weatherData=async()=>{
    const res=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${geocode.lat}&lon=${geocode.lon}&appid=e3b5510e0f72250aadde1584270d6381`)
    const wData=res.data
    setWeather(wData)
  }
  const submitHandler=(e)=>{
    e.preventDefault()
    locationHandler()
    weatherData()
  }
  return (
    <>
    <div className='flex sm:font-bold'>
    <div className='flex flex-col my-4'>
      <h1 className='pt-3 mt-2 text-xl font-bold text-emerald-900'>Weathero</h1> 
      <h1 className='mt-4 text-lg text-emerald-900'>Enter Your City</h1>  
      <input className='mt-6 outline-none w-64 mx-auto bg-white ml-2 px-2 rounded-md text-emerald-900' placeholder='City' onChange={(e)=>setCityName(e.target.value)}/>
      <button className='mt-10 px-4 py-2 bg-emerald-600 rounded-full w-20 m-auto' onClick={submitHandler}>Search</button>
    </div>
    <div className='flex mx-10'>
    {weather && <Results weather={weather}/>}
    </div>
    </div>
    </>
  )
}

export default SearchBar
