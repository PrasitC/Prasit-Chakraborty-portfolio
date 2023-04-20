import React from 'react'
import './About.css'
import c2 from '../../assetsimg/c2.jpg'
import { AiOutlineFolderOpen } from 'react-icons/ai'
import { HiOutlineAcademicCap } from 'react-icons/hi'
import { GiAchievement } from 'react-icons/gi'
const About = () => {
  return (
    <section id='about'>
      <h5>glance </h5>
      <h2>about me</h2>


      <div className="container about__container">
        <div className="about__me">
          <div className="about__meimg">
            <img src={c2} alt=" about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>

              <AiOutlineFolderOpen className='about__icon' />
              <h5>projects</h5>
              <small>5+ </small>
            </article>
            <article className='about__card'>

              <HiOutlineAcademicCap className='abot__icon' />
              <h5>academics</h5>
              <small> 80% consistent </small>
            </article>
            <article className='about__card'>

              <GiAchievement className='abot__icon' />
              <h5>achievments</h5>
              <small> competitions & more  </small>
            </article>
          </div>
          <p>
            Computer engineering graduate with a hunger to learn ,with proven
            leadership skill displayed at various university initiatives. Nominated as
            Project Leader in an Academic project.
          </p>
          <a href="#contact" className='btn btn__primary' > lets chat </a>
        </div>
      </div>

    </section>


  )
}

export default About
