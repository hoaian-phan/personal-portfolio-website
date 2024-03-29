import React from 'react'
import search from '../../assets/playdatebirdies.jpg'
import host from '../../assets/host.jpg'
import invite from '../../assets/invite.jpg'
import recommend from '../../assets/recommend.jpg'
import results from '../../assets/search_results.jpg'
import calendar from '../../assets/calendar.jpg'
import register from '../../assets/register.jpg'
import playdate from '../../assets/playdate-birdies-project.jpg'
import Project from './Project'
import career from '../../assets/career-page.jpg'
import banner from '../../assets/banner.jpg'
import form from '../../assets/form-validation.jpg'
import jobs from '../../assets/jobs.jpg'
import members from '../../assets/members.jpg'
import teach from '../../assets/ttt_image.jpg'
import home from '../../assets/ttt_homepage.jpg'
import color_1 from '../../assets/ttt_color-1.jpg'
import color_2 from '../../assets/ttt_color-2.jpg'
import animal_1 from '../../assets/ttt_animal.jpg'
import animal_2 from '../../assets/ttt_animal-2.jpg'
import fruit from '../../assets/ttt_fruit.jpg'
import ttt_error from '../../assets/ttt_error.jpg'


const data = [
  {
    id: 1,
    image: playdate,
    header: "Capstone Project",
    title: "Playdate Birdies",
    subtitle: "A social media for parents to host and find outdoor activities and playdates for their kids.",
    technologies: ["Python * Flask * PostgreSQL * JavaScript * HTML * Bootstrap * CSS * Google Map APIs * AWS"],
    features: ["Search * Host * Invite friends to events * Following hosts * Receive email reminders * View events in calendar * Recommend playdates based on users' interests."],
    website: "http://playdatebirdies.com/",
    github: "https://github.com/hoaian-phan/project-playdate-birdies",
    liveDemo: "https://www.youtube.com/watch?v=u-X1LhxQtec",
    footer: "April 2022",
    carousel: [
      {
        id: 1,
        image: search,
        feature: "Search feature",
        description: "Users can perform a search for a playdate by one or multiple parameters such as city or zipcode, date, age group, and/or activities. This searching feature is implemented by query chains in SQLAlchemy to the PostgreSQL database.",
      },
      {
        id: 2,
        image: results,
        feature: "Search results",
        description: "Search results show playdate details with location markers on the map as well as user's location (if granted permission). I implemented this page using Google Maps APIs to display map, location markers and user's location. Result details are shown by DOM manipulation in JavaScript.",
      },
      {
        id: 3,
        image: host,
        feature: "Hosting feature",
        description: "After host fills in the form with the help of address autocompletion, the event will be created and saved in PostgreSQL database. Host also has an option to receive email reminders about their events.",
      },
      {
        id: 4,
        image: register,
        feature: "Register feature",
        description: "REACT page with updates of who's coming to the playdate and option to receive email reminder. Email feature was implemented by Flask-Mail and Sendgrid API and reminders are scheduled using Celery.",
      },
      {
        id: 5,
        image: invite,
        feature: "Invite feature",
        description: "Hosts and participants can invite friends to join their events. An email with the event registration link will be sent to selected friends and they can register if interested.",
      },
      {
        id: 6,
        image: calendar,
        feature: "Event calendar",
        description: "Users can view their playdates in calendar. If users cancel their events, the calendar will automatically update the changes. I implemented this calendar by using FullCalendar in JavaScript.",
      },
      {
        id: 7,
        image: recommend,
        feature: "Recommend feature",
        description: "This is my favorite back-end feature. First, I queried future events based on users' interests and applied a scoring algorithm. Finally, I used lambda functions to sort events by descending scores and ascending dates, and displayed them in that order.",
      },
    ]
  },
  {
    id: 2,
    image: career,
    header: "Personal Project",
    title: "Career Page",
    subtitle: "A career page where applicants can find the company's information and apply for a job.",
    technologies: ["Python * Flask * React * JavaScript * HTML * ReactBootstrap * CSS * Internal APIs"],
    features: ["About * Values * Mission * Team members * Jobs * Apply for a job * Form input validation"],
    website: "https://github.com/hoaian-phan/career-page",
    github: "https://github.com/hoaian-phan/career-page",
    liveDemo: "https://github.com/hoaian-phan/career-page",
    footer: "July 2022",
    carousel: [
      {
        id: 1,
        image: banner,
        feature: "Banner",
        description: "Banner to introduce the company's product, with embedded Youtube video, fully responsive by different screen sizes.",
      },
      {
        id: 2,
        image: members,
        feature: "Team members",
        description: "When loading the page, fetch data from server to get team members' information as JSON and display as cards in grid layout.",
      },
      {
        id: 3,
        image: jobs,
        feature: "Open positions",
        description: "When loading the page, fetch data from server to get open positions and display as a list where each job is highlighted on mouse hovering.",
      },
      {
        id: 4,
        image: form,
        feature: "Apply with validated form",
        description: "When the Apply button is clicked, a modal is open with a form. Inputs are validated before sending a post request to the server to save the application to the database.",
      },
    ]
  },
  {
    id: 3,
    image: teach,
    header: "Personal Project",
    title: "Teach Tod Talk",
    subtitle: "A learning web app for parents to teach their toddlers to talk and recognize colors and items.",
    technologies: ["Python * Flask * JavaScript * HTML * Bootstrap * CSS * Web Speech APIs * Images from Unsplash"],
    features: ["Customize lessons * Speech recognition * Display items "],
    website: "https://github.com/hoaian-phan/teach-tod-talk",
    github: "https://github.com/hoaian-phan/teach-tod-talk",
    liveDemo: "https://youtu.be/XAPaK-BOFpo",
    footer: "July 2022",
    carousel: [
      {
        id: 1,
        image: home,
        feature: "Customize lessons",
        description: "Users can build a lesson plan by choosing a category, a number of words and a level of difficulty that they want to teach their kids.",
      },
      {
        id: 2,
        image: color_1,
        feature: "Recognize colors",
        description: "Using Web Speech API, the app listens to the words and if they are recognized and in the lesson, the background of the screen will be changed to the corresponding color.",
      },
      {
        id: 3,
        image: animal_1,
        feature: "Recognize animals",
        description: "Similarly, if the kid says the name of an animal correctly, the image of that animal will be displayed on the screen.",
      },
      {
        id: 4,
        image: fruit,
        feature: "Recognize fruits",
        description: "In the same way, a fruit will be shown when its name is called.",
      },
      {
        id: 5,
        image: ttt_error,
        feature: "Display error message",
        description: "If the spoken words are not found in the lesson, or no sound is picked up, there will be a message printed on screen.",
      },
    ]
  }
]

const Projects = () => {

  const myProjects = [];

  for (const myProject of data) {
    myProjects.push(
      <Project
        id={myProject.id}
        image={myProject.image}
        header={myProject.header}
        title={myProject.title}
        subtitle={myProject.subtitle}
        technologies={myProject.technologies}
        features={myProject.features}
        github={myProject.github}
        liveDemo={myProject.liveDemo}
        footer={myProject.footer}
        carousel={myProject.carousel}
      />

    )
  }
  return (
    <section id='portfolio' className="my-5">
      <br /><br />
      <h5 className="text-center">What I Created</h5>
      <h2 className="text-center pb-4">My Projects</h2>

      <div className="grid">{myProjects}</div>
    </section>
  )
}

export default Projects