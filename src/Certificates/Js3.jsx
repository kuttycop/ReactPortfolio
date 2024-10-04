import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Js3 = () => {
    const nav=useNavigate()
    const click=()=>{
        nav('/certificate')
    }
  return (
    <>
    <i onClick={click} class=" back absolute top-16 left-64 cursor-pointer p-2 fa-solid fa-arrow-left "></i>
    <div className='flex justify-center clock h-3/4'>
        <img src="../public/Certificates/learntube.jpeg" alt="" />
    </div>
    </>
  )
}
