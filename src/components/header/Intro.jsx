import React from 'react'
import Typewriter from "typewriter-effect"

const Intro = () => {
  return (
    <div>
        <Typewriter
        onInit={(typewriter) => {
        typewriter
        .pauseFor(800)
        .typeString("The Programmer •  Developer  •  Problem-solver")
        .start();
        
        }}
        />

    </div>
  )
}

export default Intro