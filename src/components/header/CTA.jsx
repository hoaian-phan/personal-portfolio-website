import React from 'react'
import HoaiAnPhanResume from './Hoai-An-Phan_Resume_2022.pdf'
import { Document, Page, pdfjs } from "react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


const CTA = () => {
  return (
    <div class="my-5">
      <button type="button" class="btn btn-light bg-navy me-1">
        <a href={HoaiAnPhanResume} target="_blank" rel="noreferrer">Download Resume</a>
      </button>
      <button type="button" class="btn btn-light bg-light-blue border border-white ms-1">
        <a href="#contact">Let's Chat</a>
      </button>
    </div>
  )
}

export default CTA