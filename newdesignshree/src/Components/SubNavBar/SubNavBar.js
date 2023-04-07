import React, { useState } from "react";
import DesignerNav from "../DesignerNav/DesignerNav";
import "./SubNavBar.css";

const SubNavBar = () => {
  const [Show, setShow] = useState(false)
  return (
    <>
      <nav class="navbar subnavbar navbar-expand-lg p-0">
        <div class="container-fluid col-xl-9 col-lg-11">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div class="navbar-nav d-flex justify-content-between w-100">
              <a class="nav-link active" aria-current="page" href="#">
                New
              </a>
              <a class="nav-link" href="#" onMouseEnter={() => setShow(true)}>
                Designers
              </a>
              <a class="nav-link" href="#">
                Women
              </a>
              <a class="nav-link" href="#">
                Jewellery
              </a>
              <a class="nav-link" href="#">
                Accessories
              </a>
              <a class="nav-link" href="#">
                Wedding
              </a>
              <a class="nav-link" href="#">
                Men
              </a>{" "}
              <a class="nav-link" href="#">
                Kids
              </a>
              <a class="nav-link" href="#">
                Ready to Ship
              </a>
              <a class="nav-link" href="#">
                Style Bazar
              </a>
              <a class="nav-link" href="#">
                Sale
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className={`designNav ${Show ? 'd-block' : 'd-none'}`} style={{boxShadow:'2px 2px 5px  #d1d5db'}} onMouseLeave={()=> setShow(false)}>
        <DesignerNav />
      </div>
    </>
  );
};

export default SubNavBar;
