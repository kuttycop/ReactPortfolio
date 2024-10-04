import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Certificate = ({toogle}) => {
    const navigate=useNavigate()
    const navigateTo= (e)=>{
        navigate(e)
    }
    const certificates=[
        {id:1,certifyName:'Python',fromCertify:'Infosis',border:'border-2 border-green-400',nav:'/python'},
        {id:2,certifyName:'javascript',fromCertify:'GeekStar',border:'border-2 border-red-700',nav:'/javascript'},
        {id:3,certifyName:'Full Stack With Python',fromCertify:'Guvi',border:'border-2 border-yellow-500',nav:'/fullwithpy'},
        {id:4,certifyName:'javascript',fromCertify:'Guvi',border:'border-2 border-blue-500',nav:'/geekjs'},
        {id:5,certifyName:'Git & GitHub',fromCertify:'GeekStar',border:'border-2 border-rose-600',nav:'/git'},
        {id:6,certifyName:'JavaScript',fromCertify:'LearnTube',border:'border-2 border-cyan-300',nav:'/learntube'},
    ]
  return (
    <>
        <div className='cert'>
            <h1 className={`'text-center font-extrabold text-4xl flex justify-center items-baseline ${toogle?'text-red-500':'text-cyan-400'}`}>MY Certificates</h1>
            
            <div className='grid grid-cols-4 justify-items-center mt-6 gap-8 px-10 place-items-center cert1 grid-rows-2'>
                {certificates.map((cert)=>(
                <div className={`rounded-lg bg-no-repeat cert3 bg-cover overflow-hidden ${cert.border}`} key={cert.id}>
                    <div className='flex justify-center h-52 w-60 flex-col items-center gap-3 text-center overflow-hidden'>
                        <h1 className='text-blue-600 text-2xl '>{cert.certifyName}</h1>
                        <p className='text-center text-blue-600'>Certificate From {cert.fromCertify}</p>
                        <button onClick={()=>navigateTo(cert.nav)} className='bg-green-500 rounded px-5 text-black font-medium py-0.5 border-none m-1 cursor-pointer'>View</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    
    </>
  )
}
