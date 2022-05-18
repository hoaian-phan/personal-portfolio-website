import React from 'react'
import resume from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div>
      <a href={resume} download>Download resume</a>
      <a href="#contact">Let's Chat</a>

    </div>
  )
}

export default CTA