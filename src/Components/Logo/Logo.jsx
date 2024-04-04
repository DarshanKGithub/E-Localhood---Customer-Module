import React from 'react';
import './Logo.css';
// import { RxCrossCircled } from "react-icons/rx";
// import logo from './Asselocalhoodlogo';

function Logo() {
  return (
    <div className='logo-img'>
        <img src={require ('./elocalhoodlogo.jpg')}  alt='logo not found'/>
        <div>
      {/* <RxCrossCircled className='pop-cross' /> */}
        </div>
    </div>

    
  )
}

export default Logo
