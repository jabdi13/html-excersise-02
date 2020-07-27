import React, { useState, useEffect } from 'react';
import '../styles/components/Menu.css';

const Menu = () => {

  const [count, setCount] = useState(0);
  const event = new Event('composed');
  
  const handleClick = (e, event) => {
    const elementWithActive = document.querySelector('.Active');
    elementWithActive.classList.remove('Active')
    const { target } = e;
    e.target.dispatchEvent(event);
    target.classList.add('Active');

    setCount(count + 1);

    console.log(`Id: ${target.id}, Count: ${count}`);
  }

  let $lis;
  useEffect(() => {
    $lis = document.querySelectorAll('li.button');
    $lis.forEach((node) => {
      node.addEventListener('composed', e => {
        e.stopPropagation();
        console.log('I\'m not propagating')
      });
    });
  }, [])

  return (
    <div className="Navbar">
      <ul>
        <li
          onClick={e => handleClick(e, event)}
          id="home"
          className="Active button"
        >
          Home
        </li>
        <li
          onClick={e => handleClick(e, event)}
          id="about"
          className="button"
        >
          Acerca de
        </li>
        <li
          onClick={e => handleClick(e, event)}
          id="portfolio"
          className="button"
        >
          Portfolio
        </li>
        <li
          onClick={e => handleClick(e, event)}
          id="blog"
          className="button"
        >
          Blog
        </li>
        <li
          onClick={e => handleClick(e, event)}
          id="contact"
          className="button"
        >
          Contacto
        </li>
      </ul>
    </div>
  );
};

export default Menu;