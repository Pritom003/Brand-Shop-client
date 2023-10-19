import React from 'react';
import Swal from 'sweetalert2';

const Cartdata = ({item}) => {
  const {brandName,name,type,price ,_id}=item
  console.log(item)


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

        fetch(`http://localhost:5000/carts/id/${_id}`,{
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
           <div className="overflow-x-auto">
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
        <th>{brandName}</th> 
      
        <td>{name}</td> 
        <td>{type}</td> 
        <td>${price}</td> 
        <td><button onClick={()=>handledelete(_id)} className='btn-secondary px-2'>X</button></td> 
        
      </tr>
    </tbody>
   
  </table>
</div>
    </div>
  );
};

export default Cartdata;