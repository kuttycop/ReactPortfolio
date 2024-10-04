import React from 'react'

export const About = ({profile,toogle}) => {
  return (
    <>
        <h1 className={`text-center text-5xl mt-3 font-bold ${toogle?' text-red-700':'text-cyan-400'}`}>About Me </h1>
        <div className='about1'>
                <div className=" about2 flex justify-around items-center gap-10 p-10">
                    <div className={`rounded-full ${toogle?'bg-red-500':'bg-cyan-500'} p-1`}>
                        <img src={profile} className='rounded-full'/>
                    </div>
                    <div className="flex flex-col gap-8">
                        <p className='text-xl'>I am Hariharaputhran, a passionate Frontend Web Designer with a keen eye for design and detail. With experience in creating dynamic and responsive websites, I strive to bring a unique perspective to every project I work on. My goal is to combine creativity and technical expertise to deliver visually appealing and user-friendly web experiences.</p>
                        <div>
                            <button className='bg-cyan-400 text-black p-2 rounded font-medium text-xl'>Downlode CV</button>
                        </div>
                    </div>
                </div>
        </div>
    
    </>
  )
}
