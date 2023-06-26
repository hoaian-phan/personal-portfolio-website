import React from 'react'
import Intro from './Intro'
import CTA from './CTA'
import Social from './Social'
import me from '../../assets/HAP_at_WWC.jpg'


// My landing page, with name, photo, titles, download resume and let's talk (in CTA)
const Header = () => {
  return (
    <header id="#" className="container my-5">
      <div className="text-center mb-4">
        <h5> Hello, I'm</h5>
        <h1 className="title"> Hoai-An Phan</h1>
        <Intro classNameName="role" />

        <Social />

        <div className="my-4 mt-4 ">
          <img src={me} className="img-thumbnail rounded resize-photo" alt="me" />
        </div>
        <CTA />

      </div>
    </header>
  )
}

export default Header