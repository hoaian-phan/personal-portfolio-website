import React from 'react'
import { Carousel } from 'react-bootstrap'

const ImageCarousel = (props) => {
  const carouselImages = props.images;
  console.log(carouselImages);
  return (
    <Carousel>
      {carouselImages.map(({id, image, feature, description}) => {
          return (
      <Carousel.Item key={id}>
        <img
          className="pt-3 d-block w-100 img-fluid portfolio-photo"
          src={image}
          alt={feature}
        />
        <Carousel.Caption>
          <h3>{feature}</h3>
          <p>{description}</p>
        </Carousel.Caption>
      </Carousel.Item>
          )})}
    </Carousel>
  )
}

export default ImageCarousel