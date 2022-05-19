import React from 'react'
import CTA from './CTA'
import me from '../../assets/me_full.JPG'

const Header = () => {
  return (
    <header class="container my-5">
      <div class="text-center">
        <h6> Hello I'm</h6>
        <h1> Hoai-An Phan</h1>
        <h6> Software Engineer &nbsp;&nbsp; • &nbsp;&nbsp; Gardener &nbsp;&nbsp; • &nbsp;&nbsp; Coffee Lover</h6>
        <div class="my-4">
          <img src={me} class="img-thumbnail rounded resize-photo" alt="me" />
        </div>
        <CTA />
        
      </div>
    </header>
  )
}

export default Header