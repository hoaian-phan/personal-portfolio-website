import React from 'react'
import Typewriter from "typewriter-effect"

const Intro = () => {
  return (
    <div>
        <Typewriter 
        onInit={(typewriter) => {
        typewriter
        .typeString('<strong><span style="font-size:25px;">The Programmer •  Developer  •  Problem-solver</span></strong>')
        .start();
        
        }}
        />

    </div>
  )
}

export default Intro