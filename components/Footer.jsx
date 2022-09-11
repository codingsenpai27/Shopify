import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Shopify&#169; All Rights Reserved</p>
      <p className='icons'>
        <a target='_blank' href='https://www.linkedin.com/in/devansh-jain-b11b9918a/'><AiFillLinkedin/></a>
        <a target='_blank' href='https://github.com/Devansh-DJ007'><AiFillGithub/></a>
      </p>
    </div>
  )
}

export default footer