import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo' />
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Who I Am?</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">My Projects</Link>
                <Link activeClass='active' to='achievements' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">My Achievements</Link>
                <Link activeClass='active' to='blog' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">My Blog</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>

                <img src={menu} alt="Menu" className='mobMenu' />
                <div className="navMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(!showMenu)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(!showMenu)} >Who I Am?</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(!showMenu)}>My Projects</Link>
                <Link activeClass='active' to='achievements' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(!showMenu)}>My Achievements</Link>
                <Link activeClass='active' to='blog' spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={()=>setShowMenu(!showMenu)}>My Blog</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={()=>setShowMenu(!showMenu)}>Contact</Link>  
            </div>


        </nav>
    )
}

export default Navbar;