import React from 'react'
import { useState } from 'react'
import { AiTwotoneHome } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { MdBusinessCenter } from 'react-icons/md'
import { BiBookOpen } from 'react-icons/bi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { MdRateReview } from 'react-icons/md'
import { MdPermContactCalendar } from 'react-icons/md'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className="">
      <a id="menu#" href="##" onClick={() => setActiveNav('#')} classNameName={activeNav === '#' ? 'active' : ''} ><AiTwotoneHome /></a>
      <a id="menuAbout" href="#about" onClick={() => setActiveNav('#about')} classNameName={activeNav === '#about' ? 'active' : ''} ><FaUserAlt /></a>
      <a id="menuExperience" href="#experience" onClick={() => setActiveNav('#experience')} classNameName={activeNav === '#experience' ? 'active' : ''}><MdBusinessCenter /></a>
      <a id="menuSkills" href="#skills" onClick={() => setActiveNav('#skills')} classNameName={activeNav === '#skills' ? 'active' : ''} ><BiBookOpen /></a>
      <a id="menuPortfolio" href="#portfolio" onClick={() => setActiveNav('#portfolio')} classNameName={activeNav === '#portfolio' ? 'active' : ''} ><AiOutlineFundProjectionScreen /></a>
      <a id="menuTestimonials" href="#testimonials" onClick={() => setActiveNav('#testimonials')} classNameName={activeNav === '#testimonials' ? 'active' : ''} ><MdRateReview /></a>
      <a id="menuContact" href="#contact" onClick={() => setActiveNav('#contact')} classNameName={activeNav === '#contact' ? 'active' : ''} ><MdPermContactCalendar /></a>
    </nav>
  )
}

export default Nav