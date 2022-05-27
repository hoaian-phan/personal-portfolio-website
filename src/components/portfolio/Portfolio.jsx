import React from 'react'
import search from '../../assets/playdatebirdies.jpg'
import host from '../../assets/host.jpg'
import invite from '../../assets/invite.jpg'
import recommend from '../../assets/recommend.jpg'
import results from '../../assets/search_results.jpg'
import calendar from '../../assets/calendar.jpg'
import register from '../../assets/register.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio' class="mt-5">
      <br /><br />
      <h6 class="text-center">What I Created</h6>
      <h2 class="text-center">My Capstone Project</h2>

      <div class="container my-5">
        <div class="row">
          <div class="col-12 col-xxl-4 text-center">
      
            <h5 class="pt-3 m-1 text-center">Playdate Birdies Web Application</h5>
            <p class="pt-3 m-1"> I built this web app for parents and guardians to host and find playdates for their kids. </p>
            <p class="pt-3 m-1 text-center">Technologies: &nbsp; Python &nbsp; • &nbsp; Flask &nbsp;•&nbsp; PostgreSQL &nbsp;•&nbsp; JavaScript &nbsp;•&nbsp; HTML  &nbsp;•&nbsp; 
            Bootstrap &nbsp;•&nbsp; CSS &nbsp;•&nbsp; Google Map APIs &nbsp;•&nbsp; Sendgrid APIs &nbsp;•&nbsp; AWS </p>
            <p class="pt-3 m-1 text-center">Highlighted features: &nbsp;&nbsp; Search  &nbsp; • &nbsp; Host  &nbsp; • &nbsp; Invite friends to events &nbsp; • &nbsp; Following hosts &nbsp; • &nbsp; Receive email reminders &nbsp; • &nbsp; View event in calendar &nbsp; • &nbsp; Recommend playdates based on users' interests. </p>
            
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

          <div class="col-12 col-xxl-8">
            <div id="carouselExampleCaptions" class="carousel slide ps-5" data-bs-ride="carousel">
        
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
              </div>

              <div class="carousel-inner justify-content-around">
                <div class="carousel-item active pb-5  ">
                  <img src={search} class="img-fluid portfolio-photo" alt="search_feature"></img>
                </div>
              
                <div class="carousel-item pb-5">
                  <img src={results} class="img-fluid portfolio-photo" alt="results"></img>
                </div>
                
                <div class="carousel-item pb-5">
                  <img src={host} class="img-fluid portfolio-photo" alt="host_feature"></img>
                </div>

                <div class="carousel-item pb-5">
                  <img src={register} class="img-fluid portfolio-photo" alt="register_feature"></img>
                </div>

                <div class="carousel-item pb-5">
                  <img src={invite} class="img-fluid portfolio-photo" alt="invite_feature"></img>
                </div>

                <div class="carousel-item pb-5">
                  <img src={calendar} class="img-fluid portfolio-photo" alt="calendar_feature"></img>
                </div>

                <div class="carousel-item pb-5">
                  <img src={recommend} class="img-fluid portfolio-photo" alt="recommend_feature"></img>
                </div>
                    
              </div>
          
            </div>
          </div>
      </div>
      
    </div>
    </section>
  )
}

export default Portfolio