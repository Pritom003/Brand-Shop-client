import { data } from 'autoprefixer';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Brandcard = ({item}) => {
  const {brandName,image}=item

 
  return (
    <div>
       <div className="card w-72 h-[250px] glass ">
             <Link to={`/product/${brandName}`}>
      <figure><img className="h-[150px]" src={image} alt="car!"/></figure>
      <div className="card-body">
        <h2 className="card-title">{brandName}</h2>
     
      </div>
      </Link>
    </div>
    </div>
  );
};

export default Brandcard;