import React from "react";
import './Blog.css';

const Blog = () => {
  const data = [{
    cardTitle :"CELEBRATE IN STYLE: CURATED EID FASHION FOR THE FASHION-FORWARD MAN ",
    metaData:"The magical chaand raat is nearing and the celebrations will soon be upon us.  With Eid festivitie",
    cardImg:require('../../assets/blog1.jpg'),
  },
  {
    cardTitle :"TOP 12 ICONIC DESIGNER GOWNS TO CATCH THE SPOTLIGHT ",
    metaData:"Choosing a designer gown that keeps you slaying and comfortable is not an easy task, right? Aza Fas",
    cardImg:require('../../assets/blog2.jpg'),
  },
  {
    cardTitle :"8 TIMELESS DESIGNER SHERWANIS TO CREATE A MEMORABLE LOOK",
    metaData:"A glimpse from the latest issue of Aza Magazine, we present you our favorite picks for designer she",
    cardImg:require('../../assets/blog3.jpg'),
  },
  {
    cardTitle :"STYLE SUSTAINABLY WITH CHRKHA’S NEW ARRIVAL DESIGNER COLLECTION ",
    metaData:"Fashion trends keep changing, and so should our wardrobe! Opting for sustainable clothes that are t",
    cardImg:require('../../assets/blog4.jpg'),
  }]
  return (
    <div className="container-fluid col-xl-9 col-lg-11 position-relative mb-4 text-center">
      <div class="d-flex flex-column justify-content-center text-center">
        <h2 class="blogTitle">Blog</h2>
        <p class="blogDesc">
          A curated set of blog articles from Aza’s in-house experts
        </p>
      </div>
     
    
      
      <div class="d-flex gap-3">
        {data.map((res)=>{
          return(
          <div class="card " style={{border:'none'}} >
            <img src={res.cardImg} class="card-img-top w-auto h-auto" alt="..." style={{borderRadius:'0%'}} />
            <div class="card-body p-0 mt-2">
              <h5 class="card-title cardTitle p-0">{res.cardTitle}</h5>
              <p class="card-text">
                {res.cardDescription}
              </p>
             
            </div>
          </div>
          );
        })}
      </div>
      <div class="d-flex justify-content-center mt-4">
        
        <button type="submit" class="btn  readBtn d-flex justify-content-center text-center" >Go to Blog</button>
      </div>
    </div>
  );
};

export default Blog;
