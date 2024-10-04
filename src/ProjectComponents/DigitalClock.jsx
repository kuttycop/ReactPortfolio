import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
export const DigitalClock = ({toogle}) => {

    const nav=useNavigate()
    const click=()=>{
        nav('/project')
    }

    const [currentTime,setCurrentTime]=useState(new Date());

    useEffect(()=>{
        const time=setInterval(()=>{
            setCurrentTime(new Date())
        },1000)
        return ()=>clearInterval(time)
    },[])
    const FrontZero=(num)=>{
        return num<10?`0${num}`:num
    }
    const RailWayTimeConvert=(hour)=>{
        return hour===0?12:hour>12? hour-12:hour
    }

    const formatDays=(date)=>{
        const options={weekday:'long',year:'numeric',month:'long',day:'numeric'}
        return date.toLocaleDateString(undefined,options);
    }
  return (
    <>
        <div className="clock">
            <i onClick={click} class=" back absolute top-16 left-64 cursor-pointer p-2 fa-solid fa-arrow-left "></i>
            <div className={`${toogle?'text-red-600':'text-cyan-500'} uppercase text-center mt-10 font-extrabold text-4xl`}>Digital Clock</div>
                <div className="w-screen h-2/4 flex justify-center items-center mb-28">
                    <div className={`${toogle?'bg-black text-white':'bg-white text-black'} p-5 mt-20 rounded text-center`}>
                    <h2 className='text-3xl uppercase p-3 font-bold text-orange-600'>Digital Clock</h2>
                    <div className="text-7xl font-bold my-2 mx-0">
                        {FrontZero(RailWayTimeConvert(currentTime.getHours()))}:{FrontZero(currentTime.getMinutes())}:
                        {FrontZero(currentTime.getSeconds())}
                        {currentTime.getHours()>=12?" PM":" AM"}
                    </div>
                    <div className="text-gray-400">
                        {formatDays(currentTime)}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
