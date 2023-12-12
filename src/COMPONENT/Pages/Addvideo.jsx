import React from 'react';
import ReactPlayer from 'react-player';
import moduleName from '../../assets/image/image.png';

// import ReactPlayer from 'react-player
const Addvideo = () => {
  return (
    <div className=' mx-auto md:flex sm:grid mt-10' >
      
      <img className='md:w-[200px] lg:w-[400px]' src={moduleName} alt="gul" />
    <ReactPlayer  width={380}  url='https://youtu.be/c65VlZDIlNE?si=tN5iB--SVfzQtbw0' />

    
    </div>
  );
};

export default Addvideo;