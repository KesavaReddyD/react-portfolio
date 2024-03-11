import React from 'react'
import './Projects.css'
import Card from '../Card/Card'
import portfolio from '../../assets/images/portfolio.png'
import spotify from '../../assets/images/spotify.png'


export const Projects = () => {
  return (
    <section id='projects'>
          <h2 className='ptitle'>My Projects</h2>
          <div className='projcontainer'>
            <Card img={portfolio} name={"portfolio website"} description={"This is my portfolio website that i made using react. this is the current page you are looking at."} link={"https://kesavareddyd.vercel.app/"} code={"https://github.com/KesavaReddyD/react-portfolio"}/>
            <Card img={spotify} name={"spotify clone"} description={"This is a spotify clone made using only HTML and CSS. I have replicated Home, Search and Login pages of spotify."} link={"https://industry-ready-2125.github.io/module-3-hosting-KesavaReddyD/"} code={"https://github.com/industry-ready-2125/module-3-hosting-KesavaReddyD"}/>
          </div>
    </section>
  )
}

export default Projects