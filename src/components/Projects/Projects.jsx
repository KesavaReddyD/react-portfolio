import React from 'react'
import './Projects.css'
import Card from '../Card/Card'
import portfolio from '../../assets/images/portfolio.png'


export const Projects = () => {
  return (
    <section id='projects'>
        <div className='proj'>
          <h2 className='ptitle'>My Projects</h2>
          <div className='projcontainer'>
            <Card img={portfolio} name={"portfolio website"}/>
          </div>
        </div>
    </section>
  )
}

export default Projects