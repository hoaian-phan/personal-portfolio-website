import React from 'react'


const Contact = () => {
  return (
    <section id='contact' class="mt-5">
      <br /><br />
      <h6 class="text-center">Let's connect</h6>
      <h2 class="text-center">Contact Me</h2>

      <div class="container p-4">
        <form class="inner" target="_blank" action="https://formsubmit.co/hoaian.phan.sde2022@gmail.com" method="POST">
          <div class="form-group">
            <div class="form-row">
              <div class="col p-1">
                <input type="text" name="name" class="form-control contact-form" placeholder="Full Name" required />
              </div>
              <div class="col p-1">
                <input type="email" name="email" class="form-control contact-form" placeholder="Email Address" required />
              </div>
            </div>
          </div>
          <div class="col form-group p-1">
            <textarea placeholder="Your Message" class="form-control contact-form" name="message" rows="5" required></textarea>
          </div>
          <div class="text-center p-4">
            <button type="submit" class="btn btn-light bg-navy me-1 mt-3 text-light-blue">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact