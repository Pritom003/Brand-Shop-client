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
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
