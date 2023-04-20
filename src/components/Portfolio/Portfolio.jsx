import React from 'react'
import './portfolio.css'
import portfol1 from '../../assetsimg/portfol1.png'
import portfol2 from '../../assetsimg/portfol2.png'
import p3 from '../../assetsimg/p3.jpg'
import p4 from '../../assetsimg/p4.jpg'
import p5 from '../../assetsimg/p5.png'

const data =[

  {
    id:1,
    Image: portfol1,
    title: 'amazon clone home page using react',
    github: 'https://github.com/PrasitC/chor-bazar',
  
  },
  {
    id:2,
    Image: portfol2,
    title: 'amazon clone cart page using react',
    github: 'https://github.com/PrasitC/chor-bazar',
  
  },
  {
    id:3,
    Image: p3,
    title: 'android app of student  forum home page  ',
    github: 'https://github.com/PrasitC/Student-forum',
  
  },
  {
    id:4,
    Image: p4,
    title: 'andoroid app of student forum login page',
    github: 'https://github.com/PrasitC/Student-forum',
  
  },
  {
    id:5,
    Image: p5,
    title: 'univerter ,android calculator aplication to interchange unit',
    github: 'https://github.com/PrasitC/unit-Vertor',
  
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>my work</h5>
      <h2>portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id,Image,title,github}) => {
       return(
        <article key={id} className='portfolio__item'>
        <div className="portfolio__immg">
          <img src={Image} alt={title} />
        </div>
        <h3>{title}</h3>
        <div className='portfolio__cta'> <a href={github} className='btn' target='_blank'> github</a>
         </div>
      </article>

       )
        })
      }



      </div>
    </section>
  )
}

export default Portfolio
