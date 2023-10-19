import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Cartdata from '../Layoutss/Cartdata';

const MyCart = () => {
 

 const usedata =useLoaderData()
console.log(usedata)

  return (
    <div>
     MyCart
{
  usedata?.map((item,index)=><Cartdata key={index} item={item}></Cartdata>)
}

    </div>
  );
};

export default MyCart;