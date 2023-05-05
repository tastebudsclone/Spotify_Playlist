import React from 'react';
import { Link, useParams } from 'react-router-dom';

function PlaylistItem({playlist}) {
  const { playlistId } = useParams()

  return (
    <div className='rounded-xl border-2 m-3 p-3 bg-gray-400 text-gray-800 hover:bg-green-300 font-bold'>
      <Link to={`/playlists/${playlist.id}`}>{playlist.title}
    {/*add owner if we are in Discover page */}
      </Link>
    </div>
  )
}

export default PlaylistItem;