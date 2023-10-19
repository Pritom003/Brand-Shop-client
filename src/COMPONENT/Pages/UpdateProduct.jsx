// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateProduct = () => {
  const product = useLoaderData();
 const {_id, name,brandName, type,price, rating, description, photo}=product
   
    
   
    
   
   console.log(product)
   

  const handleupdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const mydata = {
      name,
      brandName,
      type,
      price,
      rating,
      description,
      photo,
    };
    console.log(mydata);
    // send backend data
    fetch(`http://localhost:5000/products/${_id}`, {
      method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(mydata)
        })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
              title: 'Success!',
              text: 'product Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
          })
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleupdate} className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="photo"
            name="photo"
            defaultValue={photo}
            
            className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Brand Name</label>
          <input
            type="text"
            name="brandName"
            defaultValue={brandName}
            className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <select
            name="type"
            defaultValue={type}
            className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          >
            <option value="shoes">Shoes</option>
            <option value="shirt">Shirt</option>
            <option value="t-shirt">T-Shirt</option>
            <option value="glasses">Glasses</option>
            <option value="cap">Cap</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            defaultValue={price}
            className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Rating</label>
          <input
            type="number"
            name="rating"
            defaultValue={rating}
            className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            defaultValue={description}
            className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          ></textarea>
        </div>

        <div className="col-span-2 flex justify-center">
          <button 
            className="btn btn-primary py-2 px-10"
            style={{ background: 'linear-gradient(135deg, #7B64B6, #C898B9)' }}
          >
            Updata 
          </button>
        </div>
      </form>
    </div>
  );
};


export default UpdateProduct;
