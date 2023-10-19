import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Productcard = ({product}) => {
  const { _id, name,brandName,type,price, rating,description,photo}=product

    



  
    
   
    
    
  return (
    <div>
      <div >


    







<div className='grid justify-center align-middle items-center p-2 gap-2 mt-10'>
<div className="card   bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl">{brandName}</h2>
    <p>{description}</p>
    <div className='grid grid-cols-2 justify-start  items-center gap-2'>
    <p className='font-bold'> Product Name:{name}</p>
    <p className='font-bold'> Price:${price}</p>
    <p>Product type:{type}</p>
    <p>Rating: {rating}</p>
   
    </div>
   <Link to={`/details/${_id}`}>
   <button 
    
    className="btn btn-primary  py-2" 
    style={{background: 'linear-gradient(135deg, #7B64B6, #C898B9)'}}>
      View Details
      </button>

   
   </Link>
   <Link to={`/update/${_id}`}>   <button 
    
    className="btn btn-primary  py-2" 
    style={{background: 'linear-gradient(135deg, #7B64B6, #C898B9)'}}>
      Updatedetails
      </button></Link>
  </div>
</div>
</div>
                  
        </div>
    </div>
  );
};

export default Productcard;