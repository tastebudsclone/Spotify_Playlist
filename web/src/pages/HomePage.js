import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { useMatch } from 'react-router-dom';

function Home() {

  return (
    <div className='flex items-center justify-center h-screen bg-gray-800'>
      <div className='p-4 bg-gray-800 font-mono max-w-md w-full'>
          <Navbar />
      </div>
    </div>  
  )
}

export default Home;