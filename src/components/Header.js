import React from 'react';
import logo from '../assets/img/motogp.png';

const Header = () => (
  <div className="header">
    <div className="logo">
      <a href="/">
        <img src={logo} alt="MotoGP Logo" height="120px" width="120px" />
        <span className="info">MotoGP Team Info</span>
      </a>
    </div>
  </div>
);

export default Header;
