import React from 'react'

const Experience = () => {
  return (
    <section id='experience' class="mt-5">
    <br /><br />
      <h6 class="text-center">What I Did</h6>
      <h2 class="text-center">My Experience</h2>
      <p class="text-center"><small>See Resume for more details</small></p>

      <div>
          <div class="container py-3">
            <div class="main-timeline">
              <div class="timeline left">
                <div class="border shadow bg-navy border-navy pt-3">
                  <div class="card-body py-3">
                    <h5 class="text-light-blue">Feb 2022 - Apr 2022</h5>
                    <h4>HackBright Academy</h4>
                    <p>Software Engineering Fellowship</p>
                    <p>Collaborated on pair programming with cohortmates on daily lab projects. Built and deployed a web application on AWS using skills and knowledge across fundamentals of data structures, algorithms, database, full-stack and testing.</p>
                  </div>
                </div>
              </div>
              <div class="timeline right">
                <div class="border shadow bg-navy border-navy pt-3">
                  <div class="card-body py-3">
                  <h5 class="text-light-blue">November 2017 - June 2021</h5>
                  <h4>Standard Chartered Bank, US</h4>
                  <p>Sanctions Filtering Associate</p>
                  <p>Identified and investigated possible matches related to sanctioned parties and countries, money laundering and terrorist financing organizations.</p>
                  </div>
                </div>
              </div>
              <div class="timeline left">
                <div class="border shadow bg-navy border-navy pt-3">
                  <div class="card-body py-3">
                  <h5 class="text-light-blue">March 2014 - March 2016</h5>
                  <h4>Masan Consumer Corporation</h4>
                  <p>Executive Assistant</p>
                  <p>Arranged and managed CEO's meeting calendar. Coordinated across various stakeholders to assist CEO in business operation.</p>
                  </div>
                </div>
              </div>
              <div class="timeline right">
                <div class="border shadow bg-navy border-navy pt-3">
                  <div class="card-body py-3">
                  <h5 class="text-light-blue">April 2011 - December 2013</h5>
                  <h4>EQuest Academy</h4>
                  <p>Academic Course Facilitator</p>
                  <p>Built curriculum, recruited and trained English teachers.</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        

    </section>
  )
}

export default Experience