import React from 'react'

const Results = ({weather}) => {
    console.log(weather)
    const temp=Math.round(weather.main.temp - 273)
    const feelsLike=Math.round(weather.main.feels_like - 273)

  return (
    <div>
    <div className='backdrop-blur-lg w-72 h-80 border rounded-md'>
      <h1 className='mt-4 text-lg text-emerald-900 font-bold'>Results</h1>
      <h4 className='mt-4 text-lg text-emerald-900'>Temparature : {temp}°C</h4>
      <h4 className='mt-4 text-lg text-emerald-900' >Feels_Like : {feelsLike}°C</h4>
    {weather && weather.weather.map((data)=>(
        <div>
        <h1 className='mt-4 text-lg text-emerald-900 font-semibold'>{data.main}</h1>
        <h1 className='mt-4 text-lg text-emerald-900'>{data.description}</h1>

        </div>
    ))}
    </div>
    </div>
  )
}

export default Results
