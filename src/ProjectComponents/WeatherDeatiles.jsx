import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
// Images import
import searchIcon from '../assets/search.jpg'
import cleanIcon from '../assets/clean.jpg'
import cloudIcon from '../assets/cloud.jpg'
import drizzleIcon from '../assets/drizzle.png'
import humadityIcon from '../assets//humadity.png'
import rainIcon from '../assets/rain.png'
import snowIcon from '../assets/snow.jpg'
import windspeedIcon from '../assets/windspeed.jpg'

const WeatherDeatile=({icon , temp ,city ,country, lat,log,humatity,windSpeed})=>{
    return(
        <>
            <div className="mt-2.5 flex flex-col justify-center items-center">
                <div className="img-container">
                    <img className='h-28' src={icon} alt="" />
                </div>
                <div className="text-xl">
                    <h2>{temp}°C</h2>
                </div>
                <div className="text-orange-500 font-bold text-3xl uppercase">
                    <p>{city}</p>
                </div>
                <div className="text-slate-500 font-normal uppercase">
                    <p>{country}</p>
                </div>
                <div className="flex justify-center gap-12 items-center">
                    <div className="flex flex-col justify-center items-center">
                        <p>Latitude</p>
                        <p className='font-semibold text-xl text-slate-500'>{lat}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p>Longitude</p>
                        <p className='font-semibold text-xl text-slate-500'>{log}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center ">
                <div className="flex flex-col justify-center items-center">
                    <img className='w-12 h-10 mb-2.5' src={humadityIcon} alt="humititi" />
                    <p className='text-slate-500 text-base'>{humatity}%</p>
                    <p className='text-base font-semibold'>Humitity</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className='w-12 h-10 mb-2.5' src={windspeedIcon} alt="windspeed"/>
                    <p className='text-slate-500 text-base'>{windSpeed} km/h</p>
                    <p className='text-base font-semibold'>windspeed</p>
                </div>
            </div>
        </>
    )
}

WeatherDeatile.propTypes={
    icon:PropTypes.string.isRequired,
    temp:PropTypes.number.isRequired,
    country:PropTypes.string.isRequired,
    city:PropTypes.number.isRequired,
    lat:PropTypes.number.isRequired,
    log:PropTypes.number.isRequired,
    windSpeed:PropTypes.number.isRequired,
    humatity:PropTypes.number.isRequired,
}

export const WeatherDeatiles = ({toogle}) => {

    const nav=useNavigate()
    const click=()=>{
        nav('/project')
    }


    const apiKey="860d969fdc4d234cb4b8f2a2f99c2775"
    const [text,setText]=useState('chennai')
    const[icon,setIcon]=useState(snowIcon)
    const[temp,setTemp]=useState(0)
    const[city,setCity]=useState('chennai')
    const[country,setCountry]=useState('in')
    const[latitude,setLatitude]=useState(0)
    const[longitude,setLongitude]=useState(0)
    const[humatity,setHumadity]=useState(0)
    const[windSpeed,setWindSpeed]=useState(0)
    const[loading,setLoading]=useState(false)
    const[cityNotFount,setCityNotFount]=useState(false)
    const weatherIconMap={
        "01d":cleanIcon,
        "01n":cleanIcon,
        "02d":cloudIcon,
        "02n":cloudIcon,
        "03d":drizzleIcon,
        "03n":drizzleIcon,
        "04d":drizzleIcon,
        "04n":drizzleIcon,
        "09d":rainIcon,
        "09n":rainIcon,
        "10d":rainIcon,
        "10n":rainIcon,
        "13d":snowIcon,
        "13n":snowIcon,
    }

    const search=async ()=>{
        setLoading(true)
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&units=Metric`;

        try{
           const res=await fetch(url)
            let data=await res.json();
            if(data.cod==='404'){
                console.log('City Not Found')
                setCityNotFount(true)
                setLoading(false)
                return
            }
            setCity(data.name)
            setLatitude(data.coord.lat)
            setTemp((Math.floor(data.main.temp)))
            setLongitude(data.coord.lon)
            setWindSpeed(data.wind.speed)
            setHumadity(data.main.humidity)
            setCountry(data.sys.country)
            const weatherIconCode=data.weather[0].icon;
            setIcon(weatherIconMap[weatherIconCode]||cleanIcon)
            setCityNotFount(false)
        }catch(error){
            console.error('Fetching data Error Will Be Occured :',error.message);
        }finally{
            setLoading(false)
        }
    }

    const handleCity=(e)=>{
        setText(e.target.value)
    }
    const handleKeyDown=(e)=>{
        if(e.key=='Enter'){
            search();
        }
    }
    const handleClick=()=>{
        search();
    }
    useEffect(function (){
        search();
    },[])
  return (
    <>
            <i onClick={click} class="back absolute top-16 left-64 cursor-pointer p-2 fa-solid fa-arrow-left "></i>
    <h1 className={`text-center ${toogle?'text-red-600':'text-cyan-500'} text-3xl font-bold mb-2`}>Weather APP</h1>
        <div className=" weather flex justify-center items-center">
            <div className= " bg-white p-4 w-96 shadow-lg rounded text-black">
                <div className="w-full flex justify-between border-2 border-sky-400 rounded">
                    <input className='flex-1 p-2.5 border-none text-lg outline-none' type="text" placeholder='Search City' onChange={handleCity}
                        value={text}  onKeyDown={handleKeyDown}/>
                    <div className="search-image"  onClick={handleClick} >
                        <img className='w-7 h-7 mt-3 cursor-pointer ' src={searchIcon} alt="" />
                    </div>
                </div>

                    { !loading && !cityNotFount &&<WeatherDeatile icon={icon} temp={temp} city={city} country={country} 
                    lat={latitude} log={longitude} windSpeed={windSpeed} humatity={humatity} />}

                    {loading &&<div className="text-center uppercase text-3xl text-slate-600 font-medium mt-5">Loading...</div>}
                    {cityNotFount && <div className="text-center text-3xl text-slate-600 font-medium mt-5">City Not Found</div>}
                <div className="text-center mt-5 text-sm">
                    <p className='text-slate-500'>Designed By <a className=' no-underline' href="#">Kuttycop</a></p>
                </div>
            </div>
        </div>
    </>
  )
}
