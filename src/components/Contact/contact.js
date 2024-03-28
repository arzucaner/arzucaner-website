import React, { useRef } from 'react';
import './contact.css';
import Award from '../../assets/award.png';
import YoutubeIcon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4j6dfe8', 'template_gt4avmk', form.current, {
        publicKey: '5uFSevxULKoRcnB6J',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset(); 
          alert('Email Sent !');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
      <div id="achievements">
           <h1 className="contactPageTitle">My Achievements</h1>
           <p className="achievementDesc">
            Lorem
           </p>
           <div className="achievementImgs">
            <img src={Award} alt="achievement" className="achievementImg" />

           </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc"> Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
              <input type="text" className="name" placeholder='Your Name' name='your_name'/>
              <input type="email" className="email" placeholder='Your Email' name='your_email'/>
              <textarea className='msg' name="message"rows="5" placeholder='Your Message'></textarea>
              <button type='submit' value='Send' className="submitBtn">Submit</button>
              <div className="links">
                <img src={YoutubeIcon} alt="Youtube" className="link" />
              </div>        
       </form>
      </div>

    </section> 
    
  );
}

export default Contact;
