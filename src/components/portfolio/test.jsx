import React from 'react'

const test = () => {
  return (
    <div>test</div>
  )
}

export default test

// import React from 'react'
// import search from '../../assets/playdatebirdies.jpg'
// import host from '../../assets/host.jpg'
// import invite from '../../assets/invite.jpg'
// import recommend from '../../assets/recommend.jpg'
// import results from '../../assets/search_results.jpg'
// import calendar from '../../assets/calendar.jpg'
// import register from '../../assets/register.jpg'
// import playdate from '../../assets/playdate-birdies-project.jpg'

// // const data = [
// //   {
// //     id: 1,
// //     image: playdate,
// //     header: "Capstone Project",
// //     title: "Playdate Birdies",
// //     subtitle: "A social media website for parents and guardians to host and find outdoor activities and playdates for their kids.",
// //     technologies: ["Python", "Flask", "PostgreSQL", "JavaScript", "HTML", "Bootstrap", "CSS", "Google Map APIs", "AWS"],
// //     features: ["Search", "Host", "Invite friends to events", "Following hosts", "Receive email reminders", "View events in calendar", "Recommend playdates based on users' interests."],
// //     website: "http://playdatebirdies.com/",
// //     github: "https://github.com/hoaian-phan/project-playdate-birdies",
// //     liveDemo: "https://www.youtube.com/watch?v=u-X1LhxQtec",
// //     footer: "April 2022",
// //     carousel: [
// //       {
// //         id: 1,
// //         image: search,
// //         feature: "Search feature",
// //         description: "Users can perform a search for a playdate by one or multiple parameters such as city or zipcode, date, age group, and/or activities. This searching feature is implemented by query chains in SQLAlchemy to the PostgreSQL database.",
// //       },
// //       {
// //         id: 2,
// //         image: results,
// //         feature: "Search results",
// //         description: "Search results show playdate details with location markers on the map as well as user's location (if granted permission). I implemented this page using Google Maps APIs to display map, location markers and user's location. Result details are shown by DOM manipulation in JavaScript.",
// //       },
// //       {
// //         id: 3,
// //         image: host,
// //         feature: "Hosting feature",
// //         description: "After host fills in the form with the help of address autocompletion, the event will be created and saved in PostgreSQL database. Host also has an option to receive email reminders about their events.",
// //       },
// //       {
// //         id: 4,
// //         image: register,
// //         feature: "Register feature",
// //         description: "REACT page with updates of who's coming to the playdate and option to receive email reminder. Email feature was implemented by Flask-Mail and Sendgrid API and reminders are scheduled using Celery.",
// //       },
// //       {
// //         id: 5,
// //         image: invite,
// //         feature: "Invite feature",
// //         description: "Hosts and participants can invite friends to join their events. An email with the event registration link will be sent to selected friends and they can register if interested.",
// //       },
// //       {
// //         id: 6,
// //         image: calendar,
// //         feature: "Event calendar",
// //         description: "Users can view their playdates in calendar. If users cancel their events, the calendar will automatically update the changes. I implemented this calendar by using FullCalendar in JavaScript.",
// //       },
// //       {
// //         id: 7,
// //         image: recommend,
// //         feature: "Recommend feature",
// //         description: "This is my favorite back-end feature. First, I queried future events based on users' interests and applied a scoring algorithm. Finally, I used lambda functions to sort events by descending scores and ascending dates, and displayed them in that order.",
// //       },
// //     ]
// //   }
// // ]


// // const Portfolio = () => {
// //   return (
// //     <section id='portfolio' class="mt-5">
// //       <br /><br />
// //       <h6 class="text-center">What I Created</h6>
// //       <h2 class="text-center">My Projects</h2>

// //       <div class="container my-5">
// //         <div class="row ">
// //           <div class="col">
// //             {
// //               data.map(({id, image, header, title, subtitle, technologies, features, website, github, liveDemo, footer, carousel}) => {
// //                 return (
// //                   <div key={id} class="card h-100 text-center">
// //                     <div class="card-header pt-4 text-light-blue">
// //                       {header}
// //                     </div>
// //                     <img src={image} class="card-img-top p-4" alt="project_1"></img>
// //                     <div class="card-body">
// //                       <h4 class="card-title p-4 pt-0 m-1 text-center">{title} </h4>
// //                       <h6 class="card-subtitle mb-2">{subtitle}</h6>
// //                       <div class="card-text pt-4 m-1"> 
// //                         <div class="accordion" id="accordionExample">
// //                           <div class="accordion-item">
// //                             <h2 class="accordion-header " id="headingOne">
// //                               <button class="accordion-button accordion-bg" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
// //                                 Technologies
// //                               </button>
// //                             </h2>
// //                             <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
// //                               <div class="accordion-body accordion-content">
// //                                 {technologies}
// //                               </div>
// //                             </div>

// //                           <div class="accordion-item">
// //                             <h2 class="accordion-header" id="headingTwo">
// //                               <button class="accordion-button accordion-bg collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
// //                                 Highlighted features
// //                               </button>
// //                             </h2>
// //                             <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
// //                               <div class="accordion-body accordion-content">
// //                                 {features}
// //                               </div>
// //                             </div>
// //                           </div>
                        
            
            
// //                         <div class="pt-5 m-1 mb-4 text-center ">
// //                           <button type="button" class="btn btn-light bg-peach me-2 text-light-blue" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-local="carouselExampleCaptions">
// //                             Quick demo
// //                           </button>
// //                           <button type="button" class="btn btn-light bg-navy me-1 text-live">
// //                             <a id="live-demo" href={liveDemo} target="_blank" rel="noreferrer">Live Demo</a>
// //                           </button>

