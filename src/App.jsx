
import { BrowserRouter, Route, Routes,Link} from 'react-router-dom'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { useState } from 'react'
import moon from '../public/images/moon.png'
import sun from '../public/images/sun.png'
import trans3 from '../public/images/trans3.jpeg'
import trans4 from '../public/images/trans4.jpeg'
import profile from '../public/images/profilebackremove.png'
import bmiImg from '../public/images/bmi1.jpg'
import { Footer } from './Components/Footer'
import { Skills } from './Components/Skills'
import { Projects } from './Components/Projects'
import { AdviceApp } from './ProjectComponents/AdviceApp'
import { DigitalClock } from './ProjectComponents/DigitalClock'
import { PasswordGenerator } from './ProjectComponents/PasswordGenerator'
import { QrCode } from './ProjectComponents/QrCode'
import { BmiCalc } from './ProjectComponents/BmiCalc'
import { WeatherDeatiles } from './ProjectComponents/WeatherDeatiles'
import { Currency } from './ProjectComponents/Currency'
import { Certificate } from './Components/Certificate'
import { Python } from './Certificates/Python'
import { Javascript } from './Certificates/javascript'
import { FullSwithPy } from './Certificates/FullSwithPy'
import { Js2 } from './Certificates/Js2'
import { Git } from './Certificates/Git'
import { Js3 } from './Certificates/Js3'
import { Contact } from './Components/Contact'

function App() {
  const [toogle,setToogle]=useState(false)
  const [sideShow,setSideShow]=useState()

  const show=()=>{
    setSideShow(true)
  }
  const close=()=>{
    setSideShow(false)
  }
  const handleClick=()=>{
    setToogle(!toogle)
  }
  return (
    <>
      <div className={`${toogle?'bg-white text-black':'bg-black text-white'} w-screen h-screen app1`}>
          <BrowserRouter>
            <div className="nav1 flex justify-between p-3">
                <div className='nav3 flex justify-center items-center gap-1 font-bold text-2xl ml-7'>
                  <img src="../public/images/logo2.jpeg" alt="logo" className='h-11 rounded-full'/>
                  <h1>Hari</h1>
                </div>
                <div className='nav2' >
                  <ul className='flex justify-evenly gap-7 text-base font-semibold list '>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/skills' >Skills</Link></li>
                    <li><Link to='/project'>Projects</Link></li>
                    <li><Link to='/certificate'>Certificates</Link></li>
                    <li><Link to='/contact'>ContectMe</Link></li>
                  </ul>
                </div>
                <div className='tgl'>
                  <img src={toogle?moon:sun} alt="toogle switch" className='h-8 rounded-full' onClick={handleClick} />
                </div>
                <i className='fa-solid fa-bars cursor-pointer md:hidden ' onClick={show}></i>
            </div>
            <div className={`${sideShow?'left-0':' -left-80'} sidenav bg-cyan-400 h-screen z-50 cursor-pointer top-0 p-2 text-end absolute w-80`}>
                  <i className='fa-solid fa-xmark text-end text-black ' onClick={close}></i>
                  <ul onClick={close} className='flex flex-col w-full justify-evenly cursor-pointer text-center text-black gap-7 mt-5 text-base font-semibold list'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/skills' >Skills</Link></li>
                    <li><Link to='/project'>Projects</Link></li>
                    <li><Link to='/certificate'>Certificates</Link></li>
                    <li><Link to='/contact'>ContectMe</Link></li>
                  </ul>
            </div>
            <Routes>
                <Route path='/' element={<Home trans3={trans3} trans4={trans4} toogle={toogle}/>}/>
                <Route path='/about' element={<About profile={profile} toogle={toogle}/>}/>
                <Route path='/skills' element={<Skills toogle={toogle}/>}/>
                <Route path='/project' element={<Projects toogle={toogle}/>}/>
                <Route path='/advice' element={<AdviceApp toogle={toogle}/> }/>
                <Route path='/clock' element={<DigitalClock toogle={toogle}/>} />
                <Route path='/password' element={<PasswordGenerator toogle={toogle}/>} />
                <Route path='/qrcode' element={<QrCode toogle={toogle}/>} />
                <Route path='/bmi' element={<BmiCalc toogle={toogle} bmi1={bmiImg}/>} />
                <Route path='/weather' element={<WeatherDeatiles toogle={toogle}/>} />
                <Route path='/currency' element={<Currency toogle={toogle}/>} />
                <Route path='/certificate' element={<Certificate toogle={toogle}/>} />
                <Route path='/python' element={<Python toogle={toogle}/>} />
                <Route path='/javascript' element={<Javascript toogle={toogle}/>} />
                <Route path='/fullwithpy' element={<FullSwithPy toogle={toogle}/>} />
                <Route path='/geekjs' element={<Js2 toogle={toogle}/>} />
                <Route path='/git' element={<Git toogle={toogle}/>} />
                <Route path='/learntube' element={<Js3 toogle={toogle}/>} />
                <Route path='/contact' element={<Contact toogle={toogle}/>} />
            </Routes>
          </BrowserRouter>
          <Footer toogle={toogle}/>
      </div>
    </>
  )
}

export default App
