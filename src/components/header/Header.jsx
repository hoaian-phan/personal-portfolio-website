import React from 'react'
import CTA from './CTA'
import me from '../../assets/me.jpeg'
import Connect from './connect'

const Header = () => {
  return (
    <header class="container">
      <div class="text-center">
        <h6> Hello I'm</h6>
        <h1> Hoai-An Phan</h1>
        <h6> Full-stack Software Engineer</h6>
        <CTA />
        <Connect />
        <div>
          <img src={me} alt="me" />
        </div>

      </div>

    </header>
  )
}

export default Header