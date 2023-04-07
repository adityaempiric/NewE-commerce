import React from 'react';
import { Link } from 'react-router-dom';
import PopularCardModel from '../PopularCardModel/PopularCardModel';
import './PopularStyle.css';

const PopularStyle = () => {
  return (
    <div className='container-fluid col-xl-9 col-lg11 mb-4'>
        <div class="d-flex justify-content-between align-content-center mb-4">
            <span className='styleTitle'>Popular Style</span>
            <span className="viewText mt-2">View all</span>
        </div>

        <div class="">
            <Link className='btn popularBtn me-3'>All</Link>
            <Link className='btn popularBtn me-3'>Women</Link>

            <Link className='btn popularBtn me-3'>Men</Link>

            <Link className='btn popularBtn me-3'>Boys</Link>
            <Link className='btn popularBtn '>Girl</Link>


        </div>
        <div class="">
            <PopularCardModel/>
        </div>
    </div>
  )
}

export default PopularStyle