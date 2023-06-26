import React from 'react'

// Skills with 3 categories: languages, frameworks and tools
const Skills = () => {
  return (
    <section id='skills' className="my-5">
      <br /><br />
      <h5 className="text-center"> What I Know</h5>
      <h2 className="text-center">My Technical Skills</h2>

      <div className="container my-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="my-card col-10 col-sm-12 col-lg-3 pt-3 m-4">
            <h4 className="text-center">Languages</h4>
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



          <div className="my-card col-10 col-sm-12 col-lg-3 pt-3 m-4">
            <h4 className="text-center">Libraries and Frameworks</h4>
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



          <div className="my-card col-10 col-sm-12 col-lg-3 pt-3 m-4">
            <h4 className="text-center">Industry Tools</h4>
            <div>
              <ul>
                <li>Git / GitHub</li>
                <li>Shell </li>
                <li>Docker</li>
                <li>REST APIs</li>
                <li>JSON / Protobuf</li>
                <li>AWS Cloud</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills