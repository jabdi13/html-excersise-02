import React from 'react';
import '../styles/components/Header.css';
import Menu from './Menu';

const Header = () => {
  return (
    <div className="Header-container">
      <div className="Header-title">
        <h1>Ejercicio Web</h1>
        <h2>Página creada con HTML5</h2>
      </div>
      <Menu />
    </div>
  );
};

export default Header;