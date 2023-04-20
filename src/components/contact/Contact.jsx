import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {ImLinkedin2} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r52tf4h', 'template_1wrp898', form.current, '9RUFpVbTRO7YiJvhD')
      e.target.reset()
  };
 
  return (
   <section id='contact'>
    <h5>Get in Touch</h5>
    <h2>contact me</h2>

    <div className="container contact_container">
      <div className="contact__options">
         <article className='cntact__opt'>
          <AiOutlineMail className='contact__icon'/>
          <h4>Email</h4>
          <h5>bunnychakrabortty@gmail.com</h5>
          <a href="mailto:bunnychakrabortty@gmail.com" target='_blank'>
            send a massage
          </a>

         </article>
         <article className='cntact__opt'>
          <ImLinkedin2 className='contact__icon'/>
          <h4>Linkedin </h4>
          <h5>prasit chakraborty</h5>
          <a href="https://www.linkedin.com/in/prasit-chakraborty-767b0521b" target='_blank'>
          Lets connect
          </a>

         </article>
         <article className='cntact__opt'>
          <BsInstagram className='contact__icon'/>
          <h4>Instagram</h4>
          <h5>@_vandien_soul_</h5>
          <a href="https://www.instagram.com/_vandien_soul_/" target='_blank'>
            send massage
          </a>

         </article>

      </div>
      <form ref={form} onSubmit={sendEmail}>
      <input type="text"  name='name' placeholder='your full name ' required/>
           <input type="email" name="email" placeholder='your Email' required />
          <textarea name="message" placeholder='your message' rows="10" required></textarea>
         <button type='submit' className='btn btn-primary'> SEND</button>
      </form>
      </div>
   </section>
   
  )
}

export default Contact
