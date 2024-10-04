import React from 'react'

export const Footer = ({toogle}) => {
  return (
    <>
        <div className={`foot1 flex text-2xl justify-center items-center gap-10 mt-8 ${toogle?'socialTrue':'social'}`}>
            <a href="https://www.instagram.com/___hxri.__/" target='_blank'> <i className="fa-brands fa-instagram cursor-pointer"></i></a>
            <a href="https://www.facebook.com/deepaking.deepaking.3/" target='_blank'><i className="fa-brands fa-facebook cursor-pointer"></i></a>
            <a href="https://x.com/HariKavi_HK_07" target='_blank'><i className="fa-brands fa-twitter cursor-pointer"></i></a>
            <a href="https://www.linkedin.com/in/hariharapudhranS/" target='_blank'><i className="fa-brands fa-linkedin cursor-pointer"></i></a>
            <a href="https://github.com/kuttycop" target='_blank'><i className="fa-brands fa-github cursor-pointer"></i></a>
        </div>
    </>
  )
}
