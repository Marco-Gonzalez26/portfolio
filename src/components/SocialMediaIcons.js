import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
const SocialMediaIcons = () => {
  return (
    <div className="app__social">
      <div style={{ cursor: 'pointer' }}>
        <a
          href="https://twitter.com/Alwaystark26"
          rel="noreferrer"
          target="_blank"
        >
          <BsTwitter />
        </a>
      </div>
      <div style={{ cursor: 'pointer' }}>
        <a
          href="https://www.instagram.com/marcoagonzalezp/"
          rel="noreferrer"
          target="_blank"
        >
          <BsInstagram />
        </a>
      </div>
      <div style={{ cursor: 'pointer' }}>
        <a
          href="https://www.linkedin.com/in/marco-gonzalez-77341b1b7/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}

export default SocialMediaIcons
