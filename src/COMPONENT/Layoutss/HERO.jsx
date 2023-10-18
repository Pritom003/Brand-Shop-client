import React from 'react';
import { GiClothes } from 'react-icons/gi';

const HERO = () => {
  // https://i.ibb.co/y5LfKBv/headers-img.jpg
  return (
    <div>
   


   <div className="hero h-[400px]"
      style={{backgroundImage: 'url(https://i.ibb.co/jkyDXDz/freestocks-3-Q3ts-J01nc-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
   
      <h1 className="mb-5  text-2xl lg:text-5xl font-bold" style={{background: 'linear-gradient(135deg, #7B64B6, #C898B9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
        BrandBoulevard
      </h1>
      <p className="mb-5">Elevating Your Style, Brand by Brand</p>
      <button className="btn btn-primary py-2" style={{background: 'linear-gradient(135deg, #7B64B6, #C898B9)'}}>
        Get Started
      </button>
    </div>
  </div>
</div>

    </div>
  );
};

export default HERO;