// //                           <button type="button" class="btn btn-light bg-light-blue border border-white mx-1">
// //                             <a href={github} target="_blank" rel="noreferrer">GitHub</a>
// //                           </button>

// //                           <button type="button" class="btn btn-light bg-navy ms-1">
// //                             <a href={website} target="_blank" rel="noreferrer">Visit</a>
// //                           </button>
// //                         </div>
// //                       </div>
// //                         <div class="card-footer text-muted">
// //                           {footer}
// //                         </div>
// //                     </div>
// //                   </div>

// //                   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
// //             <div class="modal-dialog">
// //               <div class="modal-content">
// //                 <div class="modal-header bg-peach">
// //                   <h5 class="modal-title text-light-blue" id="exampleModalLabel">Playdate Birdies</h5>
// //                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
// //                 </div>
// //                 <div class="modal-body bg-navy">
          
// //               <div id="carouselExampleCaptions" class="carousel slide carousel-fit" data-bs-ride="carousel">
          
// //                 {/* <ol class="carousel-indicators">
// //                   <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></li>
// //                   <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></li>
// //                   <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></li>
// //                   <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></li>
// //                   <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></li>
// //                   <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></li>
// //                   <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></li>
// //                 </ol> */}

// //                 <div class="carousel-inner p-2">
// //                   <div class="carousel-item active">
// //                     <img src={search} class="img-fluid portfolio-photo rounded mx-auto d-block" alt="search_feature"></img>
// //                     <div class="carousel-caption">
// //                       <h5 class="text-light-blue">Search feature</h5>
// //                       <p class="text-start">Users can perform a search for a playdate by one or multiple parameters such as city or zipcode, date, age group, and/or activities. This searching feature is implemented by query chains in SQLAlchemy to the PostgreSQL database.</p>
// //                     </div>
// //                   </div>
                
// //                   <div class="carousel-item pb-3">
// //                     <img src={results} class="img-fluid portfolio-photo rounded mx-auto d-block" alt="results"></img>
// //                     <div class="carousel-caption">
// //                       <h5 class="text-light-blue">Search results</h5>
// //                       <p class="text-start">Search results show playdate details with location markers on the map as well as user's location (if granted permission). I implemented this page using Google Maps APIs to display map, location markers and user's location. Result details are shown by DOM manipulation in JavaScript.</p>
// //                     </div>
// //                   </div>
                  
// //                   <div class="carousel-item pb-3">
// //                     <img src={host} class="img-fluid portfolio-photo rounded mx-auto d-block" alt="host_feature"></img>
// //                     <div class="carousel-caption ">
// //                       <h5 class="text-light-blue">Hosting feature</h5>
// //                       <p class="text-start">After host fills in the form with the help of address autocompletion, the event will be created and saved in PostgreSQL database. Host also has an option to receive email reminders about their events.</p>
// //                     </div>
// //                   </div>

// //                   <div class="carousel-item pb-3">
// //                     <img src={register} class="img-fluid portfolio-photo rounded mx-auto d-block" alt="register_feature"></img>
// //                     <div class="carousel-caption ">
// //                       <h5 class="text-light-blue">Register feature</h5>
// //                       <p class="text-start">REACT page with updates of who's coming to the playdate and option to receive email reminder. Email feature was implemented by Flask-Mail and Sendgrid API and reminders are scheduled using Celery.</p>
// //                     </div>
// //                   </div>

// //                   <div class="carousel-item pb-3">
// //                     <img src={invite} class="img-fluid portfolio-photo rounded mx-auto d-block" alt="invite_feature"></img>
// //                     <div class="carousel-caption ">
// //                       <h5 class="text-light-blue">Invite feature</h5>
// //                       <p class="text-start">Hosts and participants can invite friends to join their events. An email with the event registration link will be sent to selected friends and they can register if interested.</p>
// //                     </div>
// //                   </div>

// //                   <div class="carousel-item pb-3">
// //                     <img src={calendar} class="img-fluid portfolio-photo rounded mx-auto d-block" alt="calendar_feature"></img>
// //                     <div class="carousel-caption ">
// //                       <h5 class="text-light-blue">Event calendar</h5>
// //                       <p class="text-start">Users can view their playdates in calendar. If users cancel their events, the calendar will automatically update the changes. I implemented this calendar by using FullCalendar in JavaScript.</p>
// //                     </div>
// //                   </div>

// //                   <div class="carousel-item pb-3">
// //                     <img src={recommend} class="img-fluid portfolio-photo rounded mx-auto d-block" alt="recommend_feature"></img>
// //                     <div class="carousel-caption ">
// //                       <h5 class="text-light-blue">Recommend feature</h5>
// //                       <p class="text-start">This is my favorite back-end feature. First, I queried future events based on users' interests and applied a scoring algorithm. Finally, I used lambda functions to sort events by descending scores and ascending dates, and displayed them in that order.</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
// //                   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
// //                   <span class="visually-hidden">Previous</span>
// //                 </button>
// //                 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
// //                   <span class="carousel-control-next-icon" aria-hidden="true"></span>
// //                   <span class="visually-hidden">Next</span>
// //                 </button> */}
// //                 <div class="modal-footer">
// //                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
// //                     Close
// //                   </button>
                
// //                 </div>
// //             </div>
// //           </div>
// //       </div>
      
// //     </div>
// //                 )
// //               })

// //             }
            
          
          
// //     </div>
// //   </div>
// // </div>
// //     </section>
// //   )
// // }

// export default Portfolio