import React from 'react';
import PlaylistsList from './../components/playlists/playlists-list/PlaylistsList';
import BackButton from '../components/ui/BackButton';
import playlist from '../assets/img/playlist.png'

function Discover() {
  return (
    <div className='h-auto flex items-center justify-center bg-gray-800'>
      <div className='p-4 bg-gray-800 text-white font-mono max-w-md w-full'>
        <div className="p-2 sticky top-0 bg-gray-800">
          <BackButton path='/'/>
          <div className='flex justify-around'>
            <img src={playlist} className='w-20 h-20 ' alt="Playlist" />
            <h1 className='m-5 text-3xl font-bold'>Discover</h1>
          </div>
        </div>
        <p className='m-5 text-xl text-center'>Here we display all users' playlists. Feel free to explore</p>
        <PlaylistsList />
      </div>
    </div>
  )
}

export default Discover;