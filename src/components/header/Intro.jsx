import React from 'react'
import Typewriter from "typewriter-effect"

const Intro = () => {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('<strong><span style="font-size:25px;">The Problem-solver •  UX innovator •  Product engineer</span></strong>')
            .start();

        }}
      />

    </div>
  )
}

export default Intro