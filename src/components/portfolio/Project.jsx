import React from 'react'
import ImageCarousel from './ImageCarousel'

const Project = (props) => {

  return (
    <div class="card h-100 text-center">
      <div class="card-header pt-4 text-light-blue">
        {props.header}
      </div>
      <img src={props.image} class="card-img-top p-4" alt="project_1"></img>
      <div class="card-body">
        <h4 class="card-title p-4 pt-0 m-1 text-center">{props.title} </h4>
        <h6 class="card-subtitle mb-2">{props.subtitle}</h6>
        <div class="card-text pt-4 m-1">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header " id="headingOne">
                <button class="accordion-button accordion-bg collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOne" + props.id} aria-expanded="false" aria-controls="collapseOne">
                  Technologies
                </button>
              </h2>
              <div id={"collapseOne" + props.id} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body accordion-content">
                  {props.technologies}
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button accordion-bg collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseTwo" + props.id} aria-expanded="false" aria-controls="collapseTwo">
                    Highlighted features
                  </button>
                </h2>
                <div id={"collapseTwo" + props.id} class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body accordion-content">
                    {props.features}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-5 m-1 mb-4 text-center ">
            <button type="button" class="btn btn-light bg-peach me-2 text-light-blue" data-bs-toggle="modal" data-bs-target={"#exampleModal" + props.id} data-bs-local="carouselExampleCaptions">
              Quick demo
            </button>
            <button type="button" class="btn btn-light bg-navy me-1 text-live">
              <a id="live-demo" href={props.liveDemo} target="_blank" rel="noreferrer">Live Demo</a>
            </button>
            <br /> <br />

            <button type="button" class="btn btn-light bg-light-blue border border-white mx-1">
              <a href={props.github} target="_blank" rel="noreferrer">GitHub</a>
            </button>
          </div>
        </div>

        <div class="card-footer text-muted">
          {props.footer}
        </div>
      </div>

      <div class="modal fade" id={"exampleModal" + props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-peach">
              <h5 class="modal-title text-light-blue" id="exampleModalLabel">{props.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-navy">
              <ImageCarousel images={props.carousel} />
            </div>
            <div class="modal-footer bg-peach">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
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