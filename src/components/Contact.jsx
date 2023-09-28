import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs.sendForm('service_dkti5rp', 'template_h8c8ler', form.current, 'gHbi45a192X4ZQ0Wm')
      .then((result) => {
          console.log(result.text);
          window.alert("Message sent");
          
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
        <div id='contact' className="contact">
          <div className="GIT-text">
            <h3>Get in touch</h3>
          </div>
          <div className="card1">


          <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="from_name"placeholder='Enter Your Name' />
      <input type="email" name="from_email" placeholder='Enter Your Email'/>
      <textarea name="message" cols="30" rows="10" placeholder='Hi,I would love for us to work...' />
      <input className='lets-work' type="submit" value="Submit" />
    </form>
          </div>
        </div>
      </div>
  )
}

export default Contact
