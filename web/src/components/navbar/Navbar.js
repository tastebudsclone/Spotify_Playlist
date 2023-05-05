import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/musicapp.png'
import profile from '../../assets/img/profile.png'
import explore from '../../assets/img/explore.png'
import ranking from '../../assets/img/music-app.png'
import song from '../../assets/img/love-song.png'

function Navbar() {
  return (
    <div className='w-full p-4 bg-gray-800'>
      <div className='flex flex-col text-white bg-gray-400 rounded-lg text-left justify-center font-medium shadow-lg'>
        <img src={logo} alt='Spotify Logo' className="w-20 h-20 mx-auto mt-20"/>
    
        <span className='mb-7 p-5 flex flex-row items-center text-2xl'>
          <img className='rounded h-12 w-12' src={profile} />
          <Link to='/users/me'>
            <p className='mx-10'>Profile</p>     
          </Link>
        </span>
 
        <span className='mb-7 p-5 flex flex-row items-center text-2xl'>
          <img className='rounded h-12 w-12' src={explore} />
          <Link to='/discover'>
            <p className='mx-10'>Discover</p>     
          </Link>
        </span>

        <span className='mb-7 p-5 flex flex-row items-center text-2xl'>
          <img className='rounded h-12 w-12' src={song} />
          <Link to='/'>
            <p className='mx-10'>Daily song</p>     
          </Link>
        </span>

    
        <span className='mb-7 p-5 flex flex-row items-center text-2xl'>
          <img className='rounded h-12 w-12' src={ranking} />
          <Link to='/'>
            <p className='mx-10'>Leaderboard</p>     
          </Link>
        </span>


        <button className='m-5 p-4 mb-10 text-center font-bold text-white bg-gray-800 rounded-xl text-2xl transform motion-safe:hover:scale-110'>
          <Link to='/playlist/create'>
            <span className='transform motion-safe:hover:scale-110'>Create a playlist</span>
          </Link>
        </button>

      </div>
    </div>
  )
}

export default Navbar;