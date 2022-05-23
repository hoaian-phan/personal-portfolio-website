import React from 'react'

// Experience with 4 most recent jobs
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
                    <p>Built and deployed a web app using skills and knowledge across fundamentals of data structures, algorithms, testing, full-stack, and database programming.
                      Collaborated on pair-programming assignments with cohort colleagues - daily lab projects include building databases, testing, and utilizing APIs.</p>
                  </div>
                </div>
              </div>
              <div class="timeline right">
                <div class="border shadow bg-navy border-navy pt-3">
                  <div class="card-body py-3">
                  <h5 class="text-light-blue">November 2017 - June 2021</h5>
                  <h4>Standard Chartered Bank, US</h4>
                  <p>Sanctions Filtering Associate</p>
                  <p>Identified and investigated possible matches related to sanctioned parties and countries, money laundering, and terrorist financing using Fircosoft for Transaction Screening and analytical skills. 
                    Increased average productivity of the team by personally exceeding 140% daily target transactions with 100% level of accuracy.</p>
                  </div>
                </div>
              </div>
              <div class="timeline left">
                <div class="border shadow bg-navy border-navy pt-3">
                  <div class="card-body py-3">
                  <h5 class="text-light-blue">March 2014 - March 2016</h5>
                  <h4>Masan Consumer Corporation</h4>
                  <p>Executive Assistant</p>
                  <p>Arranged and managed CEO’s internal and external meeting calendar, as well as nationwide and regional travel schedule using time management, flexibility to adapt to unforeseeable changes, problem-solving and quick decision-making skills.
                    Coordinated across various stakeholders to assist CEO in business operation to ensure alignment between company strategic directions and departmental execution using leadership, business acumen, and personable communication skills.</p>
                  </div>
                </div>
              </div>
              <div class="timeline right">
                <div class="border shadow bg-navy border-navy pt-3">
                  <div class="card-body py-3">
                  <h5 class="text-light-blue">April 2011 - December 2013</h5>
                  <h4>EQuest Academy</h4>
                  <p>Academic Course Facilitator</p>
                  <p>Assisted Academic Manager in curriculum building, material selection, and self-service library management. 
                    Improved teacher qualification by recruiting teachers and providing training workshops.
                    Taught interactive communication and test preparation courses (TOEFL, IELTS, SAT, GMAT).</p>
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