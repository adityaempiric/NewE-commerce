import React from "react";
import PopularStyleCard from "../PopularStyleCard/PopularStyleCard";

const PopularCardModel = () => {
  return (
    <div className="">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
                <div class="col-lg-3">
                     <PopularStyleCard />  
                </div>
                <div class="col-lg-3">
                     <PopularStyleCard />  
                </div>
                <div class="col-lg-3">
                     <PopularStyleCard />  
                </div>
                <div class="col-lg-3">
                     <PopularStyleCard />  
                </div>  
            </div>
          </div>
          {/* <div class="carousel-item ">
            <PopularStyleCard />
          </div>
          <div class="carousel-item ">
            <PopularStyleCard /> */}
          {/* </div> */}
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
    </div>
  );
};

export default PopularCardModel;
