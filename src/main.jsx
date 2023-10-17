import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './COMPONENT/Pages/Home.jsx';
import AddProduct from './COMPONENT/Pages/AddProduct.jsx';
import UpdateProduct from './COMPONENT/Pages/UpdateProduct.jsx';
import Login from './COMPONENT/Pages/Login.jsx';
import Registration from './COMPONENT/Pages/Registration.jsx';
import ROuts from './COMPONENT/Pages/ROuts.jsx';
import Products from './COMPONENT/Pages/Products.jsx';
import AuthProvider from './COMPONENT/Layoutss/AuthProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <ROuts></ROuts>,
    children:[
      {path:"/",
      
      element:<Home></Home>
    },
    {
      path:'/Add',
      element:<AddProduct></AddProduct>
    },
    {
      path:'/update',
      element:<UpdateProduct></UpdateProduct>
    },
    {
      path:'/login',
      element:<Login></Login>

    },
    {
      path:'/regi',
      element:<Registration></Registration>
    },
    {
      path:'/product',
      element:<Products></Products>
      ,loader:()=>fetch('http://localhost:5000/products')
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
)
