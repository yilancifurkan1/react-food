import React from 'react'


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom'


export default function FoodCard(props) {
  const{ yemek } = props
  return (
    <>
    <Card className='mb-3'>
        <Card.Img variant="top" src={yemek.images} className='responsive-image'/>
    <Card.Body>
            <Card.Title>{yemek.name}</Card.Title>
            <Card.Text>{yemek.bilgi}</Card.Text>
            <Link to={`/yemekler/${yemek.id}`}>
                <Button variant="primary">Tarif İçin Tıklayınız</Button>
            </Link>
            
    </Card.Body>
</Card>
</>
  )
}
