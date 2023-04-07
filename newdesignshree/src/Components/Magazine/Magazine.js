import React from "react";
import "./Magazine.css";
import magImg from "../../assets/magazine1.jpg";


const Magazine = () => {
    const data =[{
        title:'Luxurys New Address: Shree Surat',
        img:require("../../assets/magazine2.jpg"),
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
        title:'Shree Wedding PlayList 2023',
        img:require("../../assets/magazine3.jpg"),
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
        title:'The Sherwani ShowCase',
        img:require("../../assets/magazine4.jpg"),
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing',
    },


]
  return (
    <div className="container-fluid col-xl-9 col-lg-11 magazineBody position-relative " >
        <h1 className="position-absolute titleMag" style={{top:'-35px',right:'45%'}}>Magazine</h1>
        <button type="submit" class="btn position-absolute readBtn" style={{bottom:'-20px',right:'45%'}}>Read More</button>
      <div class="row">
        <div class="col-lg-5 p-5">
          <img src={magImg} alt="" class="w-100" />
        </div>
        <div class="col-lg-7 p-5" >
            {data.map((res)=>{
            return(
            <div class="card mb-3" style={{border:'none',backgroundColor:'transparent'}}>
                <div class="row g-0">
                <div class="col-md-3">
                    <img src={res.img} class="img-fluid " alt="..."  />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title magTitle">{res.title}</h5>
                    <p class="card-text magDesc">
                       {res.description}
                    </p>
                    <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            );
        })}
        </div>
      </div>
     
    </div>
  );
};

export default Magazine;
