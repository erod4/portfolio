import React from 'react'

const Project = ({ title, imgURL, text, url, link }) => {
  return (
    <a className='Project' href={url} target='blank'>
      <h1 className='Project-Title'>{title}</h1>
      <img alt='img' className='Project-Img' src={imgURL} />
      <p className='Project-Text'>{text}</p>
      {link && link}
    </a>
  )
}

export default Project
