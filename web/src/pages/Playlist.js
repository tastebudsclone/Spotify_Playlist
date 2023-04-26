import React from 'react';
import { useParams } from 'react-router-dom';

function Playlist() {
  const params = useParams();
  return (
    <div>Playlist {params.id}</div>
  )
}

export default Playlist;