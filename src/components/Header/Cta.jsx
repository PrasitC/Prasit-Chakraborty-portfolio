import React from 'react'
import CV from '../../assetsimg/CV.pdf'
const Cta = () => {
  return (
    <div className="cta">
      <a href={CV} download className='btn' > DOWNLOAD CV </a>
      <a href="#contact" className='btn btn-primary'> lets talk </a>
    </div>
  )
}

export default Cta
