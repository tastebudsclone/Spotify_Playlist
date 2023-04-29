import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { useMatch } from 'react-router-dom';

function Home() {

  return (
    <div className='h-full w-full p-4 bg-gray-800'>
      <Navbar />
    </div>
  )
}

export default Home;