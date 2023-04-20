import React from 'react'
import './Header.css'
import Cta from './Cta'
import b1 from '../../assetsimg/b1.jpg'
import Headersocials from './Headersocials'
const Hader = () => {
  return (
    <header>
     <div className="container header__container" >
      <h5>HELLO I'M</h5>
     <div className="transition">
      <h1>PRASIT CHAKRABORTY</h1>
      </div>
      <h5 className="text-light"> software developer </h5>
       <Cta/>
      <Headersocials/>
      <div className="me">
        <img src={b1} alt="me" />
      </div>
      <a href="#contact" className='scroll_down '>scroll down </a>
     </div>

    </header>
  )
}

export default Hader
