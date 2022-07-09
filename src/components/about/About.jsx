import React from 'react'
import me from '../../assets/me_about.jpg'

// About me with photo and 4 value pillars
const About = () => {
  return (
    <section id='about' class="mt-5">
      <br /><br />
      <h6 class="text-center">I'm excited to tell you</h6>
      <h2 class="text-center"> About Me</h2>

      <div class="container my-5">
        <div class="row">
          <div class="col-12 col-xxl-4">
            <div class="about-img-bg">
              <img src={me} class="img-thumbnail resize-photo" id="about_img" alt="About me" />
            </div>
          </div>

        
          <div class="col-12 col-xxl-4">
            <div class="row d-flex align-items-center justify-content-center">
              <article class="my-card bg-navy pt-3 m-4 fix-width">
                <h5 class="text-center">Who I Am</h5>
                  <ul>
                    <li>An aspiring full-stack software engineer</li>
                    <li>A lifetime learner of technologies</li>
                    <li>A proud mom of my wonderful toddler</li>
                  </ul>
              </article>
              
              <article class="my-card bg-navy pt-3 fix-width">
                <h5 class="text-center">What I Do</h5>
                  <ul>
                    <li>Deliver solutions that excite customers </li>
                    <li>Use software to solve non-software problems </li>
                    <li>Create and design with passion</li>
                  </ul>
              </article>
            </div>
          </div>
        

          <div class="col-12 col-xxl-4">
            <div class="row d-flex align-items-center justify-content-center">
              <article class="my-card bg-navy pt-3 m-4 fix-width">
              <h5 class="text-center">What I Believe</h5>
                <ul>
                  <li>I believe in self-motivation &#38; determination</li>
                  <li>I believe in the power of constructive feedback</li>
                  <li>I believe in getting things done </li>
                </ul>
              </article>
              

              <article class="my-card bg-navy pt-3 fix-width">
                <h5 class="text-center">How I Learn</h5>
                  <ul>
                    <li>I welcome challenges and the unknown</li>
                    <li>I get excited about learning new things</li>
                    <li>I ask questions. It's the best way to learn &#38; grow</li>
                  </ul>
              </article>
            </div>
          </div>
        </div>
      </div>



    </section>
  )
}

export default About