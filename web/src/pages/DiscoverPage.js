import React from 'react';
import PlaylistsList from './../components/playlists/playlists-list/PlaylistsList';
import BackButton from '../components/ui/BackButton';
import playlist from '../assets/img/playlist.png'

function Discover() {
  return (
    <div className='h-auto w-full p-4 bg-gray-800 text-white font-mono'>
      <div className="p-2 sticky top-0 bg-gray-800">
        <BackButton path='/'/>
        <div className='flex justify-around'>
          <img src={playlist} className='w-20 h-20 ' />
          <h1 className='m-5 text-3xl font-bold'>Discover</h1>
        </div>
      </div>
      <p className='m-5 text-xl'>Here we display all users' playlists. Feel free to explore</p>
      <PlaylistsList />
    </div>
  )
}

export default Discover;