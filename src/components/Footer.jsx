import React from 'react';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <div class="Footer">
      <div class="SocialNetwork">
        <ul>
          <li>
            <i class="fa fa-twitter"></i>
          </li>
          <li>
            <i class="fa fa-facebook"></i>
          </li>
          <li>
            <i class="fa fa-whatsapp"></i>
          </li>
          <li>
            <i class="fa fa-youtube"></i>
          </li>
        </ul>
      </div>
      <small>&copy; 2012 Todos los derechos reservados</small>
    </div>
  );
};

export default Footer;