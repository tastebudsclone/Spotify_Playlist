import React from 'react'

function PlaylistItem({playlist}) {
  return (
    <>
      <div>{playlist.name}</div>
      {playlist.tracks.map((track) => (
        <div key={track}>{track}</div>
      ))}
    </>
  )
}

export default PlaylistItem;