import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav class="navbar navbar-light" style={{ "background-color": "#2c3e50" }}>
      <header className="App-header">
        <h1 className="App-title">CELP</h1>
      </header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>

  )
}

export default Navigation;