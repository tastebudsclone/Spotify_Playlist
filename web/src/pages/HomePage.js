import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { useMatch } from 'react-router-dom';

function Home() {

  const match = useMatch('/');
  console.log(match)

  return (
    <div className='h-screen w-full p-4 bg-gray-800'>
      <Navbar />
    </div>
  )
}

export default Home;