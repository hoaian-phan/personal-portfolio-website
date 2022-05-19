import React from 'react'
import me from '../../assets/me_about.jpg'

const About = () => {
  return (
    <section id='about' class="mt-5">
      <h6 class="text-center">I'm excited to tell you</h6>
      <h2 class="text-center"> About Me</h2>

      <div class="m-5">
        
          <div>
            <img src={me} class="img-thumbnail resize-photo" alt="About me" />
          </div>
        

        <div class="container">
          <div class="d-inline p-5">
            <article class="border shadow bg-navy border-navy pt-3 pt-2">
              <h5 class="text-center">Who I Am</h5>
                <ul>
                  <li>An aspiring full-stack software engineer</li>
                  <li>A lifetime learner of technologies</li>
                  <li>A proud mom of my wonderful toddler</li>
                </ul>
            </article>
            
          </div>
          <div class="d-inline p-2">
            <article class="border shadow bg-navy border-navy pt-3 pt-2">
              <h5 class="text-center">What I Do</h5>
                <ul>
                  <li>Deliver solutions that excite customers </li>
                  <li>Use software to solve non-software problems </li>
                  <li>Create and design with passion</li>
                </ul>
            </article>
          </div>
        </div>

        <div class="container">
          <div class="d-inline p-2">
            <article class="border shadow bg-navy border-navy pt-3 pt-2">
              <h5 class="text-center">What I Believe</h5>
                <ul>
                  <li>I believe in self-motivation and determination</li>
                  <li>I believe in the power of constructive feedback</li>
                  <li>I believe in getting things done </li>
                </ul>
            </article>
          </div>

          <div class="d-inline p-2">
            <article class="border shadow bg-navy border-navy pt-3 pt-2">
              <h5 class="text-center">How I Learn</h5>
                <ul>
                  <li>I accept and get comfortable with the unknowns</li>
                  <li>I get excited about learning new things</li>
                  <li>I ask questions. It's the best way to learn and grow</li>
                </ul>
            </article>
          </div>
        </div>
      </div>



    </section>
  )
}

export default About