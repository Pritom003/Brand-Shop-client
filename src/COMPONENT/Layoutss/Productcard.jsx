import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Productcard = ({product}) => {
  const { _id, name,brandName,type,price, rating,description,photo}=product

    

// ci2.webphttps://i.ibb.co/nk84fXw/22997.jpghttps://i.ibb.co/YNgk7NT/gucci-jog.jpg


// const handlepost=_id=>{


// }


  
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