/* eslint-disable multiline-ternary */
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import AppWrap from '../../wrapper/AppWrap'
import emailIcon from '../../assets/emailIcon.png'
import mobile from '../../assets/mobile.png'
import MotionWrap from '../../wrapper/MotionWrap'

import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData

  const formRef = useRef()

  const handleChangeInput = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        'Portfolio',
        'template_oz308ln',
        formRef.current,
        'NLSVp9vPRcYhv7yBe'
      )
      .then((result) => {
        console.log(result.text)
        setLoading(false)
        setIsFormSubmitted(true)
      })
      .catch((e) => console.log(e.text))

    // const contact = {
    //   _type: 'contact',
    //   name: name,
    //   email: email,
    //   message: message
    // }
    // client.create(contact).then(() => {
    //   setLoading(false)
    //   setIsFormSubmitted(true)
    // })
  }
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={emailIcon} alt="email" />
          <a href="mailto:magp260602@gmail.com" className="p-text">
            magp260602@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={mobile} alt="mobile" />
          <a href="tel:+593978853786" className="p-text">
            +593978853786
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form
          className="app__footer-form app__flex"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" className="p-text">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text message">Thanks for getting in touch!</h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
