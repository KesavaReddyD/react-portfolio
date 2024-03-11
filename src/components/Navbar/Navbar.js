import React, { useState } from 'react'
import "./Navbar.css"
import '../../fonts.css'
import {Link} from "react-scroll"
import duster from "../../assets/images/duster.png"
import chalk from "../../assets/images/chalkmenu.png"

const Navbar = () => {

 const [showmenu, setshowmenu] = useState(false);

  return (
    <nav className='nav-bar'>
        <p className='logo'>
          <span style={{color:'#e2a6a3'}}>K</span>
          <span style={{color:'#9fcede'}}>E</span>
          <span style={{color:'#b9eb86'}}>S</span>
          <span style={{color:'#e7b177'}}>A</span>
          <span style={{color:'#d3c24d'}}>V</span>
          <span style={{color:'#9fcede'}}>A</span>
          <span style={{color:'#b9eb86'}}>.</span>
        </p>
        <div className='deskmenu'>
          <div>
              <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={1000} className='nav-link'>Home</Link>
              <Link activeClass='active' to='About' spy={true} smooth={true} offset={-100} duration={1000} className='nav-link'>About</Link>
              <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={1000} className='nav-link'>Projects</Link>
              <Link activeClass='active' to='Skills' spy={true} smooth={true}  offset={-100} duration={1000} className='nav-link'>Skills</Link>
          </div>
          <button className='contact-me'>
            <img src={duster} alt='contact me' className='duster'/>
            <Link activeClass='active' to='contactme' spy={true} smooth={true} offset={-100} duration={1000} className='link'>contact me</Link>
          </button>
        </div>
        <div className='mobmenu'>
          <div className='dropdown'>
            <button className='dropbtn' style={{border:"none"}} onClick={() => setshowmenu(!showmenu)}>
              <img src={chalk} alt='menu' className='chalk'/>
            </button>
            <div className='dropdown-content' style={{display: showmenu ? "flex" : "none"} }>
              <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={1000} className='mob-link' onClick={ () => setshowmenu(false)}>Home</Link>
              <Link activeClass='active' to='About' spy={true} smooth={true} offset={-100} duration={1000} className='mob-link' onClick={ () => setshowmenu(false)}>About</Link>
              <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={1000} className='mob-link' onClick={ () => setshowmenu(false)}>Projects</Link>
              <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-100} duration={1000} className='mob-link' onClick={ () => setshowmenu(false)}>Skills</Link>
              <Link activeClass='active' to='contactme' spy={true} smooth={true} offset={-100} duration={1000} className='mob-link' onClick={ () => setshowmenu(false)}>Contact Me</Link>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar