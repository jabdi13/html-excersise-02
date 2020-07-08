import React from 'react';
import '../styles/components/FeaturedEntry.css';
import image1 from "../images/excsercise.png";

const FeaturedEntry = () => {
  return (
    <div className="FeaturedEntry">
      <div className="FeaturedEntry-info">
        <h2>Entrada destacada</h2>
        <h1>Crea un sitio web usando HTML5</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
          neque exercitationem quaerat magni recusandae iure vitae totam
          accusamus repudiandae. Quia dolor consequuntur voluptate, repellat
          velit nihil quod eaque reprehenderit quos?
        </p>
      </div>
      <img src={image1} alt="" />
    </div>
  );
};

export default FeaturedEntry;