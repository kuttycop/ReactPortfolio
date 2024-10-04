import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const QrCode = ({toogle}) => {

    const nav=useNavigate()
    const click=()=>{
        nav('/project')
    }


    const [img,setImg]=useState('')
    const [loading,setLoading]=useState(false)
    const [qrData,setQrData]=useState('')

    async function generateQr(){
        setLoading(true)
        try{
            const URL=`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(qrData)}`
            setImg(URL)
        }catch(err){
            console.log("Generating QR Code Error :" ,err)
        }finally{
            setLoading(false)
        }
    }
    function downloadQr(){
        fetch(img).then((Response)=>Response.blob()).then((blob)=>{
            const link=document.createElement("a")
            link.href=URL.createObjectURL(blob);
            link.download="qrcode.png"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }).catch((error)=>console.log("QR Downloading error",error))
    }
  return (
    <>
            <i onClick={click} class=" back qr-back absolute top-16 left-64 cursor-pointer p-2 fa-solid fa-arrow-left "></i>
        <h1 className={`text-center font-extrabold ${toogle?'text-red-600':'text-cyan-400'} uppercase text-3xl`}>QR Code Generator</h1>
        <div className='flex flex-col clock qr-res justify-center items-center w-full h-auto'>
            {img && <img src={img} className='p-5 shadow-md ' alt="QR Code"/>}
            {loading && <p>Please Wait...</p>}
            <div>
                <label className='block text-blue-500 text-lg my-2.5 font-medium'  htmlFor="dataInput">Data For QR Code:</label>
                <input className={` ${toogle?'bg-black text-white':'bg-white text-black'} w-full rounded outline-none p-2`} type="text" id='dataInput' value={qrData} onChange={(e)=>setQrData(e.target.value)} placeholder='Enter QR Data'/>
                
                <button className='p-2.5 bg-blue-500 mt-5 mr-4 rounded text-white font-semibold cursor-pointer disabled:bg-slate-500 disabled:cursor-not-allowed hover:bg-blue-600' onClick={generateQr} disabled={loading} >Generate QR</button>
                <button className='p-2.5 bg-green-700 border-none rounded text-white font-semibold hover:bg-green-800 hover:cursor-pointer' onClick={downloadQr} >Download QR</button>
            <p className='text-center m-3'>Designed By <a className=' no-underline' href="#">Kuttycop</a></p>
            </div>
        </div>
    
    </>
  )
}
