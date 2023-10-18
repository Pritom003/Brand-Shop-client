import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
  const product =useLoaderData()
  const { _id, name,bandName,type,price, rating,description,photo}=product

  return (
    <div>
      Product :{name}

    </div>
  );
};

export default UpdateProduct;