import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png'

function Navbar() {
  return (
    <div className='h-screen w-full p-4 bg-gray-800'>
      <div className='flex flex-col text-gray-700 bg-gray-900 rounded-lg text-left font-medium shadow-lg'>
        <img src={logo} alt='Spotify Logo' className="w-20 h-20 mx-auto mt-10 mb-28"/>
    
        <span className='mb-14'>
          <i className='ps-10 w-8 p-5 rounded-full'></i> 
          <Link to='/profile'>
            <span className='mx-2'>Profile</span>     
          </Link>
        </span>
 
        <span className='mb-14'>
          <i className='ps-10 w-8 p-5 rounded-full'></i>
          <Link to='/discover'>
            <span className='mx-2'>Discover</span>
          </Link>
        </span>

        <span className='mb-14'>
          <i className='ps-10 w-8 p-5 rounded-full'></i>
          <Link>
            <span className='mx-2'>Daily song</span>
          </Link>
        </span>

        <span className='mb-14'>
          <i className='ps-10 w-8 p-5 rounded-full'></i>
          <Link>
            <span className='mx-2'>Challenge</span>
          </Link>
        </span>

        <span className='mb-28'>
          <i className='ps-10 w-8 p-5 rounded-full'></i>
          <Link>
            <span className='mx-2'>Leaderboard</span>
          </Link>
        </span>

        <span className='m-5 p-4 text-center text-gray-900 bg-green-500 rounded-lg font-medium'>
          <Link>
            <span className=''>Create a playlist</span>
          </Link>
        </span>

      </div>
    </div>
  )
}

export default Navbar;