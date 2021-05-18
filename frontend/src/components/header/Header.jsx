import React from 'react';
import '../../style/header/Header.css';
import logo from '../../image/Header/headerlogo.png';



function Header() {
  return (
    <div className="header">
      <header className="App-header">
          <img src={logo} alt="header logo" className="header-logo"/>
      </header>
    </div>
  );
}

export default Header;
