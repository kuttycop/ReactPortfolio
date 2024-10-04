import React, { useEffect, useState } from 'react'
export const Contact = ({toogle}) => {
    const [pop,setPop]=useState(false)
    const[name,setName]=useState()
    const[phone,setPhone]=useState()
    const[email,setEmail]=useState()
    const[error,setError]=useState()
    const change=(e)=>{
        if (name&&phone&&email) {
            setPop(true)
            setError(false)
        }
        else{
            setError(true)
        }

    }
  return (
    <>
    {pop &&
    <>
    <div className={`${pop?'overlay':''}`}></div>
        <div className={`${pop?'layer':''}`}>
            <i className="fa-solid fa-check relative text-white  bg-green-600 text-5xl -top-14 left-36 rounded-full p-5 h-20 w-20 flex justify-center items-center"></i>
            <h1 className='pb-5 text-6xl font-extrabold'>Thank You!</h1>
            <p className='m-5'>You details has been successfully submitted. Thanks!</p>
            <button onClick={()=>setPop(false)} className='bg-green-600 px-20 my-5 py-2 rounded'>Ok</button>
        </div>
    </>
    }
        <div className=' con1 flex  justify-center gap-40 items-center h-3/4 '>
           <div className="flex flex-col con2 items-start gap-10 ">
                <div className="flex justify-center gap-3">
                    <i className={`${toogle?'bg-black text-white ':'bg-white text-black'} rounded-full text-lg  text-center h-10 pt-2 w-10 fa-solid fa-location-dot`} id='loct'></i>
                    <div>
                        <label className='text-sky-600' htmlFor="loct">Address</label>
                        <p>Elil Nagar, 2nd Cross</p>
                        <p>Sipcot , Hosur</p>
                    </div>
                </div>
                <div className="flex justify-center gap-3">
                    <i id='ph' className={`${toogle?'bg-black text-white ':'bg-white text-black'} rounded-full text-lg  text-center h-10 pt-2 w-10 fa-solid fa-phone`}></i>
                    <div>
                        <label htmlFor="ph" className='text-sky-600'>Phone</label>
                        <p>6385751023</p>
                    </div>
                </div>
                <div className='flex justify-center gap-3'>
                    <i className={`fa-regular fa-envelope ${toogle?'bg-black text-white ':'bg-white text-black'} rounded-full text-lg  text-center h-10 pt-2 w-10 text-black`}></i>
                    <div>
                        <label className='text-sky-600' htmlFor="mail">Email</label>
                        <p>kuttycop562003@gmail.com</p>
                    </div>
                </div>
           </div>
           <div className="flex flex-col gap-3  form shadow-2xl p-3 rounded text-black">
                    <div className={`flex flex-col trans absolute z-10 p-5 ${toogle?'bg-white':'bg-black'}`}>
                        <h1 className={`text-3xl ${toogle?'text-red-600':'text-cyan-400'} text-center font-semibold`}>Get In Touch</h1>
                        <div className="input">
                            {error&&<p className='text-center text-red-600 text-xs'>Please Enter your Deatils</p>}
                            <input type="text" onChange={(e)=>setName(e.target.value)} name='name' className=' outline-none p-1 rounded' required id='name' />
                            <label className={`mb-1 ${toogle?'text-black':'text-white'}`} htmlFor="name">Name</label>
                            <i></i>
                        </div>
                        <div className="input">
                            <input type="text" onChange={(e)=>setPhone(e.target.value)}  name='phone' className=' outline-none p-1 rounded ' required id='phone'/>
                            <label className={`mb-1 ${toogle?'text-black':'text-white'}`} htmlFor="phone">Phone</label>
                            <i></i>
                        </div>
                        <div className="input">
                            <input type="text" onChange={(e)=>setEmail(e.target.value)} name='email' className=' outline-none p-1 rounded ' required  id="email"  />
                            <label className={`mb-1 ${toogle?'text-black':'text-white'}`} htmlFor="email">Email</label>
                            <i></i>
                        </div>
                        <div className=" text-white msg ">
                            <textarea id='msg' name='msg' required className='outline-none'></textarea>
                            <label htmlFor="msg" className={`${toogle?'text-black':'text-white'} textlabel`}>Message</label>
                            <p></p>
                        </div>
                        <div className='text-center my-2'>
                            <button onClick={change} className='bg-sky-600 text-white rounded px-5 py-2 ' >
                                Submit
                            </button>
                        </div>
                    </div>
            </div> 
        </div>
    </>
    
  )
}
