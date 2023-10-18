import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Productcard = ({product}) => {
  const { _id, name,bandName,type,price, rating,description,photo}=product

    
    const handledelete=_id=>{
      console.log(_id)
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

          fetch(`http://localhost:5000/products/${_id}`,{
            method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
              Swal.fire(
            'Deleted!',
            'Your products has been deleted.',
            'success'
          )

            }
          })
        }
      })
    }
   
    
    
  return (
    <div>
      <div >

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     <Link to={`/update/${_id}`}> <button className="btn btn-primary">update</button></Link>
      <button
      onClick={()=>handledelete(_id)}
      className="btn btn-primary">delete</button>
    </div>
  </div>
</div>
                  
        </div>
    </div>
  );
};

export default Productcard;