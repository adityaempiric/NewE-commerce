import React from "react";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";

const HomeCarousel = () => {
  return (
    <div class="container-fluid col-xl-9 col-lg-11">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img4} class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
