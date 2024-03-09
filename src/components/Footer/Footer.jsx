import React from 'react'
import './Footer.css'

let copyright = String.fromCharCode(169)
const Footer = () => {
  return (
    <div className='footer'>
      <p>{copyright}{new Date().getFullYear()} KESAVA REDDY</p>
      <div className="links">
        <a href="https://github.com/KesavaReddyD">Github</a>
        <a href="https://twitter.com/dsskesavareddy">Twitter</a>
        <a href="https://www.linkedin.com/in/kesava-reddy-dwarampudi-773255232/">Linkedin</a>
      </div>
    </div>
  )
}

export default Footer