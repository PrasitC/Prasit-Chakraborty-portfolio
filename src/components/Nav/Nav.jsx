import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserPin} from 'react-icons/bi'
import {BsBookmarkPlus} from 'react-icons/bs'
import {AiOutlineProject} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'
const Nav = () => {
  const [activeNav , setActiveNav]= useState('#')
  return (
   <nav>
    <a href="#"  onClick={() => setActiveNav('#')} className={activeNav=== '#' ? 'active' : '' }><AiOutlineHome/></a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav=== '#about' ? 'active' : '' }><BiUserPin/></a>
    <a href="#skills"  onClick={() => setActiveNav('#skills')} className={activeNav=== '#skills' ? 'active' : '' }><BsBookmarkPlus/></a>
    <a href="#portfolio"  onClick={() => setActiveNav('#portfolio')} className={activeNav=== '#portfolio' ? 'active' : '' }><AiOutlineProject/></a>
    <a href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav=== '#contact' ? 'active' : '' }><AiOutlineMessage/></a>
   
   </nav>
  )
}

export default Nav
