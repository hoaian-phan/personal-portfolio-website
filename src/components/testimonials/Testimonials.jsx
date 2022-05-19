import React from 'react'
import avatar from '../../assets/me_park.JPEG'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>What others think about me and my work</h5>
      <h2> Testimonials</h2>

      <div>
        <article>
          <div>
            <img src={avatar} alt="avatar" />
          </div>
          <h5>Na Phan</h5>
            <small>
              A smart learner
            </small>
        </article>
      </div>


    </section>
  )
}

export default Testimonials