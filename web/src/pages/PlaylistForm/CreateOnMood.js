import React from 'react'
import PlaylistForm from '../../components/playlists/playlist-form/PlaylistForm'
import BackButton from '../../components/ui/BackButton'

function CreateOnMood() {
  return (
    <div className='h-auto w-full p-4 bg-gray-800 font-mono'>
        <BackButton path='/playlist/create'/>
        <div className="flex flex-1 flex-col">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <PlaylistForm />
          </div>
        </div>
      </div>
  )
}

export default CreateOnMood;