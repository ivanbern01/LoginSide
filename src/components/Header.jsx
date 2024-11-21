import React from 'react';
import './LoginPage.css';

const Header = () => {
  return (
    <div className="header">
      <img src="/cvsu.png" alt="CvSU Logo" className="logo" />
      <div className="university-title">
        <h1 className="header-title">CAVITE STATE UNIVERSITY</h1>
        <h2 className="header-subtitle">BACOOR CAMPUS</h2>
      </div>
    </div>
  );
};

export default Header;
