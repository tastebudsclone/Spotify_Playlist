import React from 'react';
import { Link, useParams } from 'react-router-dom';

function PlaylistItem({playlist, user}) {
  const { playlistId } = useParams()

  return (
    <div className='rounded-xl flex flex-row justify-between border-2 m-3 p-3 bg-gray-400 text-gray-800 hover:bg-green-300 font-bold'>
      <Link to={`/playlists/${playlist.id}`}>{playlist.title}
    {/*add owner if we are in Discover page */}
      </Link>
      <small>Creator:{playlist.owner.username ? `${playlist.owner.username}` : `${user.username}`}</small>
    </div>
  )
}

export default PlaylistItem;