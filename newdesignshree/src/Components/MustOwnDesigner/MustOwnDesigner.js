import React from 'react';
import DesignerCarousel from '../DesignerCarousel/DesignerCarousel';
import './MustOwnDesigner.css';

const MustOwnDesigner = () => {
  return (
    <div className='container-fluid col-xl-9 col-lg-11 mb-5'>
        <div>
            <p className="designerTitle">Must Own Designer</p>
        </div>
        <div class="">
            <DesignerCarousel/>
        </div>
    </div>
  )
}

export default MustOwnDesigner