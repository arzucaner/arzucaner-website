import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/discover.png';
import { Link } from 'react-scroll';


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm<span className="introName">Arzu</span> <br />Software Developer</span>
                <p className="introPara">I add colour to my creativity; I turn my dreams into reality with code!</p>
                <Link><button className="btn"><img src={btnImg} alt="Discover" className='btnImg' />Discover</button></Link>

            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;