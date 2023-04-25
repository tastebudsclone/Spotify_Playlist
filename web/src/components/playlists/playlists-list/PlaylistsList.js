import React, {useState, useEffect} from 'react'
import playlistService from '../../../services/playlists';

function PlaylistsList() {
  const [playlists, setPlaylists] = useState([]);
  
  useEffect(() => {
    async function fetchPlaylist() {
      try {
        const playlists = await playlistService.list(); 
        setPlaylists(playlists)
      } catch (error){
        console.error(error)
      }
    }
    fetchPlaylist()
  }, []);
  
  return (
    <>
      {playlists.map((playlist) => (<div key={playlist.id}>{playlist.id}</div>))}
    </>
  )
}

export default PlaylistsList;