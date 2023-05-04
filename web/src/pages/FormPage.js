import React from 'react'
import PlaylistForm from '../components/playlists/playlist-form/PlaylistForm'
import BackButton from '../components/ui/BackButton';

function FormPage() {
  return (
    <div className='h-full w-full bg-gray-800 p-5 font-mono'>
      <BackButton path='/playlist/create'/>
      <PlaylistForm />
    </div>
  )
}

export default FormPage;