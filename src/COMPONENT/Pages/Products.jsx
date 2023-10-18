import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Productcard from '../Layoutss/Productcard';

const Products = () => {
  const loadeddata=useLoaderData()
  return (
    <div>
      <h1 className='text-6xl'> products:{loadeddata.length}</h1>
      {
        loadeddata?.map((product,index) => <Productcard key={index} product={product}></Productcard>)
      }
     
    </div>
  );
};

export default Products;