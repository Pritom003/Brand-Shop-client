import React from 'react';

const Errorpage = () => {
  return (
    <div>
    
      <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-extrabold text-gray-600">404</h1>
      <p className="text-2xl font-bold text-gray-700">Page Not Found</p>
      <p className="text-lg text-gray-500">Sorry, user the page you are looking for does not exist.</p>
    </div>
      
    </div>
  );
};

export default Errorpage;