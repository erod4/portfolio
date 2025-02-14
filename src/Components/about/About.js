import React from 'react'
import TitleOne from '../main/TitleOne'
import Title from '../Title'
import Bio from './Bio'
import '../about/About.css'

const About = () => {
  return (
    <div className='About' id='about'>
      <Title text={'About'} className='title' />
      <div className='Bio-Img-Container '>
        <img
          alt='img of me'
          className='Bio-Img'
          src='https://res.cloudinary.com/diihzldoh/image/upload/v1739503814/me_bqy6cl.jpg'
        />
      </div>
      <Bio />
    </div>
  )
}

export default About
