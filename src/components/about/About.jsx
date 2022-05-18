import React from 'react'
import me from '../../assets/me_about.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>I'm thrilled to tell you</h5>
      <h2> About Me</h2>

      <div>
        <div>
          <div>
            <img src={me} alt="About me" />
          </div>
        </div>

        <div>
          <div>
            <article>
              <h4>Who I Am</h4>
                <ul>
                  <li>An aspiring full-stack software engineer</li>
                  <li>A lifetime learner of technologies</li>
                  <li>A proud mom of my wonderful toddler</li>
                </ul>
              
            </article>
          </div>
        </div>

        <div>
          <div>
            <article>
              <h4>What I Do</h4>
                <ul>
                  <li>Deliver solutions that excite customers </li>
                  <li>Use software to solve non-software problems </li>
                  <li>Create and design with passion</li>
                </ul>
            </article>
          </div>
        </div>

        <div>
          <div>
            <article>
              <h4>What I Believe</h4>
                <ul>
                  <li>I believe in self-motivation and determination</li>
                  <li>I believe in the power of constructive feedback</li>
                  <li>I believe in getting things done </li>
                </ul>
            </article>
          </div>
        </div>

        <div>
          <div>
            <article>
              <h4>How I Grow</h4>
                <ul>
                  <li>I accept and get comfortable with the unknowns</li>
                  <li>I get excited about learning new things</li>
                  <li>I ask questions. For me, it's the best way to learn and grow</li>
                </ul>
            </article>
          </div>
        </div>

      </div>



    </section>
  )
}

export default About