import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AdviceApp = ({toogle}) => {
    const [advice,setAdvice]=useState('Click Button to Get Advice')
    const [count,setCount]=useState(0)
    const nav=useNavigate()
    const click=()=>{
        nav('/project')
    }
    async function getAdvice(){
        const data= await fetch('https://api.adviceslip.com/advice');
        const json=await data.json();
        setAdvice(json.slip.advice)
        setCount(count+1)
    }
  return (
    <>
    <i onClick={click} class=" back absolute top-16 left-64 cursor-pointer p-2 fa-solid fa-arrow-left "></i>
    <div className={`${toogle?'text-red-600':'text-cyan-500'} advHead absolute top-20 left-1/3 ml-36 font-extrabold text-4xl uppercase mt-10`}>Advice App</div>
    <div className='weather w-screen h-3/4 flex justify-center items-center flex-col gap-2.5'>
        <div className="flex flex-col items-center justify-center p-5 mt-20 rounded w-96 bg-rose-700">
            <h3 className='text-white mt-2.5 mb-2.5'>" {advice} "</h3>
            <button className='bg-cyan-300 border-none rounded text-base font-semibold px-5 py-2.5 mt-1 cursor-pointer text-black' onClick={getAdvice}>Get Advice</button>
            <Counter count={count}/>
            <p className='text-white mx-0 my-1'>Designed By <a href="#/" className=' decoration-slice'>Kuttycop</a></p>
        </div>
    </div>
    </>
  )
}
function Counter(props){
    return <p className='text-white m-2'>
        You have Read <b className='text-indigo-900 bg-white rounded px-1'>{props.count}</b> Advices
    </p>
}