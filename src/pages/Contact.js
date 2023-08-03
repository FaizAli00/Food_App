import React from 'react'
import pizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage: `url(${pizzaLeft})`}}></div>
      <div className='rightSide'>
        <h1> Contact Us </h1>
        <form id='contact-form' method='POST'>
            <label htmlFor="name">Full Name</label>
            <input name='name' placeholder='Ente Full Name...' type="text" />
            <label htmlFor="email">Email</label>
            <input name='name' placeholder='Enter Your Email...' type="email" />
            <label htmlFor="message">Message</label>
            <textarea name="name"  cols="6" rows="6" placeholder='Enter Your Message...' required></textarea>
            <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
