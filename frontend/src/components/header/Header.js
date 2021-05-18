import React from 'react';
import '../../style/header/Header.css';
import logo from '../../image/Header/headerlogo.png';



function Header() {
  return (
    <div className="header">
      <header className="App-header">
        <a
          className="header-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="header logo"/>
        </a>
      </header>
    </div>
  );
}

export default Header;
