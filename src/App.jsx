import React from 'react'
import Header from './components/Header/Hader'
import Nav  from './components/Nav/Nav'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/skills/Skills'
import About from './components/about/About'
const App = () => {
  return (
   <>
   <Header />
   <Nav/>
   <About/>
      
       <Skills/>
       <Portfolio/>
      
   <Contact/>

   <Footer/>

   
     
   </>
  )
}

export default App
