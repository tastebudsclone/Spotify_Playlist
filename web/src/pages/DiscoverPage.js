import React from 'react';
import PlaylistsList from './../components/playlists/playlists-list/PlaylistsList';
import BackButton from '../components/ui/BackButton';

function Discover() {
  return (
    <div className='h-full w-full p-4 bg-gray-800 text-white font-mono'>
      <BackButton path='/'/>
      <h1 className='m-5 text-xl font-bold'>Discover</h1>
      <p className='m-5'>Here we display all users' playlists. Feel free to explore</p>
      <PlaylistsList />
    </div>
  )
}

export default Discover;