import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {GrGithub} from 'react-icons/gr'
import {AiOutlineMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer class="bg-light-blue mt-5">
      <h6 class="text-center pt-3">Hope to hear from you soon. Enjoy your day from</h6>
      <a href="#"><h3 class="text-center pt-2">HOAI-AN PHAN</h3></a>

      <div class="text-center">
        <a href="https://linkedin.com/in/hoai-an-phan" target="_blank" rel="noreferrer"><GrLinkedin></GrLinkedin></a>
        &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; 
        <a href="https://github.com/hoaian-phan" target="_blank" rel="noreferrer"><GrGithub></GrGithub></a>
        &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; 
        <a href="mailto:hoaian.phan.sde2022@gmail.com" target="_blank" rel="noreferrer"><AiOutlineMail></AiOutlineMail></a>

      </div>
      <br /><br /><br />
    </footer>
  )
}

export default Footer