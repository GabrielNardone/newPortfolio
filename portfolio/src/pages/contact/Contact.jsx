import "./contact.css"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rjkubvj', 'template_8gicqim', form.current, 'KbuDROeBtwhMnCiMY')
      .then((result) => {
        console.log(result.text);
        e.target.reset()
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="divContact">

      <form ref={form} onSubmit={sendEmail}>
        <p className="writeMe">Write me a message!</p>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit"> Send </button>
        <p className="mail">gabriel.f.nardone@gmail.com <i className="fa-regular fa-envelope"></i></p>
      </form>

      <div >
        <h2>You can also see my:</h2>
        <p>
          <Link to={"https://www.linkedin.com/in/gabrielnardone/?locale=en_US"} target={'_blank'} >Linkedin <i className="fa-brands fa-linkedin-in"></i></Link>
          <i className="fa-solid fa-arrow-right-long"></i>
        </p>
        <p>
          <Link to={"https://github.com/GabrielNardone"} target={'_blank'} >Github <i className="fa-brands fa-github"></i></Link>
          <i className="fa-solid fa-arrow-right-long"></i>
        </p>
        <span className="contactLogo">GN</span>

      </div>

    </div>
  );
};
