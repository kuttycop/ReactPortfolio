import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const Currency = ({toogle}) => {

    const nav=useNavigate()
    const click=()=>{
        nav('/project')
    }

    const [amount,setAmount]=useState(1)
    const [fromCurrency,setFromCurrency]=useState('USD')
    const [toCurrency,setToCurrency]=useState('INR')
    const [convertedAmount,setConvertedAmount]=useState()
    const [exchangeRate,setExchangeRate]=useState()

    useEffect(()=>{
        const getExchangeRate=async()=>{

            try{
                const url=`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
                let res=await axios.get(url)
                setExchangeRate(res.data.rates[toCurrency])
            }catch(err){
                console.error("feteching Error",err.message)
            }
        }
        getExchangeRate();
        
    },[fromCurrency,toCurrency])

    useEffect(()=>{
        if(exchangeRate!==null){
            setConvertedAmount((amount*exchangeRate).toFixed(2))
        }
        
    },[amount,exchangeRate])

    const handleAmountChange=(e)=>{
        const value=parseFloat(e.target.value)
        setAmount(value)
    }

    const handleFromCurrencyChange=(e)=>{
        setFromCurrency(e.target.value)
    }

    const handleToCurrencyChange=(e)=>{
        setToCurrency(e.target.value)
    }
  return (
    <>
        <i onClick={click} class=" back currency-back absolute top-16 left-64 cursor-pointer p-2 fa-solid fa-arrow-left "></i>
        <h1 className={`text-center font-extrabold text-3xl ${toogle?'text-red-600':'text-cyan-400'} mb-7`}>Currency Converter</h1>
       <div className="w-full clock flex justify-center items-center ">
            <div className="bg-white text-black w-96 p-3 rounded-lg shadow-2xl">
                <div className="bg-[url(../public/images/currency.png)] h-32  bg-no-repeat bg-center"></div>
                <div className="data">
                    <div className="input-container">
                        <label className='block text-slate-500 font-medium' htmlFor="amt">Amount:</label>
                        <input className='w-full p-2.5 mb-1 text-xl outline-none border border-slate-300' type="number" id='amt' value={amount} onChange={handleAmountChange} />
                    </div>
                    <div className="input-container">
                        <label className='block text-slate-500 font-medium' htmlFor="fromCurrency">From Currency:</label>
                        <select className='w-full p-2.5 my-1 border border-slate-400 outline-blue-600 rounded cursor-pointer' id="fromCurrency" value={fromCurrency} onChange={handleFromCurrencyChange}>
                            <option value="USD">USD - United states Doller</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="GBP">GBP - Bertish Pound Sterling</option>
                            <option value="JPY">JPY - Japanese Yen</option>
                            <option value="AUD">AUD - Australian Doller</option>
                            <option value="CAD">CAD - Canadian Doller</option>
                            <option value="CNY">CNY - Chinese Yuan</option>
                            <option value="INR">INR - Indian Rupee</option>
                            <option value="BRL">BRL - Brazilian Real</option>
                            <option value="ZAR">ZAR - South Aferican Rand</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <label className='block text-slate-500 font-medium' htmlFor="toCurrency">To Currency:</label>
                        <select className='w-full p-2.5 my-1 border border-slate-300 outline-blue-600 rounded cursor-pointer' id="toCurrency" value={toCurrency} onChange={handleToCurrencyChange}>
                            <option value="USD">USD - United states Doller</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="GBP">GBP - Bertish Pound Sterling</option>
                            <option value="JPY">JPY - Japanese Yen</option>
                            <option value="AUD">AUD - Australian Doller</option>
                            <option value="CAD">CAD - Canadian Doller</option>
                            <option value="CNY">CNY - Chinese Yuan</option>
                            <option value="INR">INR - Indian Rupee</option>
                            <option value="BRL">BRL - Brazilian Real</option>
                            <option value="ZAR">ZAR - South Aferican Rand</option>
                        </select>
                    </div>
                    <div className="my-3 border border-dashed border-blue-600 py-3 text-center text-blue-600 font-bold">
                        <p>{amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}</p>
                    </div>
                </div>
            </div>

       </div>
    </>
  )
}
