import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Productcard from '../Layoutss/Productcard';
import {BsFillEmojiFrownFill}  from "react-icons/bs";
const Products = () => {
  const loadeddata=useLoaderData()
  return (
    <div>
  

  <div className="carousel h-[200px] w-full
   bg-yellow-900">
  <div id="slide1" className="carousel-item relative w-full ">
    <img 
     src="https://i.ibb.co/Pz786QR/gucci2.webp"
      className="w-full opacity-40" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">


               
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <h2 className='text-4xl text-red-800 font-extrabold'>
            50% discount on all Gucci product
            </h2>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/XX6hBdH/adidas.jpg"
     className="w-full opacity-40" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <h2 className='text-2xl text-white font-extrabold' >
            <span className='text-4xl text-red-800 font-extrabold'>10%</span> discount on buying more than one 
            adidas products <span className='text-red-800'>!!</span>
            </h2> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/VJNrJRK/levi.png"
     className="w-full opacity-40" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a>

         <h2 className='text-2xl text-white font-extrabold'>
            Parchase more than <span className='text-red-500'>150$ </span> and get 15%
             discount on all <br />LEVI products 
            
            </h2> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>


      <h1 className='text-6xl m-4 text-yellow-700 underline'>Available products:{loadeddata.length}</h1>
      {
        loadeddata.length>0 ? loadeddata.map((product,index) => <Productcard key={index} product={product}></Productcard>):
       <div> 
       <p className='text-yellow-700 text-center text-2xl font-bold'> Sorry the product is stocked out  <br />
     new products will arrive soon.....
     .....</p></div>
       
        
      }
     
    </div>
  );
};

export default Products;