import React from 'react'
import './Card.css'

const Card = ({img, name, description, link, code}) => {
  return (
    //card for the Projects
    <div className='card'>
        <img src={img} alt='project' className='projimg'/>
        <div className='card-body'>
          <h3 className='projname'>{name}</h3>
          <p className='projdes'>{description}</p>
        </div>
        <button className='projbtn'><a href={link}>view</a></button>
        <button className='projbtn'><a href={code}>Github</a></button>
    </div>


  )
}

export default Card;