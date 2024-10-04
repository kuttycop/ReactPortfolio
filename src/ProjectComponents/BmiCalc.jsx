import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
export const BmiCalc = ({toogle,bmiImg}) => {

    const nav=useNavigate()
    const click=()=>{
        nav('/project')
    }

    const [height,setHeight]=useState()
    const [weight,setWeight]=useState()
    const [bmi,setBmi]=useState()
    const [status,setStatus]=useState('')
    const [errorMessage,setErrorMessage]=useState('')

    const calculateBmi=()=>{
        const isValidHeight= /^\d+$/.test(height);
        const isValidWeight= /^\d+$/.test(weight);
        if(isValidHeight && isValidWeight){
            const heightInMeters=height/100;
            const bmiValue=weight/(heightInMeters*heightInMeters);
            setBmi(bmiValue.toFixed(2))
            if(bmiValue<18.5){
                setStatus('underWeight')
            }else if(bmiValue>=18.5 && bmiValue<24.9){
                setStatus('Normal Weight')
            }else if(bmiValue>=25 && bmiValue<29.9){
                setStatus('overWeight')
            }else{
                setStatus('Obese')
            }
            setErrorMessage('')
        }else{
            setBmi(null)
            setStatus('')
            setErrorMessage('Plaese Enter Valid Numeric Values')
        }
    }
    const clearAll=()=>{
        setHeight('')
        setBmi(null)
        setStatus('')
        setWeight('')
    }
  return (
    <>
    <i onClick={click} class=" back bmi-back absolute top-16 left-64 cursor-pointer p-2 fa-solid fa-arrow-left "></i>
        <h1 className={`text-center font-extrabold ${toogle?'text-red-600':'text-cyan-400'} text-3xl  uppercase mt-5`}>bmi calculator</h1>
        <div className='w-full  mt-12 mb-10 clock  h-3/5 flex justify-center items-center'>
            <div className=" bmi1 bg-white text-black p-5 rounded flex w-2/4 h-full gap-2.5">
                <div className={` bg-no-repeat w-80 h-96 bg-[url(../public/Images/bmi1.jpg)] bg-cover bg-center`}></div>
                <div className="flex-1 flex flex-col gap-2.5">
                    <h1 className='text-2xl uppercase font-medium text-blue-500'>bmi Calculator</h1>
                    {errorMessage&& <div className="text-sm text-red-600 mt-2.5">{errorMessage}</div> }
                    <div className="input-container">
                        <label className='block my-2.5' htmlFor="height">Height (cm):</label>
                        <input className='w-full p-2 rounded border border-gray-500 outline-none' type="text" id='height' value={height} onChange={(e)=>setHeight(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <label className='block my-2.5' htmlFor="weight">Weight(kg):</label>
                        <input className='w-full p-2 rounded border border-gray-500 outline-none' type="text" id='weight' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
                    </div>
                    <div className="flex justify-start gap-2.5 items-center my-2">
                        <button className='px-5 py-2.5 rounded text-base text-white bg-blue-600 cursor-pointer' onClick={calculateBmi}>Calculate Bmi</button>
                        <button className='px-5 py-2.5 rounded text-base text-white bg-red-700 cursor-pointer' onClick={clearAll}>Clear</button>
                    </div>
                    {bmi !== null && (
                        <div className="border border-blue-500 py-2.5 px-1 rounded">
                        <p className='text-blue-500 mx-2'>Your BMI is :{bmi}</p>
                        <p className='mx-2'>Status :{status}</p>
                        </div>
                    )}
                </div>
            </div>

        </div>
    </>
  )
}
