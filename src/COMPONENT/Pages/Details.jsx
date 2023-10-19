import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Detail = () => {
  const [icart, setIcart] = useState([]);
  const loadeddata = useLoaderData();

  const handleAddProduct = (item) => {
    console.log(item._id);

    // Check if the item already exists in icart
    const exists = icart.some((cartItem) => cartItem._id === item._id);

    if (!exists) {
      // If it doesn't exist, add it to icart
      setIcart([...icart, item]);

      // Send the updated cart data to the server
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([...icart, item]),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Product added to cart:', data);
        })
        .catch((error) => {
          console.error('Error adding product to cart:', error);
        });
    } else {
      console.log('Product already added to the cart');
    }
  };

  console.log(icart);

  return (
    <div className='flex justify-center items-center'>
      <h3 className='text-2xl'>
        Your Selected product details:
      </h3>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{loadeddata.brandName}</h2>
          <p>{loadeddata.description}</p>
          
          <button onClick={() => handleAddProduct(loadeddata)} className="btn btn-primary py-2" style={{ background: 'linear-gradient(135deg, #7B64B6, #C898B9)' }}>
            Add to my cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
