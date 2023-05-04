import React from 'react'
import BackButton from '../../components/ui/BackButton'
import ArtistsForm from '../../components/playlists/playlist-form/ArtistsForm'

function CreateOnArtists() {
  return (
    <div className='h-full w-full p-4 bg-gray-800 font-mono'>
        <BackButton path='/playlist/create'/>
        <div className="flex flex-1 flex-col">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <ArtistsForm />
          </div>
        </div>
      </div>
  )
}

export default CreateOnArtists