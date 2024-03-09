import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_10l9qts', 'template_wx9myf6', form.current, {
        publicKey: 'JEj7NhwOoaD60M2Sv',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div id="contactme">
        <h1 className='conthead'>Contact Me</h1>
        <p className='contxt'>If you have any questions or would like to work with me, please feel free to contact me.</p>
        <form className='contactform' ref={form} onSubmit={sendEmail}>
            <input type="text" className='name' placeholder="Name" name="user_name"/>
            <input type="email" className='email' placeholder="Email" name="user_mail"/>
            <textarea className='msg' rows="5" placeholder="Message" name="user_msg"></textarea>
            <button type="submit" className='subbtn'>Send</button>
        </form>
    </div>
  );
}

export default Contact