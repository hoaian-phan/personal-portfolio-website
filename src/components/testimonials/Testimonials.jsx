import React from 'react'

// Incomplete as waiting for real testimonials
const Testimonials = () => {
  return (
    <section id='testimonials' class="mt-5">
      <br /><br />
      <h6 class="text-center">What others think about me and my skills</h6>
      <h2 class="text-center"> Testimonials</h2>

      
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        
        <div class="carousel-indicators m-5">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div class="carousel-inner d-flex justify-content-around pb-5">
          <div class="carousel-item active">
            <div>
              <div class="border shadow bg-navy border-navy p-4 m-4 fix-width testimonial d-none d-md-block">
                <p>An was one of those rare students who constantly reminded me why I went back to teaching in the first place. Her problem-solving ability and dedication to learning are incredible. She came into Hackbright Academy with some knowledge of basic Python and JavaScript syntax, and by the end of the course she had designed a sophisticated recommendation algorithm and taught herself Celery in less than a day. Her capstone project, Playdate Birdies, is one of the most impressive projects I have seen in nearly a year at Hackbright. An has the intelligence and passion to go really far as a software engineer.</p>
                <h5>Steve Chait</h5>
                <h6>Software Engineering Instructor at Hackbright Academy</h6>
              </div>
            </div>
          </div>

          {/* <div class="carousel-item">
            <div class="border shadow bg-navy border-navy p-4 m-4 fix-width testimonial d-none d-md-block">
              <p>An was one of those rare students who constantly reminded me why I went back to teaching in the first place. Her problem-solving ability and dedication to learning are incredible. She came into Hackbright Academy with some knowledge of basic Python and JavaScript syntax, and by the end of the course she had designed a sophisticated recommendation algorithm and taught herself Celery in less than a day. Her capstone project, Playdate Birdies, is one of the most impressive projects I have seen in nearly a year at Hackbright. An has the intelligence and passion to go really far as a software engineer.</p>
              <h5>Jocelyn Tang</h5>
              <h6>Software Engineering Instructor at Hackbright Academy</h6>
            </div>
          </div>

          <div class="carousel-item">
            <div class="border shadow bg-navy border-navy p-4 m-4 fix-width testimonial d-none d-md-block">
              <p>An was one of those rare students who constantly reminded me why I went back to teaching in the first place. Her problem-solving ability and dedication to learning are incredible. She came into Hackbright Academy with some knowledge of basic Python and JavaScript syntax, and by the end of the course she had designed a sophisticated recommendation algorithm and taught herself Celery in less than a day. Her capstone project, Playdate Birdies, is one of the most impressive projects I have seen in nearly a year at Hackbright. An has the intelligence and passion to go really far as a software engineer.</p>
              <h5>Cindy Hazelton</h5>
              <h6>Software Engineering Instructor at Hackbright Academy</h6>
            </div>
          </div> */}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>

      </div>

    </section>
  )
}

export default Testimonials