import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Projects = ({toogle}) => {

    const navigate=useNavigate()
    const navigateTo= (e)=>{
        navigate(e)
    }
    const projects=[
        {id:7,
        bg:'bg-[url(../public/images/weather.jpeg)]',
        proName:'Weather App',
        proDescription:'Developed a Weather app for finding the today updated weathers and weather informations using React.Js',
        border:'border-2 border-red-500',
        nav:'/weather'
        },
        {id:1,
        bg:'bg-[url(../public/images/advice.jpeg)]',
        proName:'AdviceApp',
        proDescription:'Developed a Advice app for taking free advice for daily and follow the advice rules.',
        border:'border-2 border-green-600',
        nav:'/advice'},
        {
        id:2,
        bg:'bg-[url(../public/images/clock.jpeg)]', 
        proName:'clock',
        proDescription:'Developed a digital clock app using react js use hooks and date functions and  maintaine your timaing.',
        border:'border-2 border-yellow-600',
        nav:'/clock'},
        {
        id:3,
        bg:'bg-[url(../public/images/password.png)]', 
        proName:'Password Generator',
        proDescription:'Developed a Password generator app for generating the new passwords . in this app have a copy past options.',
        border:'border-2 border-rose-900',
        nav:'/password'},
        {
        id:4,
        bg:'bg-[url(../public/images/bmi1.jpg)]', 
        proName:'Bmi Calculator',
        proDescription:'Developed a Bmi calculator app for culculate your bmi and managing your height and weights and diet controls.',
        border:'border-2 border-cyan-600',
        nav:'/bmi'},
        {
        id:5,
        bg:'bg-[url(../public/images/currency.png)]', 
        proName:'Currency Converter',
        proDescription:'Developed a currency Converter app for coverting multiple currencys. in this project have a multiple of currencyes.',
        border:'border-2 border-orange-500',
        nav:'/currency'},
        {
        id:6,
        bg:'bg-[url(../public/images/qrcode.png)]', 
        proName:'Qr Code Generator',
        proDescription:'Developed a Qr code generator app for generate your own qr with your own contents and website linkes.',
        border:'border-2 border-sky-600',
        nav:'/qrcode'},
    ]
  return (
    <>
        <div className='pro'>
            <h1 className={`'text-center font-extrabold text-4xl flex justify-center items-baseline ${toogle?'text-red-500':'text-cyan-400'}`}>MY PROJECTS 
                <p className={`text-xs ${toogle?'text-black':'text-white'}`}>(hover the Images)</p></h1>

            <div className='pro1 grid grid-cols-4 justify-items-center mt-6 gap-8 px-10 place-items-center grid-rows-2'>
                {projects.map((project)=>(
                    <div className={`rounded-lg bg-no-repeat bg-cover overflow-hidden ${project.border} ${project.bg}`} key={project.id}>
                    <div className='flex justify-center h-52 flex-col opacity-0 hover:opacity-90 items-center bg-gray-600  overflow-hidden'>
                        <p className='bg-gray-400 opacity-80 hover:z-10 '></p>
                        <h1 className='text-sky-400 text-2xl '>{project.proName}</h1>
                        <p className='text-center text-sky-400'>{project.proDescription}</p>
                        <button onClick={()=>navigateTo(project.nav)}  className='bg-red-500 rounded p-1 border-none m-1 cursor-pointer'>View Project</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    
    </>
)
}
