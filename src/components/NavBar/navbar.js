import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo' />
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">Who I Am?</Link>
                <Link className="desktopMenuListItem">My Projects</Link>
                <Link className="desktopMenuListItem">My Achievements</Link>
                <Link className="desktopMenuListItem">Blog</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>
        </nav>
    )
}

export default Navbar;