import React from "react";
import Img from "../../assets/Logoo.png";
import "./NavBar.css";
import CountryCurrencyDropDown from "../CountryCurrencyDropDown/CountryCurrencyDropDown";
import { Link, NavLink } from "react-router-dom";
import SubNavBar from "../SubNavBar/SubNavBar";

const NavBar = () => {
  return (
    <>
      <nav class="navbar mainNav">
        <div class="container-fluid col-xl-9 col-lg-11 d-flex justify-content-between">
          <div class="col-3 d-flex align-items-center">
            <img src={Img} alt="" class="" width={"60px"} />
            <CountryCurrencyDropDown />
          </div>
          <div class="col-6">
            <form class="d-flex" role="search">
              <input
                class="form-control srcText me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn srcBtn" type="submit">
                Search
              </button>
            </form>
          </div>
          <div class="col-3 d-flex justify-content-center">
            <Link className="btn userBtn">
              <i class="fa-regular fa-user"></i>
            </Link>
            <Link className="btn userBtn">
            <i class="fa-regular fa-heart"></i>
            </Link>
            <Link className="btn userBtn">
            <i class="fa-solid fa-cart-shopping"></i>
            </Link>
            <Link className="btn userBtn">
            <i class="fa-brands fa-whatsapp"></i>
            </Link>
          </div>
        </div>
      </nav>
        <SubNavBar/>
    </>
  );
};

export default NavBar;
