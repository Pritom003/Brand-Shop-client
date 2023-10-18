import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HERO from "../Layoutss/HERO";


const Home = () => {
  const [data,setdata]=useState()
useEffect(()=>{
fetch('homecard.json')
.then(response=> response.json())
.then(data=> setdata(data))


},[])

  return (
    <div>
      <HERO></HERO>
      
      <div className="grid mt-36 mb-36 justify-center align-middle items-center">
      <div>
        <h3 className="text-3xl font-bold mb-6 underline">
             PROVIDED BRANDS

        </h3>
      </div>
      <div 
      className='grid grid-cols-1 
       lg:grid-cols-3 justify-center items-center
        gap-4 align-middle'>
        {
          data?.map((item)=>
         
          <div  key={item.id} className="card w-72 h-[250px] glass ">
             <Link to='/product'>
      <figure><img className="h-[150px]" src={item.image} alt="car!"/></figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
     
      </div>
      </Link>
    </div>
          
          )
        }
     


      
      </div>

      </div>

      
    </div>
  );
};

export default Home;