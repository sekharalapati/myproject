import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
// import './Navbar.css'; // Make sure to import your CSS file

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="Navbar">
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='NavBarList'>
        <ul className="NavList">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li 
            className="dropdown" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            <button className="dropdown-button">
              Courses
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/courses/RCA">RCA</Link></li>
                <li><Link to="/courses/hpc">HPC</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
