import React from 'react'


const Contact = () => {
  return (
    <section id='contact' className="mt-5">
      <br /><br />
      <h5 className="text-center">Let's connect</h5>
      <h2 className="text-center">Contact Me</h2>

      <div className="container p-4">
        <form className="inner" target="_blank" action="https://formsubmit.co/hoaian.phan.sde2022@gmail.com" method="POST">
          <div className="form-group">
            <div className="form-row">
              <div className="col p-1">
                <input type="text" name="name" className="form-control contact-form" placeholder="Full Name" required />
              </div>
              <div className="col p-1">
                <input type="email" name="email" className="form-control contact-form" placeholder="Email Address" required />
              </div>
            </div>
          </div>
          <div className="col form-group p-1">
            <textarea placeholder="Your Message" className="form-control contact-form" name="message" rows="5" required></textarea>
          </div>
          <div className="text-center p-4">
            <button type="submit" className="btn btn-light bg-navy me-1 mt-3 text-light-blue">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact