import React from 'react'
import resume from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div>
      <button type="button" class="btn btn-light bg-navy">
        <a href={resume} download class="text-light-blue ">Download resume</a>
      </button>
      <button type="button" class="btn btn-info">
        <a href="#contact" class="text-navy">Let's Chat</a>
      </button>

    </div>
  )
}

export default CTA