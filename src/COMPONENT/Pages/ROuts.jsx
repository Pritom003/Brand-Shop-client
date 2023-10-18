import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import AddProduct from './AddProduct';
import Header from '../Layoutss/Headers';
import Footer from '../Layoutss/Footer';
// import UpdateProduct from './UpdateProduct';

const ROuts = () => {
  return (
    <div className='max-w-5xl mx-auto'>
      <Header></Header>
<Outlet>
<Home></Home>
<Login></Login>
<Registration></Registration>
<AddProduct></AddProduct>
</Outlet>
<Footer></Footer>
    </div>
  );
};

export default ROuts;