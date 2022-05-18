import React from 'react'
import img from '../../assets/playdatebirdies.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>What I Created</h5>
      <h2>Portfolio</h2>

      <div>
        <article>
          <div>
            <div>
              <img src={img} alt="playdate birdies"/>
            </div>
            <h3>Playdate Birdies Web Application</h3>
            <p>Technologies: Python, Flask, JavaScript, HTML, Bootstrap, Google Map APIs, Sendgrid APIs, ASW Lightsail</p>
            <a href="https://www.youtube.com/watch?v=u-X1LhxQtec" target="_blank" rel="noreferrer">Live Demo</a>
            <a href="https://github.com/hoaian-phan/project-playdate-birdies" target="_blank" rel="noreferrer">GitHub</a>
            <a href="http://playdatebirdies.com/" target="_blank" rel="noreferrer">Visit the site</a>
          </div>
        </article>
      </div>



    </section>
  )
}

export default Portfolio