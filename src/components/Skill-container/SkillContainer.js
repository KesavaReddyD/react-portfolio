import React from 'react'
import './Skillcontainer.css'

const SkillContainer = ({skill, img}) => {


  return (
    <div className='skil-container'>
        <h1 style={{fontWeight:"100"}}>{skill}</h1>
        <img style={{width:"50px"}} src={img} alt={skill}/>
    </div>
  )
}

export default SkillContainer