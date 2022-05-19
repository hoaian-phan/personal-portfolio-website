import React from 'react'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Let's connect</h5>
      <h2>Contact Me</h2>

      <div>
        <div>
          <article>
            <h4>Email</h4>
            <h5>hoaian.phan.sde2022@gmail.com</h5>
            <a href="mailto:hoaian.phan.sde2022@gmail.com">Send me an email</a>
          </article>
        </div><br />

        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required /><br />
          <input type="email" name="email" placeholder="Your Email" required /><br />
          <textarea name="message" rows="10" placeholder="Your Message" required /><br />
          <button type="submit">Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact