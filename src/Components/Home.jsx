import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = ({trans3,trans4,toogle}) => {
  const navigate=useNavigate()
  const explore=()=>{
      navigate('/project')
  }
  return (
    <>
        <div className='flex h-3/4 justify-around items-center home1 -mt-2'>
            <div className='text-center home2 ml-52'>
              <h1 className='text-3xl font-bold mb-3'>Hello!</h1>
              <p className='font-semibold text-xl m-2'>I'am Hariharapudhran</p>
              <h3 className={`${toogle?' text-green-600':'text-teal-300'} font-extrabold text-4xl`}>Frontend Developer</h3>
              <div className="flex gap-5 justify-center items-center m-5">
                <button className='bg-emerald-400 text-black py-1 px-3 rounded font-semibold'>Hire me</button>
                <button onClick={explore} className={`${toogle?'bg-red-700':'bg-sky-600'} text-black py-1 px-3 rounded font-semibold`}>Explore</button>
                </div> 
            </div>
          <div>
            <img src={toogle?trans3:trans4} className='h-80'/>
          </div>
        </div>
    </>
  )
}
