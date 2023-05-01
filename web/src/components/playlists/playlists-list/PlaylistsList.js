import React, {useState, useEffect} from 'react'
import playlistService from '../../../services/playlists';
import PlaylistItem from '../playlist-item/PlaylistItem';

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
      {playlists.map((playlist) => <PlaylistItem key={playlist.id} playlist={playlist} />)}
    </>
  )
}

export default PlaylistsList;