import React from 'react'
import './Card.css'

const Card = ({img, name}) => {
  return (
    //card for the Projects
    <div className='card'>
        <img src={img} alt='project' className='projimg'/>
        <div className='card-body'>
          <h3 className='projname'>{name}</h3>
          <p className='projdes'>This is my portfolio website that i made using react. this is the current page you are looking at.</p>
        </div>
        <button className='projbtn'><a href='#'>view</a></button>
        <button className='projbtn'><a href='#'>Github</a></button>
    </div>


  )
}

export default Card;