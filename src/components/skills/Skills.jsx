import React from 'react'

// Skills with 3 categories: languages, frameworks and tools
const Skills = () => {
  return (
    <section id='skills' class="mt-5">
      <br /><br />
      <h6 class="text-center"> What I Know</h6>
      <h2 class="text-center">My Technical Skills</h2>

      <div class="container my-5">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="card col-6 col-sm-6 col-lg-3 bg-navy pt-3 m-4">
            <h5 class="text-center">Languages</h5>
            <div>
              <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>C++</li>
                <li>SQL</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        

        
          <div class="card col-6 col-sm-6 col-lg-3 bg-navy  pt-3 m-4">
            <h5 class="text-center">Libraries and Frameworks</h5>
            <div>
              <ul>
                <li>Flask</li>
                <li>SQLAlchemy</li>
                <li>React</li>
                <li>Jinja</li>
                <li>Bootstrap</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        

        
          <div class="card col-6 col-sm-6 col-lg-3 bg-navy pt-3 m-4">
            <h5 class="text-center">Industry Tools</h5>
            <div>
              <ul>
                <li>Git / GitHub</li>
                <li>Shell </li>
                <li>Docker</li>
                <li>Redis</li>
                <li>AWS Cloud</li>
                <li>Heroku</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills