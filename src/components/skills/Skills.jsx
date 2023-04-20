import React from 'react'
import './Skills.css'
import { AiFillCheckCircle } from 'react-icons/ai'
const Skills = () => {
  return (
    <section id='skills'>
      <h5>what I offer</h5>
      <h2> my skills</h2>
      <div className="container skills__container ">
        <div className="skills__languages">
          <h3>Frontend development </h3>
          <div className="skills__l">
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__icon' />
             <div>
             <h4>HTML</h4>
              <small className='text-light'> 7/10 </small>
             </div>
            </article>
            <article className='skills__details'>
              <AiFillCheckCircle  className='skills__icon'/>
              <div><h4>CSS</h4>
              <small className='text-light'> 7/10 </small></div>
            </article>
            <article className='skills__details'>
              <AiFillCheckCircle  className='skills__icon'/>
             <div>
             <h4>java</h4>
              <small className='text-light'> 8/10 </small>
             </div>
            </article>
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__icon'/>
             <div> <h4>React.js</h4>
              <small className='text-light'> 7/10 </small>
              </div>
            </article>
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__icon'/>
              <div><h4>C</h4>
              <small className='text-light'> 8/10 </small>
              </div>
            </article>
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__icon'/>
              <div><h4>Java script</h4>
              <small className='text-light'> 7/10 </small>
              </div>
            </article>
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__icon'/>
             <div> <h4>Bootstrap </h4>
              <small className='text-light'> 7/10 </small>
              </div>
            </article>
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__icon'/>
              <div><h4> shell </h4>
              <small className='text-light'> 7/10 </small>
              </div>
            </article>

          </div>
        </div>

        <div className="skills__problemsolving">
        <h3>Problem Solving </h3>
          <div className="skills__l">
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__icon'/>
             <div> <h4>leetcode</h4>
              <small className='text-light'> 200+  </small></div>
            </article>
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__icon'/>
             <div> <h4>hackathon </h4>
              <small className='text-light'> participated 5+ times</small>
              </div>
            </article>
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__icon'/>
              <div><h4>open source</h4>
              <small className='text-light'> actievely contributing  </small>
              </div>
            </article>
            <article className='skills__details'>
              <AiFillCheckCircle className='skills__icon'/>
              <div><h4>research work </h4>
              <small className='text-light'> 2+ ideas  </small>
              </div>
            </article>
            

          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills
