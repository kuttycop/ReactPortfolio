import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const PasswordGenerator = ({toogle}) => {
    const nav=useNavigate()
    const click=()=>{
        nav('/project')
    }

    const [length,setLength]=useState(8)
    const [uppercase,setUppercase]=useState(true)
    const [lowercase,setLowercase]=useState(true)
    const [numbers,setNumbers]=useState(true)
    const [symbol,setSymbol]=useState(true)
    const [password,setPassword]=useState("")

    const generatePassword=()=>{
        let charset=""
        if(uppercase) charset+= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(lowercase) charset+="abcdefghijklmnopqrstuvwxyz";
        if(numbers) charset+="1234567890";
        if(symbol) charset+=" !@#$%^&*()-_+= ";
        let genereatedPassword=''
        for(let i=0;i<length;i++){
            const random=Math.floor(Math.random()*charset.length)
            genereatedPassword+=charset[random]
            setPassword(genereatedPassword)
        }
    }
    const copyToClipbord=()=>{
        navigator.clipboard.writeText(password)
        alert('Password Copied')
    }
  return (
    <>
        <i onClick={click} class=" back absolute top-16 left-64 cursor-pointer p-2 fa-solid fa-arrow-left "></i>
        <div className="p-0 m-0 clock font-poppins box-border">
            <h1 className={`text-center uppercase text-4xl font-bold ${toogle?'text-red-500':'text-cyan-400'}`}> Password Generator</h1>
            <div className={`=" max-w-sm  rounded-lg mx-auto shadow-md ${toogle?'bg-black text-white':'bg-white text-black'} my-10 p-3 text-black"`}>
                <div className="input-group">
                    <label className=' block font-semibold text-lg' htmlFor="number">Password Length:</label>
                    <input className={`${toogle?'bg-black text-white':'bg-white text-black'} w-full p-2.5 rounded border outline-none mt-2.5`}  type="number" id='number' value={length} onChange={(e)=>setLength(parseInt(e.target.value))}/>
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="uppercase" checked={uppercase} onChange={(e)=>setUppercase(e.target.checked)}/>
                    <label htmlFor="uppercase">Include UpperCase</label>
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="lowercase" checked={lowercase} onChange={(e)=>setLowercase(e.target.checked)}/>
                    <label htmlFor="lowercase">Include LowerCase</label>
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="numbers" checked={numbers} onChange={(e)=>setNumbers(e.target.checked)}/>
                    <label htmlFor="numbers">Include Numbers</label>
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="symbol" checked={symbol} onChange={(e)=>setSymbol(e.target.checked)}/>
                    <label htmlFor="symbol">Include Symbols</label>
                </div>
                <button className='bg-blue-600 py-2.5 px-5 block border-none rounded my-2.5 text-white font-medium text-lg hover:bg-blue-700 hover:cursor-pointer' onClick={generatePassword}>Generate Password</button>
                <div className=" flex border border-gray-500 overflow-hidden mt-5 rounded-md">
                        <input className={` ${toogle?'bg-black text-white':'bg-white text-black'} flex-1 p-3.5 border-none outline-none`} type="text" value={password}/>
                    <button className='bg-green-700 border-none text-white text-lg px-2.5 cursor-pointer hover:bg-green-800' onClick={copyToClipbord}>Copy</button>
                </div>
            </div>
        </div>
    </>
  )
}
