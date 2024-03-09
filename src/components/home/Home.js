import React from 'react'
import './home.css'
import clouds from '../../assets/images/clouds.png'

const Home = () => {
  return (
    <section id='home'>
        <div className='intro'>
            <span style={{color:"#b9eb86", fontSize:'5rem'}}>Namaste</span>
            <span style={{fontSize:"3rem"}}>I'm <span style={{color:"#EBB93E", fontSize:'5rem'}}>Kesava Reddy</span><br/>Web Developer</span>
            <p style={{fontSize:"2rem"}}>I am a student and also passionate <br/> web dev trying to explore and learn various web technologies.</p>
        </div>
        <img src={clouds} alt='clouds' className='clouds'/>
    </section>
  )
}

export default Home