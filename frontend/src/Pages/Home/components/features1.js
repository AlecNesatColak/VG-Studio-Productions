import React, { useState } from "react";
import image1 from '../../../assets/PagesAssets/landscape-1.png'
import image2 from '../../../assets/PagesAssets/landscape-2.png'
import image3 from '../../../assets/PagesAssets/landscape-3.png'

import "./features1.css";

const Features1 = () => {
  return (
    <div className="container">
    <div className="heading">Events</div>
    <div className="card__container">
      <article className="card__article">
        <img src={image1} alt="Vancouver Mountains" className="card__img" />
        <div className="card__data">
          
          <h2 className="card__title">The Great Path</h2>
          <span className="card__description">Vancouver Mountains, Canada</span>
          <p className="card__date">09/20/2024</p>
          <a href="#" className="card__button">Read More</a>
        </div>
      </article>

      <article className="card__article">
        <img src={image2} alt="Poon Hill" className="card__img" />
        <div className="card__data">
          
          <h2 className="card__title">Starry Night</h2>
          <span className="card__description">Poon Hill, Nepal</span>
          <p className="card__date">09/20/2024</p>
          <a href="#" className="card__button">Read More</a>
        </div>
      </article>

      <article className="card__article">
        <img src={image3} alt="Bojcin Forest" className="card__img" />
        <div className="card__data">
          
          <h2 className="card__title">Path Of Peace</h2>
          <span className="card__description">Bojcin Forest, Serbia</span>
          <p className="card__date">09/20/2024</p>
          <a href="#" className="card__button">Read More</a>
        </div>
      </article>
      <article className="card__article">
        <img src={image1} alt="Vancouver Mountains" className="card__img" />
        <div className="card__data">
          
          <h2 className="card__title">The Great Path</h2>
          <span className="card__description">Vancouver Mountains, Canada</span>
          <p className="card__date">09/20/2024</p>
          <a href="#" className="card__button">Read More</a>
        </div>
      </article>
      <article className="card__article">
        <img src={image1} alt="Vancouver Mountains" className="card__img" />
        <div className="card__data">
          
          <h2 className="card__title">The Great Path</h2>
          <span className="card__description">Vancouver Mountains, Canada</span>
          <p className="card__date">09/20/2024</p>
          <a href="#" className="card__button">Read More</a>
        </div>
      </article>
      <article className="card__article">
        <img src={image1} alt="Vancouver Mountains" className="card__img" />
        <div className="card__data">
          
          <h2 className="card__title">The Great Path</h2>
          <span className="card__description">Vancouver Mountains, Canada</span>
          <p className="card__date">09/20/2024</p>
          <a href="#" className="card__button">Read More</a>
        </div>
      </article>
    </div>
  </div>
  );
};


export default Features1;
