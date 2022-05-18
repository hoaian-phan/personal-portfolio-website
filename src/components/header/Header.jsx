import React from 'react'
import CTA from './CTA'
import me from '../../assets/me.jpeg'
import Connect from './connect'

const Header = () => {
  return (
    <header>
      <div>
        <h5> Hello I'm</h5>
        <h1> Hoai-An Phan</h1>
        <h5> Full-stack Software Engineer</h5>
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