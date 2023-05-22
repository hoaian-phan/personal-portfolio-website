import React from 'react'
import steve from '../../assets/steve.jpg'
import jocelyn from '../../assets/jocelyn.jpg'
import cindy from '../../assets/cindy.jpg'
import joyaan from '../../assets/joyaan.jpg'
import megan from '../../assets/megan.jpg'
import doug from '../../assets/doug.jpg'
import Carousel from 'react-bootstrap/Carousel'
import 'animate.css'

const data = [
  {
    id: 1,
    image: megan,
    name: "Megan Chen",
    title: "Software Engineer",
    company: "Lyft",
    review: "I worked with An closely for close to a year as her mentor and teammate and can confidently say An is an all-rounder engineer who is capable of tremendous growth and impact. She shipped two high impact projects during her time at Lyft, onboarding quickly and taking complete ownership over not only her features, but over the consistency of the entire post-request experience.\n An dives deep, leaving no stone unturned, and collaborating strongly all the while. She is great at deeply understanding the problem, succinctly proposing solutions and deadlines, collecting feedback cross team and cross functionally, synthesizing that feedback to action items, and then strongly and promptly executing while keeping an eye towards long term impact and follow up work. I could not recommend An more for anyone looking to hire a junior eng with amazing follow through and abundant potential to grow.",
  },
  {
    id: 2,
    image: doug,
    name: "Doug Liebe, PhD",
    title: "Data Scientist",
    company: "Lyft",
    review: "An is an extremely hard worker who exemplified 'all-in ownership' during our time together at Lyft. She started as an apprentice and quickly worked to learn the ins and outs of the business, soon providing sharp considerations at team meetings. Her main strength was her ability to clearly define problems and potential next steps, always leading to faster execution than I expected of her. An never shies away from a challenge, choosing to own her projects and fill in gaps in her knowledge whenever possible. I heard many people, some with years of service at Lyft, say that An was the best apprentice Lyft had ever had - and I see why!",
  },
  {
    id: 3,
    image: joyaan,
    name: "Joyaan Bhesania",
    title: "Software Engineer",
    company: "Lyft",
    review: "In only a few months, An has shown incredible skill and growth as a developer. She represents the core tenets of what make a good software engineer: curious, analytical, and persistent. She has readily taken on many challenges within her projects to build new and unfamiliar features where no one that supported her knew how to solve the problem. She has been successful every time and tackles these problems with the mindset to learn. The results of these strong attributes in An are evident in the quality of each project she builds, most noticeably her incredible Playdate Birdies project that goes beyond expectations. Working with her, I have been particularly impresse by her organizational thinking and her ability to explain and debug.",
  },
  {
    id: 4,
    image: steve,
    name: "Steve Chait",
    title: "Software Engineering Instructor",
    company: "Hackbright Academy",
    review: "An was one of those rare students who constantly reminded me why I went back to teaching in the first place. Her problem-solving ability and dedication to learning are incredible. She came into Hackbright Academy with some knowledge of basic Python and JavaScript syntax, and by the end of the course she had designed a sophisticated recommendation algorithm and taught herself Celery in less than a day. Her capstone project, Playdate Birdies, is one of the most impressive projects I have seen in nearly a year at Hackbright. An has the intelligence and passion to go really far as a software engineer.",
  },
  {
    id: 5,
    image: jocelyn,
    name: "Jocelyn Tang",
    title: "Software Engineering Instructor",
    company: "Hackbright Academy",
    review: "An is a self-motivated, curious, and compassionate learner. When learning new concepts, she isn't just content with understanding but also immediately thinks of applications and limitations, leading her to ask very interesting questions. During project season, she also impressed me with her ability to learn and incorporate new technologies in her project - she was even able to teach me a few things! When she did run into issues and asked for help, she was always able to explain her problem and her varied approaches to debug in specific ways. Furthermore, An is also someone who can work well under pressure and through extenuating circumstances - despite a challenging personal situation that arose during the bootcamp, she was able to complete her final project and demo and her project was chosen as one of the ones to showcase to everyone at graduation. Above all, even though she is extremely competent, An was always kind, patient, and appreciative, making her a pleasure to work with. I would highly recommend An for any role!",
  },
  {
    id: 6,
    image: cindy,
    name: "Cindy Hazelton",
    title: "SEI Bootcamps Career Coach",
    company: "Hackbright Academy",
    review: "I knew when I met An that she would be going places! Even with the responsibility as a mother with a small child, An was able to plan ahead and prepare so she could have the best experience as a learner.   I believe An is a natural born leader!  In many situations, she was named as being the person who helped another through solving a difficult problem, giving guidance and support. An has true grit and a tenacity like no other.  Many times was faced with adversity and overcame by quickly adapting and moving forward with solid planning skills.  An has self motivation and has the ability to motivate others as well.  She solves difficult problems with grace!  Sometimes even making it look easy!  I’m really excited to see An grow in a new role and career!  Where ever she lands, she will be an asset to the team and company!",
  },
]



const Testimonials = () => {
  return (
    <section id='testimonials' class="mt-5">
      <br /><br />
      <h5 class="text-center">What others think about me and my skills</h5>
      <h2 class="text-center"> Testimonials</h2>


      <div class="wrapper">
        <div class="container">
          <Carousel className="">
            {
              data.map(({ id, image, name, title, company, review }) => {
                return (
                  <Carousel.Item>
                    <img className="imgBox animate__animated"
                      src={image}
                      alt={name}
                    />
                    <Carousel.Caption className="carousel-caption animate__animated">
                      <h2>{name}</h2>
                      <h4>{title} - {company}</h4>
                      <p class="py-3 px-5">{review}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        </div>
      </div>

    </section>
  )
}

export default Testimonials