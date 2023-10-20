import React from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {
  const handlechange = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const brandName = form.bandName.value;
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
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mydata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          console.log(data)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your product has been added',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className='grid justify-center align-middle items-center'>
      <div>
        <h2 className='text-2xl font-bold text-center m-4 text-purple-800'>
          Add product to the products collections 
        </h2>
      </div>
      <form onSubmit={handlechange} className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="mb-4">
          <label className="block text-sm font-medium text-purple-700">Image</label>
          <input
            type="photo"
            name="photo"
            className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-purple-700">Name</label>
          <input
            type="text"
            name="name"
            className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-purple-700">Band Name</label>
          <input
            type="text"
            name="bandName"
            className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-purple-700">Type</label>
          <select
            name="type"
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
          <label className="block text-sm font-medium text-purple-700">Price</label>
          <input
            type="number"
            name="price"
            className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-purple-700">Rating</label>
          <input
            type="number"
            name="rating"
            className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-purple-700">Description</label>
          <textarea
            name="description"
            className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          ></textarea>
        </div>

        <div className="col-span-2 flex justify-center">
          <button
            className="btn btn-primary py-2 px-10"
            style={{ background: 'linear-gradient(135deg, #7B64B6, #C898B9)' }}
          >
            Add product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
