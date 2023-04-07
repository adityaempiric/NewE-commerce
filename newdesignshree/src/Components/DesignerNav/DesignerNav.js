import React from "react";
import { Link } from "react-router-dom";
import './DesignerNav.css';

const DesignerNav = () => {
  const data = [
    {
      title: "Kurti",
      img: require("../../assets/nav1.jpg"),
    },
    {
      title: "Kurti",
      img: require("../../assets/nav2.jpg"),
    },
    {
      title: "Kurti",
      img: require("../../assets/nav3.jpg"),
    },
  ];
  return (
    <div className="container-fluid col-xl-9 col-lg-11">
      <div class="row">
        <div class="col-2 d-flex flex-column navCol">
         
          <Link class="mb-2"style={{textDecoration:'none' , color:'black' , fontFamily:'myNewFont' , fontSize:'20px'}}>Jumpsuit</Link>
          <Link class="mb-2"style={{textDecoration:'none' , color:'black' , fontFamily:'myNewFont' , fontSize:'20px'}}>Dresses</Link>
          <Link class="mb-2"style={{textDecoration:'none' , color:'black' , fontFamily:'myNewFont' , fontSize:'20px'}}>Bottomwear</Link>
          <Link class="mb-2"style={{textDecoration:'none' , color:'black' , fontFamily:'myNewFont' , fontSize:'20px'}}>Tshirts</Link>
          <Link class="mb-2"style={{textDecoration:'none' , color:'black' , fontFamily:'myNewFont' , fontSize:'20px'}}>Tops</Link>
          <Link class="mb-2"style={{textDecoration:'none' , color:'black' , fontFamily:'myNewFont' , fontSize:'20px'}}>Winterwear</Link>
          <Link class="mb-2"style={{textDecoration:'none' , color:'black' , fontFamily:'myNewFont' , fontSize:'20px'}}>Sweatshirt</Link>
        </div>
        <div class="col-3">
            
        </div>
        <div class="col-7 d-flex gap-3">
          {data.map((res) => {
            return (
              <div class="card " style={{border:'none',borderRadius:'0%'}}>
                <img src={res.img} class="card-img-top" alt="..." style={{borderRadius:'0%'}} />
                <div class="card-body">
                  <p class="card-text text-center" style={{fontFamily:'myNewFont',fontSize:'20px'}}>
                   {res.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DesignerNav;
