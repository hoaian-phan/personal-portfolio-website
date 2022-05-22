import React from 'react'
import img from '../../assets/playdatebirdies.png'

const Portfolio = () => {
  return (
    <section id='portfolio' class="mt-5">
      <br /><br />
      <h6 class="text-center">What I Created</h6>
      <h2 class="text-center">My Portfolio</h2>

      <div class="container my-4">
      <div class="row d-flex align-items-center justify-content-center">
          <div class="col-8 col-md-6 col-lg-4 col-xxl-3 border shadow bg-navy border-navy pt-3 m-3">
        
            <div class="text-center">
              <img src={img} class="portfolio-photo border" alt="playdate birdies"/>
            </div>

            <h5 class="pt-3 m-1 text-center">Playdate Birdies Web Application</h5>
            <p class="pt-3 m-1 text-center">Technologies: &nbsp; Python &nbsp; • &nbsp; Flask &nbsp;•&nbsp; PostgreSQL &nbsp;•&nbsp; JavaScript &nbsp;•&nbsp; HTML &nbsp;•&nbsp;
             Bootstrap &nbsp;•&nbsp; CSS &nbsp;•&nbsp; Google Map APIs &nbsp;•&nbsp; Sendgrid APIs &nbsp;•&nbsp; AWS </p>
            
            <div class="pt-3 m-1 mb-4 text-center">
            <button type="button" class="btn btn-light bg-navy me-1 text-live">
              <a id="live-demo" href="https://www.youtube.com/watch?v=u-X1LhxQtec" target="_blank" rel="noreferrer">Live Demo</a>
            </button>

            <button type="button" class="btn btn-light bg-light-blue border border-white mx-1">
              <a href="https://github.com/hoaian-phan/project-playdate-birdies" target="_blank" rel="noreferrer">GitHub</a>
            </button>

            <button type="button" class="btn btn-light bg-navy ms-1">
              <a href="http://playdatebirdies.com/" target="_blank" rel="noreferrer">Visit</a>
              </button>
            </div>
          </div>
        
        
          </div>
      </div>



    </section>
  )
}

export default Portfolio