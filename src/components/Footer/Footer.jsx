import React from 'react'
import './Footer.css'
import {CiFacebook} from 'react-icons/ci'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {FaInstagram} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
const Footer = () => {
  return (
  <footer>
    <a href="#" className='footer__logo'>Prasit </a>
    <ul className='permalinks'>
      <li><a href="#">home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">skills</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
      
    </ul>

    <div className="footer__socials">
      <a href="https://www.facebook.com/prasit.chakraborty"><CiFacebook/></a>
      <a href="https://www.linkedin.com/in/prasit-chakraborty-767b0521b"><TiSocialLinkedinCircular/></a>
      <a href="https://www.instagram.com/_vandien_soul_/"><FaInstagram/></a>
      <a href=" https://twitter.com/ig_void?t=BHhoWD1vA3Yp8L0xUs2Kdg&s=08 "><AiFillTwitterCircle/></a>
    </div>
    <div className="footer__copyright">
      <small>&copy; prasit chakraborty . All rights reserved</small>
    </div>
  </footer>
  )
}

export default Footer
