import React from 'react'
import steve from '../../assets/steve.jpg'
import jocelyn from '../../assets/jocelyn.jpg'
import cindy from '../../assets/cindy.jpg'
import joyaan from '../../assets/joyaan.jpg'
import Carousel from 'react-bootstrap/Carousel'
import 'animate.css'

const data = [
  {
    id: 1,
    image: steve,
    name: "Steve Chait",
    title: "Software Engineering Instructor",
    company: "Hackbright Academy",
    review: "An was one of those rare students who constantly reminded me why I went back to teaching in the first place. Her problem-solving ability and dedication to learning are incredible. She came into Hackbright Academy with some knowledge of basic Python and JavaScript syntax, and by the end of the course she had designed a sophisticated recommendation algorithm and taught herself Celery in less than a day. Her capstone project, Playdate Birdies, is one of the most impressive projects I have seen in nearly a year at Hackbright. An has the intelligence and passion to go really far as a software engineer.",
  },
  {
    id: 2,
    image: jocelyn,
    name: "Jocelyn Tang",
    title: "Software Engineering Instructor",
    company: "Hackbright Academy",
    review: "An is a self-motivated, curious, and compassionate learner. When learning new concepts, she isn't just content with understanding but also immediately thinks of applications and limitations, leading her to ask very interesting questions. During project season, she also impressed me with her ability to learn and incorporate new technologies in her project - she was even able to teach me a few things! When she did run into issues and asked for help, she was always able to explain her problem and her varied approaches to debug in specific ways. Furthermore, An is also someone who can work well under pressure and through extenuating circumstances - despite a challenging personal situation that arose during the bootcamp, she was able to complete her final project and demo and her project was chosen as one of the ones to showcase to everyone at graduation. Above all, even though she is extremely competent, An was always kind, patient, and appreciative, making her a pleasure to work with. I would highly recommend An for any role!",
  },
  {
    id: 3,
    image: cindy,
    name: "Cindy Hazelton",
    title: "SEI Bootcamps Career Coach",
    company: "Hackbright Academy",
    review: "I knew when I met An that she would be going places! Even with the responsibility as a mother with a small child, An was able to plan ahead and prepare so she could have the best experience as a learner.   I believe An is a natural born leader!  In many situations, she was named as being the person who helped another through solving a difficult problem, giving guidance and support. An has true grit and a tenacity like no other.  Many times was faced with adversity and overcame by quickly adapting and moving forward with solid planning skills.  An has self motivation and has the ability to motivate others as well.  She solves difficult problems with grace!  Sometimes even making it look easy!  I’m really excited to see An grow in a new role and career!  Where ever she lands, she will be an asset to the team and company!",
  },
  {
    id: 4,
    image: joyaan,
    name: "Joyaan Bhesania",
    title: "Software Engineer",
    company: "Lyft",
    review: "In only a few months, An has shown incredible skill and growth as a developer. She represents the core tenets of what make a good software engineer: curious, analytical, and persistent. She has readily taken on many challenges within her projects to build new and unfamiliar features where no one that supported her knew how to solve the problem. She has been successful every time and tackles these problems with the mindset to learn. The results of these strong attributes in An are evident in the quality of each project she builds, most noticeably her incredible Playdate Birdies project that goes beyond expectations. Working with her, I have been particularly impresse by her organizational thinking and her ability to explain and debug.",
  },
]



const Testimonials = () => {
  return (
    <section id='testimonials' class="mt-5">
      <br /><br />
      <h6 class="text-center">What others think about me and my skills</h6>
      <h2 class="text-center"> Testimonials</h2>
          
    
      <div class="wrapper">
        <div class="container">
          <Carousel className="">
            {
              data.map(({id, image, name, title, company, review}) => {
                return (
                  <Carousel.Item>
                    <img className="imgBox animate__animated animate__bounceInRight animate__delay-1s"
                      src={image} 
                      alt={name} 
                    />
                    <Carousel.Caption className="carousel-caption animate__animated animate__bounceInLeft animate__delay-2s">
                      <h2>{name}</h2>
                      <h4>{title} - {company}</h4>
                      <p class="py-3 px-5">{review}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
          
          {/* <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>

            <div class="carousel-inner">
              
                {
                  data.map(({id, image, name, title, company, review}) => {
                    return (
                      <div class="carousel-item">
                        <div class="imgBox animate__animated animate__bounceInRight animate__delay-1s">
                          <img src={image} alt={name} ></img>
                        </div>
                        <div class="carousel-caption animate__animated animate__bounceInLeft animate__delay-2s">
                          <h2>{name}</h2>
                          <h4>{title} - {company}</h4>
                          <p class="p-5">{review}</p>
                        </div>
                      </div>
                          )
                        })
                }
                
                  
            </div>
          
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button> */}

          </div>
        </div>
      
    </section>
  )
}

export default Testimonials