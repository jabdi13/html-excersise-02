import React from 'react';
import '../styles/components/Content.css';
import image2 from '../images/excersice 2.png';

const Content = () => {
  return (
    <div className="Content">
      <img src={image2} alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        doloribus labore autem? Voluptatem recusandae Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Perferendis nisi, repellat placeat
        amet consequuntur necessitatibus odio laborum quis quae quasi eligendi
      </p>
    </div>
  );
};

export default Content;