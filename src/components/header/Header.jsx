import React from 'react'
import Intro from './Intro'
import CTA from './CTA'
import Social from './Social'
import me from '../../assets/HAP_at_WWC.jpg'


// My landing page, with name, photo, titles, download resume and let's talk (in CTA)
const Header = () => {
  return (
    <header id="#" class="container my-5">
      <div class="text-center mb-4">
        <h6> Hello, I'm</h6>
        <h1> Hoai-An Phan</h1>
        <Intro />
        
        <Social />
        
        <div class="my-4 mt-4 ">
          <img src={me} class="img-thumbnail rounded resize-photo" alt="me" />
        </div>
        <CTA />
        
      </div>
    </header>
  )
}

export default Header