import React from 'react';

const Cartdata = ({item}) => {
  const {brandName,name,type,price}=item
  console.log(item)
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
        <td><button  className='btn-secondary px-2'>X</button></td> 
        
      </tr>
    </tbody>
   
  </table>
</div>
    </div>
  );
};

export default Cartdata;