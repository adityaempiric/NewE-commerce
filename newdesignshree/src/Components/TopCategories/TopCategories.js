import React from "react";
import { Link } from "react-router-dom";
import './TopCategories.css';

const TopCategories = () => {

    const data =[{
        cardTitle :'Lehenga Choli',
        cardImg:require("../../assets/lehenga-choli.jpg"),
    },
    {
        cardTitle :'Sarees',
        cardImg:require('../../assets/sarees.jpg'),
    },
    {
        cardTitle :'Kurti & Tunics',
        cardImg:require("../../assets/kurti-tunics.jpg"),
    },
    {
        cardTitle :'Gown',
        cardImg:require('../../assets/gown.jpg'),
    }]
  return (
    <>
   
    <div class="d-flex justify-content-center topTitle mb-2">
            Top Categories
        </div>
    <div className="container-fluid col-xl-9 col-lg-11 d-flex mb-5 gap-3">
        
        {data.map((res)=>{
            return(
                <Link style={{textDecoration:'none', color:'black'}}>
                <div class="card mb-3  categoryCard">
                <div class="row g-0">
                  <div class="col-md-5">
                    <img src={res.cardImg} class="img-fluid rounded-start topImg" alt="..." />
                  </div>
                  <div class="col-md-7 d-flex justify-content-center align-items-center">
                    <div class="card-body ">
                      <h5 class="card-title">{res.cardTitle}</h5>
                    
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            );
        })}
     
    </div>
    </>
  );
};

export default TopCategories;
