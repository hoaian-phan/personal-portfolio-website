import React from 'react'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav class="navbar fixed-bottom rounded-pill px-3 bg-blue m-auto">
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} class="fs-2">Home</a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} class="text-uppercase fs-5">About</a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} class="text-uppercase fs-5">Experience</a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''} class="text-uppercase fs-5">Skills</a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} class="text-uppercase fs-5">Project</a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''} class="text-uppercase fs-5">Testimonials</a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} class="text-uppercase fs-5">Contact</a>
    </nav>
  )
}

export default Nav