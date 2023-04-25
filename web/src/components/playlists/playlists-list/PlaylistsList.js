import React, {useState, useEffect} from 'react'

function PlaylistsList() {
  const [playlists, setPlaylists] = useState([]);
  return (
    <>
      {playlists.map((playlist) => <div key={playlist.id}>{playlist.id}</div>)}
    </>
  )
}

export default PlaylistsList