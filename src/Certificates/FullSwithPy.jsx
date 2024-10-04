import React from 'react'
import { useNavigate } from 'react-router-dom'

export const FullSwithPy = () => {
  const nav=useNavigate()
    const click=()=>{
        nav('/certificate')
    }
  return (
    <>
    <i onClick={click} class=" back absolute top-16 left-64 cursor-pointer p-2 fa-solid fa-arrow-left "></i>
    <div className='flex clock justify-center'>
        <img src="../public/Certificates/guvifull.png" alt="" />
    </div>
    </>
  )
}
