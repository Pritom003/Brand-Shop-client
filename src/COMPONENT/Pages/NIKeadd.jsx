
import React from 'react';
import ReactPlayer from 'react-player';
import nike from '../../assets/image/nike.png'
const NIKeadd = () => {
  return (
    <div className=' mx-auto md:flex gap-2 sm:grid'>
    {/* <h1 className=' text-2xl text-center underline p-4  text-orange-400'> Watch the add now!</h1> */}
    <img className='md:w-[600px] p-10 lg:w-[400px]' src={nike} alt="gul" />
    <ReactPlayer width={350} url='https://youtu.be/GVljFVClyws?si=BO2gHkzd0KWkIWGe' />
  </div>
  );
};

export default NIKeadd;