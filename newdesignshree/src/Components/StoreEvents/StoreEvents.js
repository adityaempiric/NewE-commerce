import React from 'react';
import './StoreEvents.css';
import img from '../../assets/store.jpg';

const StoreEvents = () => {
  return (
    <div className='eventBody p-5 mb-4'>
        <div class="container-fluid col-xl-9 col-lg-11">
            <div class="row">
                <div class="col-lg-3">
                <img src={img} alt="" class="" width='300px' height="300px"/>
                </div>
                <div class="col-lg-4" style={{borderRight:'1px dashed grey'}}> 
                    <h2 className='mb-5' style={{fontFamily:'myNewFont'}}>Store Events</h2>
                    <p class="" style={{fontFamily:'myNewFont'}}>Know what’s new at our flagship stores</p>
                    <p class=""style={{fontFamily:'myNewFont'}}>Shree-Textile Surat</p>
                    <p class=""style={{fontFamily:'myNewFont'}}>Leave us your contact details and get your exclusive invite to store launches, collection previews and special curations.</p>
                </div>
                <div class="col-lg-4">
                <h2 className='mb-5' style={{fontFamily:'myNewFont'}}>Get Invited</h2>
                <input type="text" name=""  class="inputText mb-4" placeholder='Full Name' />
                <input type="text" name=""  class="inputText mb-4" placeholder='Contact' />
                <input type="text" name=""  class="inputText mb-4" placeholder='City'/>
                  
                  <button type="submit" class="btn readBtn">Submit</button>

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default StoreEvents