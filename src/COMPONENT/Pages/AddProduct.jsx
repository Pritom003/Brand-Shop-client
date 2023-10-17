import React from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {
  const handlechange = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo=form.photo.value
    const name = form.name.value;
    const bandName = form.bandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const mydata = {
      name,
      bandName,
      type,
      price,
      rating,
      description,
      photo
    };
    console.log(mydata);
    // send backend data
     fetch('http://localhost:5000/products',{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(mydata)
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
    
      }
     })
  };

  return (
    <div>
      <form onSubmit={handlechange} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="mb-4 sm:grid-cols-2 lg:grid-cols-1">
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="photo"
           
            name="photo"
            className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>

        <div className="mb-4 sm:grid-cols-2 lg:grid-cols-1">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
           
            name="name"
            className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>

        <div className="mb-4 sm:grid-cols-2 lg:grid-cols-1">
          <label className="block text-sm font-medium text-gray-700">Band Name</label>
          <input
            type="text"
           
            name="bandName"
            className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>

        <div className="mb-4 sm:grid-cols-2 lg:grid-cols-1">
          <label className="block text-sm font-medium text-gray-700">Type</label>
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

        <div className="mb-4 sm:grid-cols-2 lg:grid-cols-1">
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
           
            name="price"
            className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>

        <div className="mb-4 sm:grid-cols-2 lg:grid-cols-1">
          <label className="block text-sm font-medium text-gray-700">Rating</label>
          <input
            type="number"
            
            name="rating"
            className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          />
        </div>

        <div className="mb-4 sm:grid-cols-2 lg:grid-cols-1 col-span-2">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
           
            name="description"
            className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
          ></textarea>
        </div>

        <div>
          <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Details
          </button>
        </div>

        <div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
