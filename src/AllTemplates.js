import React from 'react';
import { Link } from 'react-router-dom';
import './AllTemplates.css';



import image3 from './Images/3.jpg';
import image4 from './Images/4.jpg';
import image5 from './Images/5.jpg';
import image6 from './Images/6.jpg';
import image7 from './Images/7.jpg';
import image8 from './Images/8.jpg';
import image1 from './Images/9.jpg';
import image2 from './Images/10.jpg';

const AllImages = () => {
  return (
    <div>
      <h1>All Images</h1>
      <div className="images-container">
        <div className="image-box">
          <img src={image1} alt="Img 1" />
        </div>
        <div className="image-box">
          <img src={image2} alt="Img 2" />
        </div>
        <div className="image-box">
          <img src={image3} alt="Img 3" />
        </div>
        <div className="image-box">
          <img src={image4} alt="Img 4" />
        </div>
        <div className="image-box">
          <img src={image5} alt="Img 5" />
        </div>
        <div className="image-box">
          <img src={image6} alt="Img 6" />
        </div>
        <div className="image-box">
          <img src={image7} alt="Img 7" />
        </div>
        <div className="image-box">
          <img src={image8} alt="Img 8" />
        </div>
      </div>
      <Link to="/" className="back-button">
        Go Back to Homepage
      </Link>
    </div>
  );
};

export default AllImages;

