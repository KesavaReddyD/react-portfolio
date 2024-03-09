import React from 'react'
import SkillContainer from '../Skill-container/SkillContainer'
import skillset from './skillset'
import './Skills.css'

const Skills = () => {
  return (
    <section id='Skills'>
        <h1 className='skitle'>Skills</h1>
        <div className='skill-container'>
            {Object.entries(skillset).map(([skill, img]) => (
                <SkillContainer key={skill} skill={skill} img={img} />
            ))}
        </div>

    </section>
  )
}

export default Skills