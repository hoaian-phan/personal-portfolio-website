import React, {useState} from 'react'

const Project = (props) => {
  // Handle show Quick Demo as a modal
  const [show, setShow] = useState(false);
  const handleClose = () => {
		setShow(false);
	}
	const handleShow = () => setShow(true);

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
                <button class="accordion-button accordion-bg collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  Technologies
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body accordion-content">
                  {props.technologies}
                </div>
              </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button accordion-bg collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Highlighted features
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body accordion-content">
                  {props.features}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-5 m-1 mb-4 text-center ">
          <button type="button" class="btn btn-light bg-peach me-2 text-light-blue" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-local="carouselExampleCaptions">
            Quick demo
          </button>
          <button type="button" class="btn btn-light bg-navy me-1 text-live">
            <a id="live-demo" href={props.liveDemo} target="_blank" rel="noreferrer">Live Demo</a>
          </button>
          <br /> <br />

          <button type="button" class="btn btn-light bg-light-blue border border-white mx-1">
            <a href={props.github} target="_blank" rel="noreferrer">GitHub</a>
          </button>

          <button type="button" class="btn btn-light bg-navy ms-1">
            <a href={props.website} target="_blank" rel="noreferrer">Visit</a>
          </button>
        </div>
      </div>
      
      <div class="card-footer text-muted">
        {props.footer}
      </div>
    </div>
  </div>

  
  )
}

export default Project