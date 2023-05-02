import React from 'react';
import { Link, useParams } from 'react-router-dom';

function PlaylistItem({playlist}) {
  const { playlistId } = useParams()

  return (
    <div>
      <Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
      
    </div>
  )
}

export default PlaylistItem;