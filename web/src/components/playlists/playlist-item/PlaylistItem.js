import React from 'react';
import { Link, useParams } from 'react-router-dom';

function PlaylistItem({playlist}) {
  const { playlistId } = useParams()

  return (
    <div className='rounded-xl bg-gradient-to-r from-green-400 to-emerald-800 m-3 p-3 text-black'>
      <Link to={`/playlists/${playlist.id}`}>{playlist.title}
    {/*add owner if we are in Discover page */}
      </Link>
    </div>
  )
}

export default PlaylistItem;