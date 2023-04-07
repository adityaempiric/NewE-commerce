import React from 'react';
import './CountryCurrencyDropDown.css';

const CountryCurrencyDropDown = () => {
  return (
    <>
        <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle ms-4 dropDownTitle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                // style={{backgroundColor:'white', color:'black', border:'none'}}
              >
                India (₹)
              </button>
              <ul class="dropdown-menu">
                <input type="text" name=""  class="m-2" />
                <li>
                  <a class="dropdown-item" href="#">
                    USA ($)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    AUD ($)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
    </>
  )
}

export default CountryCurrencyDropDown