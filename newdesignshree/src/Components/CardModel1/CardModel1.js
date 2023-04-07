import React from "react";
import img from "../../assets/1.jpg";
import Card from "react-bootstrap/Card";
import "./CardModel1.css";

const CardModel1 = () => {
  const data = [
    {
      title: "Sale",
      img: img,
    },
    {
      title: "Sale",
      img: require('../../assets/15.jpg'),
    },
    {
      title: "Sale",
      img: require('../../assets/16.jpg'),
    },
    {
      title: "Sale",
      img: require('../../assets/18.jpg'),
    },
    {
      title: "Sale",
      img: require('../../assets/19.jpg'),
    },
    {
      title: "Sale",
      img: img,
    },
  ];

  return (
    <div class="container-fluid d-flex justify-content-between col-xl-9 col-lg-11 mt-4 gap-3 cardModel">
      {data.map((res) => {
        return (
          <Card style={{ width: "15rem", border: "none" }} className=''>
            <Card.Img variant="top" src={res.img}  className="cardImg" />
            <Card.Body className="d-flex justify-content-center">
              <Card.Title className="cardTitle">{res.title}</Card.Title>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default CardModel1;
