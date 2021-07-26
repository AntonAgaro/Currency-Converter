import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = props => {
  return (
    <div className="container">
      <nav className="NavBar">
        <h1 className="nav-title">Конвентер валют</h1>
        <div className="nav-items">
          <NavLink className="nav-item" activeClassName="nav-item--active" to="/" exact>Конвентировать валюту</NavLink>
          <NavLink className="nav-item" activeClassName="nav-item--active" to="/courses">Курсы валют</NavLink>
        </div>
        </nav>
    </div>
  )
}

export default NavBar;