import React from 'react';
import './contact.css';
import Award from '../../assets/award.png';
import YoutubeIcon from '../../assets/youtube.png';

const Contact = () => {
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
        <form className='contactForm'>
              <input type="text" className="name" placeholder='Your Name' />
              <input type="email" className="email" placeholder='Your Email'/>
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
