import React from "react";
import img from '../../assets/7.jpg';
import img2 from '../../assets/8.jpg';

const DesignerCarousel = () => {
  const data = [
    {
      img: require("../../assets/7.jpg"),
    },
    {
      img: require("../../assets/8.jpg"),
    },
    {
      img: require("../../assets/7.jpg"),
    },
  ];
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          {data.map((res) => {
            return (
              <div class="carousel-item active">
                <div class="row">
                    <div class="col-lg-3">
                     <img src={res.img} class="d-block" alt="..." />
                        
                    </div>
                    <div class="col-lg-3">
                     <img src={res.img} class="d-block" alt="..." />
                        
                    </div>
                    <div class="col-lg-3">
                     <img src={res.img} class="d-block" alt="..." />
                        
                    </div>
                    <div class="col-lg-3">
                     <img src={res.img} class="d-block" alt="..." />
                        
                    </div>

                </div>
              </div>
            );
          })}
    
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      
    </>
  );
};

export default DesignerCarousel;
