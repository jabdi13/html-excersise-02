import React from 'react';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="SocialNetwork">
        <ul>
          <li>
            <i className="fa fa-twitter"></i>
          </li>
          <li>
            <i className="fa fa-facebook"></i>
          </li>
          <li>
            <i className="fa fa-whatsapp"></i>
          </li>
          <li>
            <i className="fa fa-youtube"></i>
          </li>
        </ul>
      </div>
      <small>&copy; 2012 Todos los derechos reservados</small>
    </div>
  );
};

export default Footer;