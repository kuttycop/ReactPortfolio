import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Python = ({python}) => {
  const nav=useNavigate()
  const click=()=>{
      nav('/certificate')
  }
  return (
    <>
    <i onClick={click} class=" back absolute top-24 left-72 cursor-pointer p-2 fa-solid fa-arrow-left "></i>
    <div className='flex justify-center clock items-center'>
            <img  className='w-2/4' src={python} alt="" />
    </div>
    </>
  )
}
