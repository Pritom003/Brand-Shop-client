import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Layoutss/AuthProvider';

const MyCart = () => {
  const usedata = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log('data', usedata);
  const [datas, setdata] = useState(usedata);

  const handledelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // DELETE OPERATION
        fetch(`https://brand-shop-server-lvs6clg9w-nilima-jahan-pritoms-projects.vercel.app/carts/id/${_id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your products have been deleted.',
                'success'
              );
              const remainingItems = datas.filter((item) => item._id !== _id.toString());
              setdata(remainingItems);
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className='text-2xl font-bold text-purple-800 underline mt-5 mb-10'>Your selected items</h1>
      {datas?.map((item, index) => (
        // Conditionally render the item or "no data selected" message
        item.user === user.email ? (
          <div key={index} className="overflow-x-auto">
            <table className="table table-xs table-pin-rows table-pin-cols">
              <thead>
                <tr>
                  <th>Brand Name</th>
                  <td>Name</td>
                  <td>Job</td>
                  <td>price</td>
                  <td>Remove Item</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{item.brandName}</th>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => handledelete(item._id)} className='btn-secondary px-2'>
                      X
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <p key={index}></p>
        )
      ))}
    </div>
  );
};

export default MyCart;
