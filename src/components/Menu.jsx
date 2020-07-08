import React from 'react';
import '../styles/components/Menu.css';

const Menu = () => {
  return (
    <div className="Navbar">
      <ul>
        <li className="Active">Home</li>
        <li>Acerca de</li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
};

export default Menu;