import React from 'react'
import './Services.css';

const Services = () => {
  return (
    <div className='container-fluid col-xl-9 col-lg-11 mb-5' style={{backgroundColor:'#fcf3f1'}}>
        <div class="row p-3" >
            <div class="col-lg-4 d-flex flex-column justify-content-center align-items-center" style={{borderRight:'1px solid grey'}}>
            <i class="fa-regular fa-credit-card serviceIcon mb-2"></i>
            <p class="" style={{fontFamily:'myFirstFont'}}>100% Secure Payments COD Available</p>
            </div>
            <div class="col-lg-4 d-flex flex-column justify-content-center align-items-center" style={{borderRight:'1px solid grey'}}>
            <i class="fa-solid fa-box-open serviceIcon mb-2"></i>
            <p class="" style={{fontFamily:'myFirstFont'}}>Hassle free return policy</p>
            </div>
            <div class="col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <i class="fa-solid fa-truck serviceIcon mb-2"></i>
            <p class="" style={{fontFamily:'myFirstFont'}}>Free Shipping</p>
            </div>
        </div>
    </div>
  )
}

export default Services