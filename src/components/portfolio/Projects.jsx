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

const data = [
  {
    id: 1,
    image: playdate,
    header: "Capstone Project",
    title: "Playdate Birdies",
    subtitle: "A social media for parents to host and find outdoor activities and playdates for their kids.",
    technologies: ["Python", "Flask", "PostgreSQL", "JavaScript", "HTML", "Bootstrap", "CSS", "Google Map APIs", "AWS"],
    features: ["Search", "Host", "Invite friends to events", "Following hosts", "Receive email reminders", "View events in calendar", "Recommend playdates based on users' interests."],
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
    subtitle: "A career page where applicants can find the company's information and apply for a job",
    technologies: ["Python", "Flask", "React", "JavaScript", "HTML", "ReactBootstrap", "CSS", "internal APIs"],
    features: ["About", "Values", "Mission", "Team members", "Jobs", "Apply for a job"],
    website: "",
    github: "https://github.com/hoaian-phan/career-page",
    liveDemo: "",
    footer: "July 2022",
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
    ]
  },
]

const Projects = () => {

  const myProjects = [];

  for (const myProject of data) {
    myProjects.push(
      <Project
        key={myProject.id}
        image={myProject.image}
        header={myProject.header}
        title={myProject.title}
        subtitle={myProject.subtitle}
        technologies={myProject.technologies}
        features={myProject.features}
        website={myProject.website}
        github={myProject.github}
        liveDemo={myProject.liveDemo}
        footer={myProject.footer}
        carousel={myProject.carousel}
      />

    )
  }
  return (
    <section id='portfolio' class="mt-5">
      <br /><br />
      <h6 class="text-center">What I Created</h6>
      <h2 class="text-center pb-4">My Projects</h2>

      <div class="grid">{myProjects}</div>
    </section>
  )
}

export default Projects