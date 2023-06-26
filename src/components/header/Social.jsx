import React from 'react'
import { GrLinkedin } from 'react-icons/gr'
import { GrGithub } from 'react-icons/gr'
import { AiOutlineMail } from 'react-icons/ai'

const Social = () => {
  return (
    <div className="text-center mt-3">
      <a href="https://linkedin.com/in/hoai-an-phan" target="_blank" rel="noreferrer"><GrLinkedin className="social-icon"></GrLinkedin></a>
      &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp;
      <a href="https://github.com/hoaian-phan" target="_blank" rel="noreferrer"><GrGithub className="social-icon"></GrGithub></a>
      &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp;
      <a href="mailto:hoaian.phan.sde2022@gmail.com" target="_blank" rel="noreferrer"><AiOutlineMail className="social-icon"></AiOutlineMail></a>

    </div>
  )
}

export default Social