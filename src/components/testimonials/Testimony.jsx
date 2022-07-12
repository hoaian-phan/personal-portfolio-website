import React from 'react'
import Card from 'react-bootstrap/Card'

const Testimony = (props) => {
  return (
    <Card className="card">
			<img className="image"
				src={props.image}
				alt={props.name} />
			<Card.Body>
				<Card.Title className="title text-center">
					{props.name} <br />
					<small>{props.title} - {props.company}</small>
				</Card.Title>
				<Card.Text className="text">
					{props.review}
				</Card.Text>
			</Card.Body>
		</Card>
  )
}

export default Testimony