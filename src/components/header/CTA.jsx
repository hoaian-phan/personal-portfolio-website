import React from 'react'
import HoaiAnPhanResume from '../../assets/HoaiAnPhanResume.pdf'

const CTA = () => {
  return (
    <div class="my-5">
      <button type="button" class="btn btn-light bg-navy me-1">
        <a href={HoaiAnPhanResume} download class="text-light-blue text-decoration-none">Download resume</a>
      </button>
      <button type="button" class="btn btn-light bg-light-blue border border-white ms-1">
        <a href="#contact" class="text-navy text-decoration-none">Let's Chat</a>
      </button>
    </div>
  )
}

export default CTA