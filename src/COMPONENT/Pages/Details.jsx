import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Detail = () => {
const loadeddata=useLoaderData()
// const {_id, name, brandName, type, price, rating, description, photo}=loadeddata
const {id}=useParams()
console.log(id,loadeddata)
  return (
    <div className='flex justify-center items-center'>
      <h3 className='text-2xl'>
        Your Selected product details:
      </h3>
     <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{loadeddata.brandName}</h2>
    <p>{loadeddata.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">add to my cart</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Detail;