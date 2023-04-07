import React from "react";
import img from "../../assets/9.jpg";
import img2 from "../../assets/10.jpg";

import img3 from "../../assets/11.jpg";
import img4 from '../../assets/12.jpg';
import img5 from '../../assets/13.jpg';

import img6 from '../../assets/14.jpg';



import Card from "react-bootstrap/Card";
import "./WhatsNew.css";

const WhatsNew = () => {
  return (
    <div className="container-fluid col-xl-9 col-lg-11 mb-4">
      <div>
        <img src={img} alt="" class="mb-4 w-100" />
      </div>

      <div class="row">
        <div class="col-6">
          <Card style={{ border: "none" }}>
            <Card.Img variant="top" src={img2} className="whatsImg" />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title className="whatsTitle">Gopi Vaid</Card.Title>
              <Card.Text className="whatsText">
                <p>Ajiesh Oberoi, Rishi & Vibhuti & more</p>
              </Card.Text>
              <p className="whatsText">Shop Now</p>
            </Card.Body>
          </Card>
        </div>
        <div class="col-6">
          <Card style={{ border: "none" }}>
            <Card.Img variant="top" src={img3} className="whatsImg" />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title className="whatsTitle">Card Title</Card.Title>
              <Card.Text className="whatsText">
                <p className="">Timeless & versatile accessories to own</p>
              </Card.Text>
              <p className="whatsText">Shop Now</p>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4">
          <Card style={{ border: "none" }}>
            <Card.Img variant="top" src={img4} className="whatsImg"  />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title className="whatsTitle">Card Title</Card.Title>
              <Card.Text className="whatsText">
              Timeless & versatile accessories to own
              </Card.Text>
              <p className="whatsText">Shop Now</p>
            </Card.Body>
          </Card>
        </div>
        <div class="col-lg-4">
          <Card style={{ border: "none" }}>
            <Card.Img variant="top" src={img5} className="whatsImg"  />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title className="whatsTitle">Card Title</Card.Title>
              <Card.Text className="whatsText">
              Ajiesh Oberoi, Rishi & Vibhuti & more
              </Card.Text>
              <p className="whatsText">Shop Now</p>
            </Card.Body>
          </Card>
        </div>
        <div class="col-lg-4">
          <Card style={{ border: "none" }}>
            <Card.Img variant="top" src={img6} className="whatsImg"  />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title className="whatsTitle">Card Title</Card.Title>
              <Card.Text className="whatsText">
              Swabhimann Jewellery, Joules By Radhika & more
              </Card.Text>
              <p className="whatsText">Shop Now</p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
