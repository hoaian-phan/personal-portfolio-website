import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {GrGithub} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href="#">HOAI-AN PHAN</a>

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Technical skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div>
      <a href="https://linkedin.com/in/hoai-an-phan" target="_blank" rel="noreferrer"><GrLinkedin></GrLinkedin></a>
        <a href="https://github.com/hoaian-phan" target="_blank" rel="noreferrer"><GrGithub></GrGithub></a>
      </div>
    </footer>
  )
}

export default Footer