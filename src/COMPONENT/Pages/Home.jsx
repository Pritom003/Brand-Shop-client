import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
  const [data,setdata]=useState()
useEffect(()=>{
fetch('homecard.json')
.then(response=> response.json())
.then(data=> setdata(data))


},[])

  return (
    <div>
      

      <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-2 align-middle'>
        {
          data?.map((item)=>
         
          <div  key={item.id} className="card w-36 glass ">
             <Link to='/add'>
      <figure><img src={item.image} alt="car!"/></figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
     
      </div>
      </Link>
    </div>
          
          )
        }
     


      
      </div>

    </div>
  );
};

export default Home;