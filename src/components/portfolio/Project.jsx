import React from 'react'
import ImageCarousel from './ImageCarousel'

const Project = (props) => {

  return (
    <div className="card h-100 text-center">
      <div className="card-header pt-4 text-light-blue">
        {props.header}
      </div>
      <img src={props.image} className="card-img-top p-4" alt="project_1"></img>
      <div className="card-body">
        <h4 className="card-title p-4 pt-0 m-1 text-center">{props.title} </h4>
        <h6 className="card-subtitle mb-2">{props.subtitle}</h6>
        <div className="card-text pt-4 m-1">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header " id="headingOne">
                <button className="accordion-button accordion-bg collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOne" + props.id} aria-expanded="false" aria-controls="collapseOne">
                  Technologies
                </button>
              </h2>
              <div id={"collapseOne" + props.id} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body accordion-content">
                  {props.technologies}
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button accordion-bg collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseTwo" + props.id} aria-expanded="false" aria-controls="collapseTwo">
                    Highlighted features
                  </button>
                </h2>
                <div id={"collapseTwo" + props.id} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body accordion-content">
                    {props.features}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5 m-1 mb-4 text-center ">
            <button type="button" className="btn btn-light bg-peach me-2 text-light-blue" data-bs-toggle="modal" data-bs-target={"#exampleModal" + props.id} data-bs-local="carouselExampleCaptions">
              Quick demo
            </button>
            <button type="button" className="btn btn-light bg-navy me-1 text-live">
              <a id="live-demo" href={props.liveDemo} target="_blank" rel="noreferrer">Live Demo</a>
            </button>
            <br /> <br />

            <button type="button" className="btn btn-light bg-light-blue border border-white mx-1">
              <a href={props.github} target="_blank" rel="noreferrer">GitHub</a>
            </button>
          </div>
        </div>

        <div className="card-footer text-muted">
          {props.footer}
        </div>
      </div>

      <div className="modal fade" id={"exampleModal" + props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-peach">
              <h5 className="modal-title text-light-blue" id="exampleModalLabel">{props.title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body bg-navy">
              <ImageCarousel images={props.carousel} />
            </div>
            <div className="modal-footer bg-peach">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Project