import React from 'react'
import me from '../../assets/me_about.jpg'

// About me with photo and 4 value pillars
const About = () => {
  return (
    <section id='about' className="mt-5">
      <br /><br />
      <h5 className="text-center">I'm excited to tell you</h5>
      <h2 className="text-center"> About Me</h2>

      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-xxl-4 text-center">
            <img src={me} className="img-thumbnail resize-photo" id="about_img" alt="About me" />
          </div>

          <div className="col-12 col-xxl-4">
            <div className="row d-flex align-items-center justify-content-center">
              <article className="my-card pt-3 m-4 fix-width">
                <h4 className="text-center">Who I Am</h4>
                <ul>
                  <li>An early career full-stack software engineer</li>
                  <li>A lifetime learner of technologies</li>
                  <li>A proud mom of my wonderful preschooler</li>
                </ul>
              </article>

              <article className="my-card pt-3 fix-width">
                <h4 className="text-center">What I Do</h4>
                <ul>
                  <li>Deliver solutions that excite customers </li>
                  <li>Use software to solve non-software problems </li>
                  <li>Create and design with passion</li>
                </ul>
              </article>
            </div>
          </div>


          <div className="col-12 col-xxl-4">
            <div className="row d-flex align-items-center justify-content-center">
              <article className="my-card pt-3 m-4 fix-width">
                <h4 className="text-center">What I Believe</h4>
                <ul>
                  <li>I believe in self-motivation &#38; determination</li>
                  <li>I believe in the power of constructive feedback</li>
                  <li>I believe in getting things done </li>
                </ul>
              </article>


              <article className="my-card pt-3 fix-width">
                <h4 className="text-center">How I Learn</h4>
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