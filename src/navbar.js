import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './navbar.module.css'

const NavBar = function () {
      return (
      <div className={Nav.container}>
          <p className={Nav.font}>Tic Tac Toe</p>
      </div>
    );
}

export default NavBar ; 