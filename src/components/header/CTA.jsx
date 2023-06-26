import React from 'react'


const CTA = () => {
  return (
    <div className="my-4">
      <button type="button" className="btn btn-light bg-navy me-1 text-light-blue">
        <a href="https://hoaian-personal-website.s3.us-west-1.amazonaws.com/HOAI-AN+PHAN+Full+Resume.pdf" rel="noopener noreferrer" target="_blank">Download Resume</a>
      </button>
      <button type="button" className="btn btn-light bg-light-blue border border-white ms-1">
        <a href="#contact">Let's Chat</a>
      </button>
    </div>
  )
}

export default CTA