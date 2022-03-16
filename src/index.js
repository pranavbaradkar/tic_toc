import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './navbar'
import Tiles from './tiles'
ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <Tiles/>
  </React.StrictMode>,
  document.getElementById('root')
);

