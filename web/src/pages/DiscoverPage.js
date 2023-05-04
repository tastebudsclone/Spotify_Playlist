import React from 'react';
import PlaylistsList from './../components/playlists/playlists-list/PlaylistsList';
import BackButton from '../components/ui/BackButton';

function Discover() {
  return (
    <div className='h-auto w-full p-4 bg-gray-800 text-white font-mono'>
      <div className="p-2 sticky top-0 bg-gray-800">
        <BackButton path='/'/>
        <h1 className='m-5 text-xl font-bold'>Discover</h1>
        <p className='m-5'>Here we display all users' playlists. Feel free to explore</p>
      </div>
      <PlaylistsList />
    </div>
  )
}

export default Discover;