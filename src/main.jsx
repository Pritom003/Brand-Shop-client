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
import Errorpage from './COMPONENT/Pages/Errorpage.jsx';
import Privaterout from './COMPONENT/Layoutss/PrivateRout.jsx';
// import Details from './COMPONENT/Pages/Details.jsx';
import Detail from './COMPONENT/Pages/Details.jsx';
import MyCart from './COMPONENT/Pages/MyCart.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <ROuts></ROuts>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {path:"/",
      
      element:<Home></Home>
    },
    {
      path:'/Add',
      element:<Privaterout><AddProduct></AddProduct></Privaterout>
    },
    {
      path: '/details/:id',
      element: <Privaterout><Detail></Detail></Privaterout>,
      loader: ({ params }) => fetch(`https://brand-shop-server-lvs6clg9w-nilima-jahan-pritoms-projects.vercel.app/products/id/${params.id}`),
    },    
    //   {
    //       path: '/cart/user/:user',
    //       element: <Privaterout><MyCart></MyCart></Privaterout>,
    //       loader:({params})=>fetch(`https://brand-shop-server-lvs6clg9w-nilima-jahan-pritoms-projects.vercel.app/carts/user/${params.user}`)
    // }, 
    {
      path: '/carts',
      element: <Privaterout><MyCart></MyCart></Privaterout>,
      loader:()=>fetch(`https://brand-shop-server-lvs6clg9w-nilima-jahan-pritoms-projects.vercel.app/carts`)
      
}, 
    
    {
      path:'/update/:id',
      element:<UpdateProduct></UpdateProduct>,
      loader:({params})=>fetch(`https://brand-shop-server-lvs6clg9w-nilima-jahan-pritoms-projects.vercel.app/products/${params.id}`)
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
      path: '/product/:brandName',
      element: <Products></Products>,
      loader: ({ params }) => fetch(`https://brand-shop-server-lvs6clg9w-nilima-jahan-pritoms-projects.vercel.app/products/brand/${params.brandName}`),
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
)
