import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import AddProduct from './AddProduct';
import Header from '../Layoutss/Headers';
// import UpdateProduct from './UpdateProduct';

const ROuts = () => {
  return (
    <div>
      <Header></Header>
<Outlet>
<Home></Home>
<Login></Login>
<Registration></Registration>
<AddProduct></AddProduct>
</Outlet>
    </div>
  );
};

export default ROuts;