import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiClothes } from "react-icons/gi";
import { AuthContext } from './AuthProvider';
import { BsCloudSun,BsMoonFill } from "react-icons/bs";
const Header = () => {
  const {user ,logout}=useContext(AuthContext)
// console.log(user.email)
const [loading,setloading]=useState(false)
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  // console.log(user.photoURL)
  const handlesignout=()=>{
    logout()
    .then(res=>{
      console.log('logged out',res)

    })
    .catch(err=>{
      console.log('error logged out',err)
    })
  }


  const link=<>
  <li> <NavLink to='/'>Home</NavLink></li>
  {/* <li> <NavLink to={`/cart/user/${user?user.email :loading}`}>MY Cart</NavLink></li> */}
  <li> <NavLink to='/cart'>MY Cart</NavLink></li> 

  <li> <NavLink to='/login'>login</NavLink></li>
  <li> <NavLink to='/add'> addproduct</NavLink></li>
  {/* <li> <NavLink to='/update'> update product</NavLink></li> */}
  
  </>
  return (
    <div >
      <div className=" lg:navbar grid items-center align-middle justify-center text-center bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 " >
      {link}
      </ul>
    </div>
    <div className='flex gap-2 justify-center items-center align-middle'>
     <p >
     <GiClothes className='text-purple-400 text-lg lg:text-2xl'></GiClothes>
     </p>
    <h1 className=" text-sm lg:text-xl font-bold"
     style={{background: 'linear-gradient(135deg, #7B64B6, #C898B9)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
        BrandBoulevard
      </h1>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {link}
    </ul>
  </div>
  <div className="navbar-end ">
  {
    user ?   <div className='flex  justify-center  align-middle items-center gap-2'>
    <img className='h-[20px]  rounded-full' src={user.photoURL} alt="" />
<div className='text-purple-600 flex-none gap-2 text-center '>
{user.displayName}</div> </div>:''
   }
    
   {
    user ? <button onClick={handlesignout} className=' font-bold md:mr-2 text-purple-950'>
      
   <p>Logout</p>
       
      </button>: <Link to='/login'><button
     className='text-xl  font-bold mr-2 text-purple-950'>login</button></Link>
   }
  </div>



 <div>
 <div className="flex-none">
        {/* Toggle button here */}
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input type="checkbox"
            
            
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "light" ? false : true}
            
            />
            {/* light theme sun image */}
            
            <div className="w-8 h-8 swap-on">
            <BsCloudSun></BsCloudSun>
            </div>
            {/* dark theme moon image */}
            
            <div className="w-8 h-8 swap-off">
            <BsMoonFill></BsMoonFill>
            </div>
          </label>
        </button>
      </div>
  
 
 </div>






</div>
    </div>
  );
};

export default Header;