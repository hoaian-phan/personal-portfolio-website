import React from 'react'
import HoaiAnPhanResume from '../../assets/Hoai-An-Phan_Resume_2022.pdf'

const onResumeDownload = () => {
  window.open(HoaiAnPhanResume)
}
const CTA = () => {
  return (
    <div class="my-5">
      <button type="button" class="btn btn-light bg-navy me-1"
              onClick={onResumeDownload}>Download Resume
      </button>
      <button type="button" class="btn btn-light bg-light-blue border border-white ms-1">
        <a href="#contact">Let's Chat</a>
      </button>
    </div>
  )
}

export default CTA