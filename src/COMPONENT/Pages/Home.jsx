import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HERO from "../Layoutss/HERO";
import Footer from "../Layoutss/Footer";
import Brandcard from "../Layoutss/Brandcard";

import { BsFacebook,BsInstagram,BsTwitter } from "react-icons/bs";
const Home = () => {
  const [data,setdata]=useState()
  const [brandname,setbrand]=useState()
useEffect(()=>{
fetch('homecard.json')
.then(response=> response.json())
.then(data=> setdata(data))


},[])


  return (
<div>

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
          data?.map((item)=><Brandcard key={item.id} item={item}></Brandcard>)
        }
     


      
      </div>

      </div>

      
    </div>

    <div className="grid justify-center align-middle items-center gap-10">
      <h3 className="font-bold underline text-3xl">
        Why choose us ?
      </h3>
      <div className="grid gap-2 mb-10">
   

    <div className="collapse collapse-plus bg-base-200 ">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  Quality Assurance
  </div>
  <div className="collapse-content"> 
    <p>Our brand is known for its commitment to quality, ensuring that customers receive durable and long-lasting products.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Reliability
  </div>
  <div className="collapse-content"> 
    <p>Customers can rely on your brand for consistent product quality and performance, making it a trusted choice for their needs.

    </p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200 ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Exclusive Offers
  </div>
  <div className="collapse-content"> 
    <p>Your brand may provide exclusive discounts, promotions, or loyalty programs that reward customers for their continued support.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Customer Service
  </div>
  <div className="collapse-content"> 
    <p> Excellent customer service, including easy returns and responsive support, ensures a hassle-free shopping experience.</p>
  </div>
</div>
    </div>
    </div>
    <div className="text-center mb-10">
      <h2 className="text-2xl font-bold">Find Us On:</h2>
      <div className="flex justify-center mt-4">
        <Link to="facebook" className="mx-2 text-blue-600 hover:text-blue-800 flex gap-2 align-middle justify-center items-center">
          Facebook<BsFacebook></BsFacebook>
        </Link>
        <Link to="instagram" className="mx-2 text-purple-600 flex gap-2 align-middle justify-center items-center hover:text-purple-800">
          Instagram <BsInstagram></BsInstagram>
        </Link>
       
        <Link to="twitter" className="mx-2 text-blue-400 flex gap-2 align-middle justify-center items-center hover:text-blue-600">
          Twitter<BsTwitter></BsTwitter>
        </Link>
      </div>
    </div>
   
    <Footer></Footer>

</div>
  );
};

export default Home;