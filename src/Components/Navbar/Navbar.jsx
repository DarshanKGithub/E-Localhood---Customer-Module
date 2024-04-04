import React from 'react';
import './Navbar.css';
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
        <div className='search-box'>
            <input type='text' placeholder='Search your products & services'></input>
            <FaSearch className='search-icon'/>
        </div>
      
   
  )
}

export default Navbar;
