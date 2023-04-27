import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { useMatch } from 'react-router-dom';

function Home() {

  const match = useMatch('/');
  console.log(match)

  return (
    <>
    <Navbar />
    </>
  )
}

export default Home;