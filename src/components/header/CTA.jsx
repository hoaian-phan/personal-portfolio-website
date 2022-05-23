import React from 'react'
import HoaiAnPhanResume from './Hoai-An-Phan_Resume_2022.pdf'

// const onResumeDownload = () => {
//   window.open(HoaiAnPhanResume)
// }
const CTA = () => {
  return (
    <div class="my-5">
      <button type="button" class="btn btn-light bg-navy me-1"></button>
        <a href={HoaiAnPhanResume} target="_blank" rel="noreferrer">Download Resume</a>
      
      <button type="button" class="btn btn-light bg-light-blue border border-white ms-1">
        <a href="#contact">Let's Chat</a>
      </button>
    </div>
  )
}

export default CTA