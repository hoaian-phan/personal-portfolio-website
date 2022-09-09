import React from 'react'

// Experience with 4 most recent jobs
const Experience = () => {
  return (
    <section id='experience' class="mt-5">
      <br /><br />
      <h5 class="text-center">What I Did</h5>
      <h2 class="text-center">My Experience</h2>
      <p class="text-center">See Resume for more details</p>

      <div>
        <div class="container py-3">
          <div class="main-timeline">
            <div class="timeline left">
              <div class="border shadow bg-navy border-navy pt-3">
                <div class="card-body py-3">
                  <h5 class="text-light-blue">Aug 2022 - present</h5>
                  <h4>Lyft</h4>
                  <p>Software Engineering Apprentice</p>
                  <p>Working in the Fulfillment team in Rideshare Organization, Rider App to improve riders' experience. </p>
                </div>
              </div>
            </div>
            <div class="timeline right">
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
            <div class="timeline left">
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


          </div>
        </div>
      </div>



    </section>
  )
}

export default Experience