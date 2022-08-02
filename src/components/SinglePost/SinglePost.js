import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { images } from '../../images'

const SinglePost = () => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={images.shirt1}/>
            <Card.Body>
                <Card.Title>T-shirt For Men</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="warning">Add to Cart</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default SinglePost