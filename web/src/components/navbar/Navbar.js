import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/spotifyicon.png'

function Navbar() {
  return (
    <div className='w-full p-4 bg-gray-800'>
      <div className='flex flex-col text-white bg-gray-900 rounded-lg text-left justify-center font-medium shadow-lg'>
        <img src={logo} alt='Spotify Logo' className="w-20 h-20 mx-auto mt-10 mb-28"/>
    
        <span className='mb-14'>
          <i className='ps-10 w-8 p-5 rounded-full'></i> 
          <Link to='/users/me'>
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

        <button className='m-5 p-4 text-center font-bold text-black bg-green-400 rounded-lg'>
          <Link to='/playlist/create'>
            <span className=''>Create a playlist</span>
          </Link>
        </button>

      </div>
    </div>
  )
}

export default Navbar;