import React from 'react'
import bannerImg from '../../assets/banner1.jpg';

const Banner1 = () => {
  return (
    <div className='container-fluid col-xl-9 col-lg-11 mb-5'>
        <img src={bannerImg} alt="" class="w-100" height="300px" />
    </div>
  )
}

export default Banner1