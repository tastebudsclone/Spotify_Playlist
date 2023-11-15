import React from 'react'
import PlaylistForm from '../../components/playlists/playlist-form/PlaylistForm'
import BackButton from '../../components/ui/BackButton'

function CreateOnMood() {
  return (
    <div className='flex items-center justify-center h-auto bg-gray-800'>
      <div className='p-4 bg-gray-800 font-mono text-gray-800 max-w-md w-full'>
        <BackButton path='/playlist/create' />
        <div className='flex flex-1 flex-col'>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <PlaylistForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateOnMood;