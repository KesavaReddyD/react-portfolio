import React from 'react'
import "./styles.css"
import '../fonts.css'
import {Link} from "react-scroll"
import duster from "../assets/images/duster.png"

const Navbar = () => {
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
        <div>
            <Link className='nav-link'>Home</Link>
            <Link className='nav-link'>About</Link>
            <Link className='nav-link'>Projects</Link>
            <Link className='nav-link'>Skills</Link>
        </div>
        <button className='contact-me'>
          <img src={duster} alt='contact me' className='duster'/>
          <p>contact me</p>
        </button>
    </nav>
  )
}

export default Navbar