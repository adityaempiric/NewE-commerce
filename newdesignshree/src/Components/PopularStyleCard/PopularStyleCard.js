import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../../assets/5.jpg';
import './PopularStyleCard.css';

const PopularStyleCard = () => {
  return (
    <>
      <Card style={{ width: "18rem" }} className='popularCard mt-4'>
        <Card.Img variant="top" src={img} className='cardImg' />
        <Card.Body className="p-0">
          <Card.Title className="popularTitle mt-2">Card Title</Card.Title>
          <Card.Text className="popularText m-0">
           Puro Linen Bundi
          </Card.Text>
          <p className='m-0'>₹ 4299</p>
        </Card.Body>
      </Card>
    </>
  );
};

export default PopularStyleCard;
