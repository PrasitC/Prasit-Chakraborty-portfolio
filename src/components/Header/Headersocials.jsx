import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {FaFacebookSquare} from 'react-icons/fa'
const Headersocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/prasit-chakraborty-767b0521b" target ="_blank"><AiOutlineLinkedin/></a>
        <a href="https://github.com/PrasitC" target ="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/_vandien_soul_/" target ="_blank"><AiFillInstagram/></a>
        <a href="https://www.facebook.com/prasit.chakraborty" target ="_blank"><FaFacebookSquare/></a>
    </div>
  )
}

export default Headersocials
