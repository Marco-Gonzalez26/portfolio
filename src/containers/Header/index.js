import React from 'react'
import './Header.scss'
import AppWrap from '../../wrapper/AppWrap'
import { motion } from 'framer-motion'
// import profile from '../../assets/My project-1.png'
import circle from '../../assets/circle.svg'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import js from '../../assets/javascript.png'
import logo from '../../assets/dev2.png'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}
const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
      viewport={{ once: true }}
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Marco</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer / UX Designer</p>
          <p className="p-text">Freelancer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
      viewport={{ once: true }}
    >
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={logo}
        alt="profile_bg"
        className="logo-img"
        viewport={{ once: true }}
      />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={circle}
        alt="profile_circle"
        className="overlay_circle"
        viewport={{ once: true }}
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      viewport={{ once: true }}
    >
      {[js, react, redux].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
)

export default AppWrap(Header, 'home')
