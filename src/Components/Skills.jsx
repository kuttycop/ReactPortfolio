import React, { forwardRef } from 'react'

export const Skills = ({toogle}) => {
    const bars=[
        {id:1,language:'HTML',vale:'100',clr:'#ff4d4d'},
        {id:2,language:'CSS',vale:'90',clr:'#2980b9'},
        {id:3,language:'JS',vale:'70',clr:'#f1c40f'},
        {id:4,language:'React.js',vale:'60',clr:'#3498db'},
        {id:5,language:'MONGODB',vale:'70',clr:'#27ae60'},
        {id:6,language:'Node.js',vale:'50',clr:'#4cd137'},
        {id:7,language:'Express.js',vale:'50',clr:'#fbc531'},
        {id:8,language:'BOOTSTRAP',vale:'90',clr:'#8e44ad'},
        {id:9,language:'TAILWIND.CSS',vale:'90',clr:'#0984e3'},
    ]
    const stright=[
      {id:1, sub:'LEADERSHIP', bg:'bg-red-600',percent:90, width:'w-11/12',border:'border-2 border-red-600' ,},
      {id:2, sub:'TIME MANAGEMENT', bg:'bg-blue-600',percent:100,width:'w-full',border:'border-2 border-blue-600',},
      {id:3, sub:'PROBLEM SOLVING', bg:'bg-orange-600',percent:80,width:'w-4/5',border:'border-2 border-orange-600',},
      {id:3, sub:'GIT', bg:'bg-green-400',percent:95,width:'w-11/12',border:'border-2 border-orange-600',},
      {id:3, sub:'GIT HUB', bg:'bg-pink-600',percent:95,width:'w-11/12',border:'border-2 border-orange-600',},
    ]
    
  return (
    <>
        <h1 className={` ${toogle?' text-red-700':'text-cyan-400'} text-center font-bold text-4xl mb-5`}>MY SKILLS</h1>
        <div className="skill1 flex justify-between  items-center  p-10 ">
                <div className='flex skill2 justify-between flex-col h-96 w-96 ml-20 flex-wrap items-center mb-3 gap-10'>
                    {bars.map((lang)=>( 
                        <div key={lang.id} style={{'--clr':lang.clr,'--value':lang.vale}} className={`${toogle?'progress2':'circular-progress'} flex justify-center items-center rounded-full`}>
                            <span className={`z-10 text-2xl absolute ${toogle?'text-black':'text-white'}`}>{lang.vale}%</span>
                            <div className={`${toogle?'text-black':'text-white'} line-progress absolute text-xl top-24 m-2 z-20`}>{lang.language}</div>
                        </div>
                    ))}
                </div>
                <div className=' skill3  absolute right-20 mr-14 flex flex-col h-96 w-96 mb-12'>
                    <div className='skill5'>
                      {stright.map((bar)=>(
                        <div key={bar.id}>
                            <h2 className='font-medium mt-10 text-lg'>{bar.sub}</h2>
                        <div className= {`${toogle?'bg-black':'bg-white'} h-2 rounded`}>
                            <div className={`${bar.bg} h-2 ${bar.width} rounded `}>
                                <span  className={`h-6 w-6 anim1 -mt-3 ${bar.border} justify-center p-4 text-xs items-center text-black rounded-full flex float-right bg-white`}>{bar.percent}%</span>
                            </div>
                        </div>
                        </div>
                      ))}
                    </div>
                </div>
        </div>
    </>
  )
}