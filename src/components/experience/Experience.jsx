import React from 'react'

// Experience with 4 most recent jobs
const Experience = () => {
  return (
    <section id='experience' class="mt-5">
      <br /><br />
      <h5 class="text-center">What I Did</h5>
      <h2 class="text-center">My Experience</h2>
      <p class="text-center">See Resume for more details</p>
      <p class="text-center">
        <button type="button" class="btn btn-light bg-navy me-1 text-light-blue">
          <a href="https://hoaian-personal-website.s3.us-west-1.amazonaws.com/HOAI-AN+PHAN+Full+Resume.pdf" rel="noopener noreferrer" target="_blank">Download Resume</a>
        </button>
      </p>

      <div>
        <div class="container py-3">
          <div class="main-timeline">
            <div class="timeline left">
              <div class="border shadow bg-navy border-navy pt-3">
                <div class="card-body py-3">
                  <h5 class="text-light-blue">Aug 2022 - May 2023</h5>
                  <h4>Lyft Inc.</h4>
                  <p>Software Engineer T1 and T2 (Fulfillment Team - Rider App)</p>
                  <p>Worked as a server engineer, building and shipping the waiting experience using Python, Flask, AWS, Protocol Buffers, Grafana, ElasticSearch,...</p>
                </div>

              </div>
            </div>
            <div class="timeline right">
              <div class="border shadow bg-navy border-navy pt-3">
                <div class="card-body py-3">
                  <h5 class="text-light-blue">Feb 2022 - Apr 2022</h5>
                  <h4>HackBright Academy</h4>
                  <p>Software Engineering Fellowship</p>
                  <p>Built and deployed three full-stack web applications using skills and knowledge across fundamentals of data structures, algorithms, testing, and database programming.
                    Collaborated with colleagues on pair-programming assignments include building databases, testing, and utilizing APIs.</p>
                </div>
              </div>
            </div>
            <div class="timeline left">
              <div class="border shadow bg-navy border-navy pt-3">
                <div class="card-body py-3">
                  <h5 class="text-light-blue">Nov 2017 - Jun 2021</h5>
                  <h4>Standard Chartered Bank, US</h4>
                  <p>Sanctions Filtering Associate</p>
                  <p>Stopped illegal financial activities by identifying and investigating matches related to sanctioned countries, money laundering, and terrorist financing using policy awareness and Transaction Screening software.</p>
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