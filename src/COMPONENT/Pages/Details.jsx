import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Layoutss/AuthProvider';

const Detail = () => {
  const {user}=useContext(AuthContext)
  
  const loadeddata = useLoaderData();
  // const navigate = useNavigate();
  const handleAddProduct = (brandName,name,rating, price,user) => {
    // console.log(item._id);
    

   const data={brandName,name,rating, price,user}
   console.log(data)
      fetch('https://brand-shop-server-8nsu4evdj-nilima-jahan-pritoms-projects.vercel.app/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              title: 'Success!',
              text: 'product  Successfully added to curt',
              icon: 'success',
              confirmButtonText: 'Cool'
          })
          }
          
          console.log('Product added to cart:', data);
        })
        .catch((error) => {
          console.error('Error adding product to cart:', error);
        });
    // } else {
    //   console.log('Product already added to the cart');
    // }
  };

  // console.log(icart);

  return (
    <div className='gridjustify-center items-center'>
      <h3 className='text-2xl text-purple-700'>
        Your Selected product details:
      </h3>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{loadeddata.brandName}</h2>
          <p>{loadeddata.description}</p>
          
          <button onClick={() => handleAddProduct(loadeddata.brandName, loadeddata.name ,loadeddata.rating,
            loadeddata.price ,user.email)} className="btn btn-primary py-2" style={{ background: 'linear-gradient(135deg, #7B64B6, #C898B9)' }}>
            Add to my cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;